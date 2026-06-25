import React, { useState, useRef, useEffect } from 'react'

const SYSTEM_PROMPT = `You are a warm, helpful AI assistant for CareConnect, a healthcare NGO in Tamil Nadu, India.
Answer questions about:
- Volunteering (how to register, requirements, time commitment, roles available)
- Patient services (what support is available, eligibility, how to apply, cost — it's free)
- Coverage areas (currently 12 districts in Tamil Nadu including Coimbatore, Erode, Salem, Tiruppur)
- The matching process (AI-assisted, 24hr response time)
- General healthcare FAQs
Keep answers concise (2-4 sentences), warm, and encouraging.
If asked something outside scope, kindly direct them to use the registration form or call the helpline at 1800-xxx-xxxx.
Never provide specific medical diagnoses or prescriptions.`

const QUICK_QUESTIONS = [
  { label: 'How to volunteer?',  text: 'How do I register as a volunteer?' },
  { label: 'Services offered',   text: 'What services do you offer?' },
  { label: 'Is it free?',        text: 'Is there any cost for patients?' },
  { label: 'Coverage areas',     text: 'Which districts do you serve?' },
]

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hello! 👋 I'm the CareConnect AI assistant. I can help answer questions about our healthcare support programs, volunteering, eligibility, and more. How can I help you today?"
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const chatHistory = useRef([])
  const chatBoxRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (messages.length > 1 && chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }
  }, [messages, isTyping])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const sendChat = async (text) => {
    const userText = (text || input).trim()
    if (!userText || isTyping) return
    setInput('')

    setMessages(prev => [...prev, { role: 'user', text: userText }])
    setIsTyping(true)

    const updatedHistory = [
      ...chatHistory.current,
      { role: 'user', parts: [{ text: userText }] },
    ]

    try {
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': import.meta.env.VITE_GEMINI_KEY,
          },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: updatedHistory,
          }),
        }
      )

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error?.message || `Error ${res.status}`)
      }

      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text
        || "I'm sorry, I couldn't get a response. Please try again."

      chatHistory.current = [
        ...updatedHistory,
        { role: 'model', parts: [{ text: reply }] },
      ]

      setMessages(prev => [...prev, { role: 'bot', text: reply }])

    } catch (err) {
      console.error(err)
      setMessages(prev => [...prev, {
        role: 'bot',
        text: "Sorry, something went wrong. Please try again in a moment!"
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendChat()
    }
  }

  return (
    <section
      id="assistant"
      style={{ background: 'linear-gradient(to bottom, var(--cream), #F0EDE6)' }}
      ref={sectionRef}
    >
      <div className="section-inner">
        <div className="fade-in">
          <div className="section-label">AI-Powered</div>
          <div className="section-title">Healthcare FAQ Assistant</div>
          <p className="section-sub">
            Have questions? Our AI assistant is here 24/7 to answer common healthcare and program queries
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <div className="chat-wrapper fade-in">

            {/* Header */}
            <div className="chat-header">
              <div className="chat-avatar">🌿</div>
              <div>
                <div className="chat-title">CareConnect Assistant</div>
                <div className="chat-sub">
                  {isTyping ? 'Thinking…' : 'Powered by Gemini AI'}
                </div>
              </div>
              <div className="chat-dot" style={{
                background: isTyping ? '#FCD34D' : '#6EE7B7',
                transition: 'background 0.3s'
              }} />
            </div>

            {/* Messages */}
            <div className="chat-messages" ref={chatBoxRef}>
              {messages.map((msg, i) => (
                <div key={i} className={`msg ${msg.role}`}>
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className="msg typing">
                  <div className="typing-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Buttons */}
            <div className="quick-btns">
              {QUICK_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  className="quick-btn"
                  onClick={() => sendChat(q.text)}
                  disabled={isTyping}
                  style={{ opacity: isTyping ? 0.5 : 1 }}
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="chat-input-row">
              <input
                className="chat-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isTyping ? 'Thinking…' : 'Type your question…'}
                disabled={isTyping}
              />
              <button
                className="chat-send"
                onClick={() => sendChat()}
                disabled={isTyping}
                style={{ opacity: isTyping ? 0.5 : 1, cursor: isTyping ? 'not-allowed' : 'pointer' }}
              >
                ➤
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}