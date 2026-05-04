import { useNavigate, useLocation } from 'react-router-dom'
import { lessons } from '../lessonData'
import './LessonNav.css'

export default function LessonNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const currentIndex = lessons.findIndex(l => l.path === location.pathname)
  const prev = currentIndex > 0 ? lessons[currentIndex - 1] : null
  const next = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null

  return (
    <div className="lesson-nav">
      {prev ? (
        <button className="lesson-nav-btn prev" onClick={() => { navigate(prev.path); window.scrollTo(0, 0); }}>
          <span className="nav-arrow">←</span>
          <span className="nav-info">
            <span className="nav-label">Previous</span>
            <span className="nav-title">{prev.title}</span>
          </span>
        </button>
      ) : <div />}
      {next ? (
        <button className="lesson-nav-btn next" onClick={() => { navigate(next.path); window.scrollTo(0, 0); }}>
          <span className="nav-info" style={{ textAlign: 'right' }}>
            <span className="nav-label">Next</span>
            <span className="nav-title">{next.title}</span>
          </span>
          <span className="nav-arrow">→</span>
        </button>
      ) : (
        <button className="lesson-nav-btn next done" disabled>
          <span className="nav-info" style={{ textAlign: 'right' }}>
            <span className="nav-title">🎉 You've completed the course!</span>
          </span>
        </button>
      )}
    </div>
  )
}
