import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        <span className="logo-dot"></span> CareConnect
      </a>
      <ul>
        <li><a href="#register">Register</a></li>
        <li><a href="#assistant">AI Assistant</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#register" className="nav-cta">Get Involved</a></li>
      </ul>
    </nav>
  )
}