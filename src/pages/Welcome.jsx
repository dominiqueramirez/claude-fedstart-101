import { useNavigate } from 'react-router-dom'
import LessonNav from '../components/LessonNav'
import './lessons.css'

export default function Welcome() {
  const navigate = useNavigate()
  return (
    <div className="lesson">
      <div className="welcome-hero">
        <div className="hero-badge">Claude FedStart 101</div>
        <h1>Welcome to Claude Training</h1>
        <p className="lesson-subtitle">
          A hands-on guide to using Claude AI on the VA's FedStart platform.
          From your first conversation to advanced features — everything you need to get productive.
        </p>
        <button className="hero-cta" onClick={() => { navigate('/what-is-claude'); window.scrollTo(0, 0); }}>
          Start Learning →
        </button>
      </div>

      <h2>What You'll Learn</h2>
      <div className="card-grid">
        <div className="card">
          <div className="card-icon">💬</div>
          <h3>The Basics</h3>
          <p>What Claude is, how to access it, and navigating the interface.</p>
        </div>
        <div className="card">
          <div className="card-icon">✍️</div>
          <h3>Prompting Skills</h3>
          <p>Write effective prompts that get the results you actually need.</p>
        </div>
        <div className="card">
          <div className="card-icon">📁</div>
          <h3>Files & Projects</h3>
          <p>Upload documents, organize work, and collaborate with Claude.</p>
        </div>
        <div className="card">
          <div className="card-icon">🧠</div>
          <h3>Advanced Features</h3>
          <p>Extended thinking, Skills, Connectors, and Artifacts.</p>
        </div>
      </div>

      <h2>About This Course</h2>
      <p>This course is designed for VA employees using the <strong>FedStart</strong> enterprise deployment of Claude. You'll access Claude at <code>claude.fedstart.com</code> — no software installation required.</p>
      <p>Each lesson builds on the previous one, but feel free to jump to any topic using the sidebar navigation. Use the arrow buttons at the bottom of each page to move between lessons.</p>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>This is an interactive course. You'll find expandable sections, a prompt playground, and clickable examples throughout the lessons.</p>
      </div>

      <LessonNav />
    </div>
  )
}
