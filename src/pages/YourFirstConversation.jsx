import LessonNav from '../components/LessonNav'
import PromptPlayground from '../components/PromptPlayground'
import './lessons.css'

export default function YourFirstConversation() {
  return (
    <div className="lesson">
      <h1>Your First Conversation</h1>
      <p className="lesson-subtitle">Sending your first message and understanding Claude's responses.</p>

      <h2>Starting a Chat</h2>
      <ol>
        <li>Click <strong>"+ New Chat"</strong> in the sidebar (or just start typing if you're on a fresh screen)</li>
        <li>Type your message in the input bar at the bottom</li>
        <li>Press <strong>Enter</strong> or click the <strong>Send</strong> button</li>
        <li>Wait a moment — Claude will generate a response</li>
      </ol>

      <h2>Try It Out</h2>
      <p>Use the interactive playground below to practice sending messages. Click one of the preset prompts or type your own:</p>

      <PromptPlayground />

      <h2>Understanding Responses</h2>
      <p>Claude's responses will often include:</p>
      <ul>
        <li><strong>Formatted text</strong> — Headers, bold, bullet points, and numbered lists</li>
        <li><strong>Code blocks</strong> — Syntax-highlighted code when relevant</li>
        <li><strong>Structured output</strong> — Tables, step-by-step instructions</li>
        <li><strong>Follow-up questions</strong> — Claude may ask for clarification if your request is ambiguous</li>
      </ul>

      <h3>Response Controls</h3>
      <p>After Claude responds, you'll see options to:</p>
      <ul>
        <li><strong>Copy</strong> — Copy the entire response to your clipboard</li>
        <li><strong>Retry</strong> — Ask Claude to regenerate its response</li>
        <li><strong>Continue</strong> — If the response was cut off, ask Claude to keep going</li>
      </ul>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>If Claude's response isn't quite what you wanted, don't start a new chat — just tell Claude what to change. For example: "That's good, but make it shorter" or "Actually, format that as a table instead."</p>
      </div>

      <LessonNav />
    </div>
  )
}
