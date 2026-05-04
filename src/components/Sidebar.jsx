import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { lessons } from '../lessonData'
import './Sidebar.css'

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#D97757"/>
              <text x="16" y="22" textAnchor="middle" fontSize="18" fill="white" fontFamily="Inter, sans-serif" fontWeight="600">C</text>
            </svg>
            <div>
              <div className="sidebar-title">Claude 101</div>
              <div className="sidebar-badge">FedStart · VA</div>
            </div>
          </div>
        </div>
        <nav className="sidebar-nav">
          {lessons.map((lesson, i) => (
            <NavLink
              key={lesson.path}
              to={lesson.path}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              <span className="sidebar-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="sidebar-label">{lesson.title}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <img src="https://www.va.gov/img/design/logo/va-logo-white.png" alt="VA Logo" className="va-logo" onError={(e) => { e.target.style.display = 'none' }} />
          <div className="sidebar-footer-text">U.S. Department of<br/>Veterans Affairs</div>
        </div>
      </aside>
      {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  )
}
