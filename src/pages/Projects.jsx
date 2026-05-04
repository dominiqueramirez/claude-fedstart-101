import LessonNav from '../components/LessonNav'
import Accordion from '../components/Accordion'
import './lessons.css'

export default function Projects() {
  return (
    <div className="lesson">
      <h1>Projects</h1>
      <p className="lesson-subtitle">Organize your work with persistent context and shared knowledge.</p>

      <h2>What Are Projects?</h2>
      <p>
        Projects let you create a workspace in Claude where you can upload reference documents and set custom instructions that persist across all conversations within that project. Think of it as giving Claude a "briefing folder" that it reads before every conversation.
      </p>

      <h2>Why Use Projects?</h2>
      <div className="card-grid">
        <div className="card">
          <div className="card-icon">📋</div>
          <h3>Persistent Context</h3>
          <p>Upload style guides, templates, or reference docs that Claude always has access to.</p>
        </div>
        <div className="card">
          <div className="card-icon">⚙️</div>
          <h3>Custom Instructions</h3>
          <p>Set rules like "always write in AP style" or "use VA terminology" that apply to every chat.</p>
        </div>
        <div className="card">
          <div className="card-icon">🗂️</div>
          <h3>Organization</h3>
          <p>Keep related conversations grouped. One project for reports, another for emails, etc.</p>
        </div>
      </div>

      <h2>Creating a Project</h2>
      <ol>
        <li>Click <strong>"Projects"</strong> in the sidebar</li>
        <li>Click <strong>"+ Create Project"</strong></li>
        <li>Give it a name and description</li>
        <li>Add <strong>custom instructions</strong> — these are rules Claude follows in every conversation within the project</li>
        <li>Upload <strong>knowledge files</strong> — documents Claude can reference</li>
      </ol>

      <h2>Project Tips</h2>
      <Accordion title="Writing good custom instructions">
        <p>Custom instructions are like a standing brief for Claude. Good instructions include:</p>
        <ul>
          <li><strong>Your role:</strong> "I am a program analyst in the VBA Benefits division"</li>
          <li><strong>Output preferences:</strong> "Always format responses with headers and bullet points"</li>
          <li><strong>Tone:</strong> "Use a professional but approachable tone"</li>
          <li><strong>Constraints:</strong> "Never use acronyms without first spelling them out"</li>
        </ul>
      </Accordion>
      <Accordion title="What to upload as knowledge files">
        <ul>
          <li>Style guides and templates</li>
          <li>Policy documents Claude should reference</li>
          <li>FAQs or knowledge base articles</li>
          <li>Examples of good outputs (so Claude knows what "good" looks like)</li>
        </ul>
        <p>Note: There are limits on the total size of knowledge files. Prioritize the most important documents.</p>
      </Accordion>
      <Accordion title="Example project setups">
        <p><strong>Weekly Report Writer:</strong> Upload your report template and last 3 reports. Instruct Claude to follow the same format and tone.</p>
        <p><strong>Policy Q&A Bot:</strong> Upload your division's policy manual. Ask Claude questions and it will answer based on the uploaded policies.</p>
        <p><strong>Email Drafter:</strong> Set instructions for tone and format. Upload your signature block and any standard disclaimers.</p>
      </Accordion>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>Projects are especially powerful when you find yourself repeating the same instructions or uploading the same files in multiple conversations. Set it up once in a project, and it's always there.</p>
      </div>

      <LessonNav />
    </div>
  )
}
