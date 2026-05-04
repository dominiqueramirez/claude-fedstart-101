import LessonNav from '../components/LessonNav'
import './lessons.css'

export default function TheInterface() {
  return (
    <div className="lesson">
      <h1>The Chat Interface</h1>
      <p className="lesson-subtitle">A tour of the Claude web app and where everything lives.</p>

      <h2>Interface Overview</h2>
      <div className="screenshot-mock">
        <div className="screenshot-bar">
          <span className="screenshot-dot red" />
          <span className="screenshot-dot yellow" />
          <span className="screenshot-dot green" />
          <span className="screenshot-url">claude.fedstart.com</span>
        </div>
        <div className="screenshot-body" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '0', minHeight: '300px' }}>
          <div style={{ borderRight: '1px solid var(--border-color)', padding: '16px', fontSize: '0.8rem' }}>
            <div style={{ fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>← Sidebar</div>
            <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>+ New Chat</div>
            <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>📁 Projects</div>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '8px', marginTop: '8px', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              Recent Chats<br/>
              • Summarize report...<br/>
              • Draft email to...<br/>
              • Analyze Q3 data...
            </div>
          </div>
          <div style={{ padding: '16px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
              <span>Model selector ↓</span>
              <span>⚙️ Settings</span>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              ← Main chat area →<br/><br/>
              Messages appear here
            </div>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              [📎 Attach] [Type your message...] [Send →]
            </div>
          </div>
        </div>
      </div>

      <h2>Key Areas</h2>
      <h3>1. The Sidebar (Left Panel)</h3>
      <ul>
        <li><strong>New Chat</strong> — Start a fresh conversation</li>
        <li><strong>Projects</strong> — Access your organized workspaces</li>
        <li><strong>Recent Conversations</strong> — Jump back to previous chats</li>
        <li><strong>Search</strong> — Find past conversations by content</li>
      </ul>

      <h3>2. The Model Selector (Top)</h3>
      <p>A dropdown near the top of the chat area lets you choose which Claude model to use (more on this in the <strong>Claude Models</strong> lesson). The default is usually Sonnet — a great all-around choice.</p>

      <h3>3. The Message Area (Center)</h3>
      <p>This is where your conversation with Claude appears. Your messages show on the right, Claude's responses on the left. You can scroll up to review earlier messages.</p>

      <h3>4. The Input Bar (Bottom)</h3>
      <ul>
        <li><strong>Text field</strong> — Type your message or paste text</li>
        <li><strong>Attach button (📎)</strong> — Upload files, images, or documents</li>
        <li><strong>Send button</strong> — Submit your message (or press Enter)</li>
      </ul>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>Press <strong>Shift + Enter</strong> to add a new line in your message without sending it. This is useful for multi-paragraph prompts.</p>
      </div>

      <LessonNav />
    </div>
  )
}
