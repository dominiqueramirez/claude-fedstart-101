import LessonNav from '../components/LessonNav'
import Accordion from '../components/Accordion'
import './lessons.css'

export default function FilesAndImages() {
  return (
    <div className="lesson">
      <h1>Files & Images</h1>
      <p className="lesson-subtitle">Upload documents, images, and data for Claude to analyze.</p>

      <h2>What You Can Upload</h2>
      <table className="comparison-table">
        <thead>
          <tr><th>Type</th><th>Formats</th><th>What Claude Can Do</th></tr>
        </thead>
        <tbody>
          <tr><td>Documents</td><td>PDF, DOCX, TXT, RTF</td><td>Read, summarize, analyze, extract info</td></tr>
          <tr><td>Spreadsheets</td><td>CSV, XLSX</td><td>Analyze data, find patterns, create summaries</td></tr>
          <tr><td>Images</td><td>PNG, JPG, GIF, WebP</td><td>Describe content, read text (OCR), analyze charts</td></tr>
          <tr><td>Code</td><td>Any text-based code file</td><td>Review, debug, explain, refactor</td></tr>
          <tr><td>Presentations</td><td>PPTX (as PDF)</td><td>Summarize slides, extract key points</td></tr>
        </tbody>
      </table>

      <h2>How to Upload</h2>
      <ol>
        <li>Click the <strong>📎 attach button</strong> in the input bar</li>
        <li>Select your file from the file picker</li>
        <li>Add your message describing what you want Claude to do with the file</li>
        <li>Press Send</li>
      </ol>
      <p>You can also <strong>drag and drop</strong> files directly into the chat window.</p>

      <h2>Tips for File Uploads</h2>
      <Accordion title="Always tell Claude what to do with the file">
        <p>Don't just upload a file with no message. Be specific:</p>
        <ul>
          <li>"Summarize this report in 5 bullet points"</li>
          <li>"Find all action items in these meeting notes"</li>
          <li>"What trends do you see in this spreadsheet data?"</li>
        </ul>
      </Accordion>
      <Accordion title="Multiple files in one message">
        <p>You can upload multiple files at once. This is useful for comparing documents, consolidating data, or providing reference material alongside your main document.</p>
      </Accordion>
      <Accordion title="Image analysis tips">
        <p>Claude can read text in images, analyze charts and graphs, describe photographs, and interpret diagrams. For best results with images:</p>
        <ul>
          <li>Use high-resolution images when possible</li>
          <li>If the image has text, ask Claude to "read the text in this image"</li>
          <li>For charts, ask Claude to "describe the data shown in this chart"</li>
        </ul>
      </Accordion>

      <div className="info-box warning">
        <div className="info-box-title">⚠️ Sensitive Data</div>
        <p>Be mindful of what you upload. Do not upload documents containing PII (Personally Identifiable Information), PHI (Protected Health Information), or classified material unless your VA AI usage policy explicitly permits it for FedStart.</p>
      </div>

      <LessonNav />
    </div>
  )
}
