import React, { useRef, useEffect } from 'react'

const steps = [
  {
    num: '01', icon: '📝',
    title: 'Register Your Need or Skill',
    desc: 'Patients describe their support need. Volunteers share their skills and availability. It takes under 3 minutes.'
  },
  {
    num: '02', icon: '🤖',
    title: 'AI-Assisted Matching',
    desc: 'Our system analyses requests and automatically suggests the best-matched volunteer based on location, skills, and urgency.'
  },
  {
    num: '03', icon: '💚',
    title: 'Connect & Receive Care',
    desc: 'A coordinator confirms the match and facilitates the connection. Feedback is collected to improve future matchings.'
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how" ref={sectionRef}>
      <div className="section-inner">
        <div className="fade-in">
          <div className="section-label">Process</div>
          <div className="section-title">How CareConnect Works</div>
          <p className="section-sub">A simple three-step journey from registration to receiving or giving care.</p>
        </div>
        <div className="steps">
          {steps.map((step, i) => (
            <div className="step-card fade-in" key={i}>
              <div className="step-num">{step.num}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}