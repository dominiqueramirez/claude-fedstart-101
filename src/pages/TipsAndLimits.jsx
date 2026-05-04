import LessonNav from '../components/LessonNav'
import Accordion from '../components/Accordion'
import './lessons.css'

export default function TipsAndLimits() {
  return (
    <div className="lesson">
      <h1>Tips & Limitations</h1>
      <p className="lesson-subtitle">Best practices and understanding what Claude can't do.</p>

      <h2>Top 10 Tips for Using Claude Effectively</h2>
      <ol>
        <li><strong>Be specific.</strong> The more context you give, the better the output.</li>
        <li><strong>Iterate.</strong> Don't expect perfection on the first try — refine.</li>
        <li><strong>Verify.</strong> Always fact-check important information Claude provides.</li>
        <li><strong>Use Projects</strong> for recurring tasks with consistent context.</li>
        <li><strong>Upload files</strong> instead of copy-pasting large documents.</li>
        <li><strong>Try different models.</strong> Sonnet for daily work, Opus for complex analysis.</li>
        <li><strong>Use Extended Thinking</strong> for complex reasoning tasks.</li>
        <li><strong>Leverage Connectors</strong> to pull in SharePoint/email data directly.</li>
        <li><strong>Save good prompts.</strong> Build a personal library of effective prompts.</li>
        <li><strong>Start new chats</strong> when switching topics to avoid context confusion.</li>
      </ol>

      <h2>What Claude Can't Do</h2>
      <Accordion title="Access the internet in real-time">
        <p>Claude doesn't browse the web (except through Connectors for MS 365). It can't check live websites, look up current news, or access URLs you paste. Its knowledge has a training cutoff date.</p>
      </Accordion>
      <Accordion title="Remember across conversations">
        <p>Each conversation starts fresh. Claude doesn't remember your preferences, past conversations, or personal details from previous chats. Use Projects to provide persistent context.</p>
      </Accordion>
      <Accordion title="Execute code on your computer">
        <p>Claude can write code and create code artifacts, but it can't run programs on your machine or access your file system. On the web app, code artifacts run in a sandboxed browser environment only.</p>
      </Accordion>
      <Accordion title="Make decisions for you">
        <p>Claude is an assistant, not a decision-maker. It can analyze options and provide recommendations, but final decisions — especially those affecting Veterans — should always be made by qualified humans.</p>
      </Accordion>
      <Accordion title="Guarantee accuracy">
        <p>Claude can produce "hallucinations" — confident-sounding but incorrect information. This is especially risky for specific facts, statistics, legal citations, and medical information. Always verify.</p>
      </Accordion>

      <h2>VA-Specific Guidelines</h2>
      <div className="info-box warning">
        <div className="info-box-title">⚠️ Data Sensitivity Reminders</div>
        <ul style={{ margin: '8px 0 0 16px', color: 'var(--text-secondary)' }}>
          <li>Follow your organization's AI usage policy at all times</li>
          <li>Do not share PII, PHI, or classified information unless explicitly authorized</li>
          <li>Do not use Claude as the sole source for medical, legal, or benefits decisions</li>
          <li>When in doubt about what's appropriate to share, ask your supervisor</li>
          <li>Remember: Claude's outputs should be reviewed before being used in official communications</li>
        </ul>
      </div>

      <h2>Common Mistakes to Avoid</h2>
      <div className="card-grid">
        <div className="card">
          <h3>❌ Vague Prompts</h3>
          <p>"Help me with my report" → Too vague. Specify what kind of help, which report, and what format.</p>
        </div>
        <div className="card">
          <h3>❌ Blind Trust</h3>
          <p>Don't copy-paste Claude's output into official documents without reviewing. You're responsible for accuracy.</p>
        </div>
        <div className="card">
          <h3>❌ Overlong Chats</h3>
          <p>After 20+ messages on varied topics, start fresh. Long meandering chats degrade quality.</p>
        </div>
        <div className="card">
          <h3>❌ Not Using Files</h3>
          <p>Upload the actual document instead of describing it. Claude works much better with the source material.</p>
        </div>
      </div>

      <h2>Getting Help</h2>
      <p>If you run into issues with Claude on FedStart:</p>
      <ul>
        <li>Check with your team's AI coordinator or champion</li>
        <li>Contact your IT help desk for access issues</li>
        <li>Refer to Anthropic's official documentation for feature questions</li>
      </ul>

      <div className="info-box tip">
        <div className="info-box-title">🎉 Congratulations!</div>
        <p>You've completed Claude FedStart 101! You now have a solid foundation for using Claude productively in your VA work. The best way to learn is by doing — start using Claude for real tasks and experiment with the techniques covered in this course.</p>
      </div>

      <LessonNav />
    </div>
  )
}
