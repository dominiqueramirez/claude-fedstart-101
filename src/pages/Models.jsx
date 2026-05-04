import LessonNav from '../components/LessonNav'
import './lessons.css'

export default function Models() {
  return (
    <div className="lesson">
      <h1>Claude Models</h1>
      <p className="lesson-subtitle">Haiku, Sonnet, and Opus — choosing the right model for the job.</p>

      <h2>Claude's Model Family</h2>
      <p>Claude comes in three sizes, each optimized for different use cases. Think of them like tools in a toolbox — you pick the one that fits the job.</p>

      <table className="comparison-table">
        <thead>
          <tr><th>Model</th><th>Speed</th><th>Capability</th><th>Best For</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Haiku</strong></td>
            <td>⚡ Fastest</td>
            <td>Good</td>
            <td>Quick tasks, simple Q&A, classification, short responses</td>
          </tr>
          <tr>
            <td><strong>Sonnet</strong></td>
            <td>🔄 Balanced</td>
            <td>Very Good</td>
            <td>Most daily work — emails, summaries, analysis, coding</td>
          </tr>
          <tr>
            <td><strong>Opus</strong></td>
            <td>🐢 Slower</td>
            <td>Best</td>
            <td>Complex analysis, nuanced writing, multi-step reasoning</td>
          </tr>
        </tbody>
      </table>

      <h2>How to Switch Models</h2>
      <p>Use the <strong>model selector</strong> at the bottom of the chat area, near the input bar. Click the dropdown and choose the model you want. The change applies to the current conversation going forward.</p>

      <div className="info-box">
        <div className="info-box-title">Key Concept</div>
        <p><strong>Sonnet is your default and best starting point.</strong> It handles 90% of tasks well. Only switch to Opus for tasks where you need maximum reasoning power, and to Haiku when speed matters more than depth.</p>
      </div>

      <h2>When to Use Each Model</h2>
      <div className="card-grid">
        <div className="card">
          <div className="card-icon">⚡</div>
          <h3>Use Haiku When...</h3>
          <p>You need a quick answer, are doing simple text formatting, or want to classify/categorize items. "Is this email positive or negative?" → Haiku.</p>
        </div>
        <div className="card">
          <div className="card-icon">🎯</div>
          <h3>Use Sonnet When...</h3>
          <p>You're doing daily work: drafting emails, summarizing documents, writing reports, coding, or brainstorming. This is your workhorse.</p>
        </div>
        <div className="card">
          <div className="card-icon">🧠</div>
          <h3>Use Opus When...</h3>
          <p>You're tackling complex policy analysis, need nuanced writing that captures subtle distinctions, or are doing multi-step reasoning across large documents.</p>
        </div>
      </div>

      <div className="info-box">
        <div className="info-box-title">FedStart Availability</div>
        <p>Currently, the models available on FedStart are <strong>Sonnet 4.6</strong> and <strong>Haiku 4.5</strong>. Opus is not yet available. Sonnet 4.6 is the recommended default for most tasks.</p>
      </div>

      <LessonNav />
    </div>
  )
}
