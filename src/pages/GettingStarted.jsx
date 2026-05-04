import LessonNav from '../components/LessonNav'
import './lessons.css'

export default function GettingStarted() {
  return (
    <div className="lesson">
      <h1>Getting Started</h1>
      <p className="lesson-subtitle">How to access Claude via FedStart and log in for the first time.</p>

      <h2>Accessing Claude</h2>
      <p>As a VA employee, you access Claude through the FedStart platform:</p>
      <ol>
        <li>Open your web browser (Chrome or Edge recommended)</li>
        <li>Navigate to <code>https://claude.fedstart.com</code></li>
        <li>Sign in with your VA enterprise credentials</li>
        <li>You'll land on the Claude chat interface — ready to go</li>
      </ol>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>Bookmark <code>claude.fedstart.com</code> for quick access. You can also pin it as a tab in your browser.</p>
      </div>

      <h2>First-Time Setup</h2>
      <p>The first time you log in, you may be asked to:</p>
      <ul>
        <li>Accept the terms of service for the VA's AI usage policy</li>
        <li>Complete a brief orientation or acknowledgment</li>
        <li>Set your display preferences</li>
      </ul>
      <p>After that, you're dropped directly into the chat interface — no installation, no configuration.</p>

      <h2>Browser Requirements</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Browser</th>
            <th>Supported?</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Chrome (latest)</td><td>✅ Recommended</td><td>Best experience</td></tr>
          <tr><td>Edge (latest)</td><td>✅ Recommended</td><td>VA default browser works great</td></tr>
          <tr><td>Firefox (latest)</td><td>✅ Supported</td><td>Full functionality</td></tr>
          <tr><td>Safari</td><td>⚠️ Partial</td><td>May have minor issues</td></tr>
          <tr><td>Internet Explorer</td><td>❌ No</td><td>Not supported</td></tr>
        </tbody>
      </table>

      <div className="info-box warning">
        <div className="info-box-title">⚠️ Network Note</div>
        <p>You must be on the VA network (or connected via VPN) to access FedStart. If you're having trouble connecting, verify your network connection first.</p>
      </div>

      <LessonNav />
    </div>
  )
}
