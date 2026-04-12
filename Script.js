// ── TAB SWITCHING ──
function switchTab(tab) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  event.target.classList.add('active');
}

// ── FORM SUBMIT ──
function submitForm(type) {
  const banner = document.getElementById('success-' + type);
  banner.classList.add('show');
  setTimeout(() => banner.classList.remove('show'), 6000);
}

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── CHATBOT ──
const SYSTEM_PROMPT = `You are a warm, helpful AI assistant for CareConnect, a healthcare NGO in Tamil Nadu, India. 
Answer questions about: 
- Volunteering (how to register, requirements, time commitment, roles available)
- Patient services (what support is available, eligibility, how to apply, cost — it's free)
- Coverage areas (currently 12 districts in Tamil Nadu including Coimbatore, Erode, Salem, Tiruppur)
- The matching process (AI-assisted, 24hr response time)
- General healthcare FAQs

Keep answers concise (2-4 sentences), warm, and encouraging. 
If asked something outside scope, kindly direct them to use the registration form or call the helpline at 1800-xxx-xxxx.
Never provide specific medical diagnoses or prescriptions.`;

const chatHistory = [];

async function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  appendMsg(text, 'user');
  chatHistory.push({ role: 'user', content: text });
  showTyping();

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: chatHistory
      })
    });
    const data = await res.json();
    const reply = data.content?.[0]?.text || "I'm sorry, I couldn't fetch a response. Please try again.";
    chatHistory.push({ role: 'assistant', content: reply });
    removeTyping();
    appendMsg(reply, 'bot');
  } catch(err) {
    removeTyping();
    appendMsg("Sorry, I'm having trouble connecting. Please try again or use the registration form above.", 'bot');
  }
}

function sendQuick(text) {
  document.getElementById('chatInput').value = text;
  sendChat();
}

function appendMsg(text, role) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg typing'; div.id = 'typingIndicator';
  div.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}
