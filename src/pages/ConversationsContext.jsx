import LessonNav from '../components/LessonNav'
import Accordion from '../components/Accordion'
import './lessons.css'

export default function ConversationsContext() {
  return (
    <div className="lesson">
      <h1>Conversations & Context</h1>
      <p className="lesson-subtitle">How Claude remembers what you've said — and when it forgets.</p>

      <h2>How Context Works</h2>
      <p>
        Within a single conversation, Claude remembers everything you've said and everything it has responded. This is called the <strong>context window</strong> — think of it as Claude's short-term memory for that chat.
      </p>

      <div className="info-box">
        <div className="info-box-title">Key Concept</div>
        <p>Claude's context window is measured in <strong>tokens</strong> (roughly 4 characters = 1 token). Claude can handle very long conversations — up to ~200,000 tokens — which is equivalent to a 500+ page book.</p>
      </div>

      <h2>Context Rules</h2>
      <ul>
        <li><strong>Within a chat:</strong> Claude remembers everything from that conversation</li>
        <li><strong>Across chats:</strong> Claude does NOT remember previous conversations. Each new chat starts fresh</li>
        <li><strong>No long-term memory:</strong> Claude doesn't learn about you over time (on FedStart, this is a privacy feature)</li>
      </ul>

      <h2>Managing Your Conversations</h2>
      <Accordion title="When to continue a conversation">
        <p>Stay in the same chat when:</p>
        <ul>
          <li>You're iterating on a document or output</li>
          <li>You want Claude to remember earlier context</li>
          <li>You're doing multi-step analysis on the same topic</li>
        </ul>
      </Accordion>
      <Accordion title="When to start a new conversation">
        <p>Start a new chat when:</p>
        <ul>
          <li>You're switching to a completely different topic</li>
          <li>The current chat has gotten very long and Claude seems to be losing focus</li>
          <li>You want a "fresh perspective" without prior context influencing the response</li>
        </ul>
      </Accordion>
      <Accordion title="Finding old conversations">
        <p>Your conversation history is saved in the sidebar. You can:</p>
        <ul>
          <li>Scroll through recent chats</li>
          <li>Use the search feature to find conversations by content</li>
          <li>Rename conversations for easier reference (click the title)</li>
        </ul>
      </Accordion>

      <h2>The "Context Window" in Practice</h2>
      <p>For most tasks, you'll never hit the context limit. But if you're working with very long documents or extensive conversations, keep in mind:</p>
      <ul>
        <li>Claude may start to "forget" or deprioritize information from much earlier in the conversation</li>
        <li>If you notice this, summarize the key points and paste them into a new chat</li>
        <li>Projects (covered in a later lesson) can help by providing persistent context</li>
      </ul>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>If you want Claude to focus on specific earlier information, copy and paste the relevant text into your new message rather than saying "remember what I said earlier about X."</p>
      </div>

      <LessonNav />
    </div>
  )
}
