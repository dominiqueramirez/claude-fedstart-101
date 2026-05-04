import LessonNav from '../components/LessonNav'
import Accordion from '../components/Accordion'
import './lessons.css'

export default function WhatIsClaude() {
  return (
    <div className="lesson">
      <h1>What Is Claude?</h1>
      <p className="lesson-subtitle">Understanding AI assistants and what Claude can do for you.</p>

      <h2>Claude at a Glance</h2>
      <p>
        Claude is an AI assistant built by <strong>Anthropic</strong>, a company focused on AI safety. It's designed to be helpful, harmless, and honest. Think of Claude as a highly capable writing and analysis partner that you interact with through a chat interface — similar to texting a very knowledgeable colleague.
      </p>

      <div className="info-box">
        <div className="info-box-title">Key Concept</div>
        <p>Claude is a <strong>large language model (LLM)</strong>. It was trained on a broad range of text data and can understand and generate human language, analyze documents, write code, and reason through complex problems.</p>
      </div>

      <h2>What Can Claude Do?</h2>
      <ul className="feature-list">
        <li><span className="check">✓</span> Draft emails, memos, briefings, and policy documents</li>
        <li><span className="check">✓</span> Summarize long documents, meeting notes, or reports</li>
        <li><span className="check">✓</span> Answer questions about regulations, procedures, or data</li>
        <li><span className="check">✓</span> Analyze uploaded files — PDFs, spreadsheets, images</li>
        <li><span className="check">✓</span> Help with data analysis and create visualizations</li>
        <li><span className="check">✓</span> Brainstorm ideas and outline plans</li>
        <li><span className="check">✓</span> Write and debug code</li>
        <li><span className="check">✓</span> Translate between languages</li>
      </ul>

      <h2>What Claude Is NOT</h2>
      <Accordion title="Claude is not a search engine">
        <p>Claude doesn't browse the internet in real time (unless using Connectors). Its training data has a knowledge cutoff date. For the latest news or real-time data, use a search engine.</p>
      </Accordion>
      <Accordion title="Claude is not infallible">
        <p>Claude can sometimes produce incorrect information with confidence — this is called a <strong>hallucination</strong>. Always verify important facts, especially for official VA communications.</p>
      </Accordion>
      <Accordion title="Claude is not a person">
        <p>Claude doesn't have feelings, opinions, or consciousness. It generates responses based on patterns in its training data. It's a tool — a very powerful one, but still a tool.</p>
      </Accordion>

      <h2>Why FedStart?</h2>
      <p>
        The VA uses Claude through <strong>FedStart</strong>, Anthropic's government-authorized deployment. This means:
      </p>
      <ul>
        <li><strong>FedRAMP authorized</strong> — meets federal security standards</li>
        <li><strong>Your data stays private</strong> — conversations are not used to train Claude</li>
        <li><strong>Separate from consumer Claude</strong> — enterprise controls and compliance</li>
        <li><strong>Accessible at</strong> <code>claude.fedstart.com</code></li>
      </ul>

      <div className="info-box warning">
        <div className="info-box-title">⚠️ Important</div>
        <p>Even with FedStart's security, follow VA guidelines on what data is appropriate to share with AI tools. When in doubt, consult your supervisor or information security team.</p>
      </div>

      <LessonNav />
    </div>
  )
}
