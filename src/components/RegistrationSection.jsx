import React, { useState, useRef, useEffect } from 'react'

function PatientForm() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 6000)
  }

  return (
    <div className="form-card fade-in visible">
      <div className="form-grid">
        <div className="form-group">
          <label>Full Name *</label>
          <input type="text" placeholder="e.g. Priyanka Joshi" />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" placeholder="e.g. 45" min="1" max="120" />
        </div>
        <div className="form-group">
          <label>Phone Number *</label>
          <input type="tel" placeholder="+91 98765 43210" />
        </div>
        <div className="form-group">
          <label>District / Area</label>
          <input type="text" placeholder="e.g. Madurai" />
        </div>
        <div className="form-group">
          <label>Type of Support Needed *</label>
          <select defaultValue="">
            <option value="" disabled>— Select —</option>
            <option>Medical Consultation</option>
            <option>Mental Health Support</option>
            <option>Home Care Assistance</option>
            <option>Medication Access</option>
            <option>Transportation to Hospital</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Urgency Level</label>
          <select>
            <option>Normal (within a week)</option>
            <option>Soon (2–3 days)</option>
            <option>Urgent (today)</option>
          </select>
        </div>
        <div className="form-group full">
          <label>Brief Description of Need</label>
          <textarea placeholder="Describe your situation so we can match you with the right volunteer or resource…"></textarea>
        </div>
      </div>
      <button className="form-submit" onClick={handleSubmit}>Submit Patient Request →</button>
      <div className={`success-banner${showSuccess ? ' show' : ''}`}>
        ✅ Thank you! Your request has been received. A coordinator will contact you within 24 hours.
      </div>
    </div>
  )
}

function VolunteerForm() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 6000)
  }

  return (
    <div className="form-card fade-in visible">
      <div className="form-grid">
        <div className="form-group">
          <label>Full Name *</label>
          <input type="text" placeholder="e.g. Arjun Menon" />
        </div>
        <div className="form-group">
          <label>Email Address *</label>
          <input type="email" placeholder="arjun@example.com" />
        </div>
        <div className="form-group">
          <label>Phone Number *</label>
          <input type="tel" placeholder="+91 98765 43210" />
        </div>
        <div className="form-group">
          <label>Profession / Background</label>
          <select defaultValue="">
            <option value="" disabled>— Select —</option>
            <option>Doctor / Physician</option>
            <option>Nurse / Paramedic</option>
            <option>Counsellor / Therapist</option>
            <option>Social Worker</option>
            <option>Driver / Logistics</option>
            <option>General Volunteer</option>
          </select>
        </div>
        <div className="form-group">
          <label>Availability</label>
          <select>
            <option>Weekends only</option>
            <option>Weekdays (part-time)</option>
            <option>Full-time available</option>
            <option>On-call / as needed</option>
          </select>
        </div>
        <div className="form-group">
          <label>District / Location</label>
          <input type="text" placeholder="e.g. Erode" />
        </div>
        <div className="form-group full">
          <label>Skills / Why You Want to Volunteer</label>
          <textarea placeholder="Tell us about your skills, experience, or motivation…"></textarea>
        </div>
      </div>
      <button className="form-submit" onClick={handleSubmit}>Register as Volunteer →</button>
      <div className={`success-banner${showSuccess ? ' show' : ''}`}>
        ✅ Welcome aboard! Your registration is saved. We'll send your onboarding details to your email soon.
      </div>
    </div>
  )
}

function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 6000)
  }

  return (
    <div className="form-card fade-in visible">
      <div className="form-grid">
        <div className="form-group">
          <label>Name *</label>
          <input type="text" placeholder="Your full name" />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" placeholder="e.g. Partnership enquiry" />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select>
            <option>General Enquiry</option>
            <option>Partnership / Sponsorship</option>
            <option>Media / Press</option>
            <option>Feedback</option>
          </select>
        </div>
        <div className="form-group full">
          <label>Message *</label>
          <textarea placeholder="Write your message here…" style={{minHeight:'120px'}}></textarea>
        </div>
      </div>
      <button className="form-submit" onClick={handleSubmit}>Send Message →</button>
      <div className={`success-banner${showSuccess ? ' show' : ''}`}>
        ✅ Message sent! We'll get back to you within 48 hours.
      </div>
    </div>
  )
}

const TABS = [
  { id: 'patient', label: '🧑‍⚕️ Patient Support', Component: PatientForm },
  { id: 'volunteer', label: '🤝 Volunteer Registration', Component: VolunteerForm },
  { id: 'contact', label: '✉️ Contact Us', Component: ContactForm },
]

export default function RegistrationSection() {
  const [activeTab, setActiveTab] = useState('patient')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const ActiveComponent = TABS.find(t => t.id === activeTab)?.Component

  return (
    <section id="register" ref={sectionRef}>
      <div className="section-inner">
        <div className="fade-in">
          <div className="section-label">Get Involved</div>
          <div className="section-title">Join Our Network</div>
          <p className="section-sub">Whether you need support or want to give it — fill out the form below and our team will reach out within 24 hours.</p>
        </div>

        <div className="tab-row" style={{marginTop:'2rem'}}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {ActiveComponent && <ActiveComponent key={activeTab} />}
      </div>
    </section>
  )
}