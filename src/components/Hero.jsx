import React, { useEffect, useRef } from 'react'

const stats = [
  { icon: '🏥', num: '1,240+', label: 'Patients Supported' },
  { icon: '🤝', num: '380', label: 'Active Volunteers' },
  { icon: '📍', num: '12', label: 'Districts Covered' },
  { icon: '⭐', num: '4.9', label: 'Average Rating' },
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (el) {
      setTimeout(() => el.classList.add('visible'), 100)
    }
  }, [])

  return (
    <div className="hero fade-in" ref={ref}>
      <div>
        <div className="hero-tag">🌿 Healthcare NGO Platform</div>
        <h1>Connecting <em>Care</em> with Community</h1>
        <p>CareConnect bridges patients in need with dedicated volunteers and healthcare professionals — making quality support accessible to everyone.</p>
        <div className="hero-btns">
          <a href="#register" className="btn-primary">Register Today</a>
          <a href="#assistant" className="btn-outline">Ask AI Assistant</a>
        </div>
      </div>
      <div className="hero-visual">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}