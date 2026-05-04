import LessonNav from '../components/LessonNav'
import Accordion from '../components/Accordion'
import './lessons.css'

export default function Artifacts() {
  return (
    <div className="lesson">
      <h1>Artifacts</h1>
      <p className="lesson-subtitle">Interactive code, documents, and visual outputs that Claude creates for you.</p>

      <h2>What Are Artifacts?</h2>
      <p>
        When Claude creates something substantial — a document, a piece of code, a chart, or an interactive component — it can display it as an <strong>Artifact</strong>: a separate, interactive panel alongside the chat. Think of it as Claude's "work product" that you can view, edit, copy, or download independently from the conversation.
      </p>

      <h2>Types of Artifacts</h2>
      <table className="comparison-table">
        <thead>
          <tr><th>Artifact Type</th><th>Examples</th><th>What You Can Do</th></tr>
        </thead>
        <tbody>
          <tr><td>Documents</td><td>Reports, emails, memos</td><td>Copy, edit, download as text</td></tr>
          <tr><td>Code</td><td>Python scripts, HTML pages</td><td>Copy, run (if applicable), download</td></tr>
          <tr><td>Web Pages</td><td>Interactive HTML/CSS/JS</td><td>Preview live in the browser panel</td></tr>
          <tr><td>Charts</td><td>SVG visualizations, diagrams</td><td>View, download as image</td></tr>
          <tr><td>Spreadsheets</td><td>CSV data, formatted tables</td><td>Copy, download</td></tr>
        </tbody>
      </table>

      <h2>Working with Artifacts</h2>
      <Accordion title="How artifacts appear">
        <p>When Claude generates an artifact, it appears in a panel to the right of the chat. You'll see the artifact content rendered — if it's HTML, you'll see the actual web page; if it's a document, you'll see formatted text.</p>
      </Accordion>
      <Accordion title="Editing and iterating">
        <p>You can ask Claude to modify an artifact: "Change the title to X" or "Add a third column to the table." Claude will update the artifact in place, so you can iterate until it's right.</p>
      </Accordion>
      <Accordion title="Downloading artifacts">
        <p>Click the <strong>download button</strong> or <strong>copy button</strong> on the artifact panel to save the output. This is especially useful for code files, formatted documents, or data exports.</p>
      </Accordion>

      <h2>When to Ask for Artifacts</h2>
      <p>You don't have to do anything special — Claude will automatically create artifacts when the output is substantial or interactive. But you can explicitly request them:</p>
      <ul>
        <li>"Create an HTML page that shows a dashboard of these metrics"</li>
        <li>"Write this as a downloadable Python script"</li>
        <li>"Make an interactive chart of this data"</li>
      </ul>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>Artifacts are great for creating quick prototypes, data visualizations, and formatted documents. If you need a quick chart for a presentation, Claude can create an interactive SVG that you can screenshot or export.</p>
      </div>

      <LessonNav />
    </div>
  )
}
