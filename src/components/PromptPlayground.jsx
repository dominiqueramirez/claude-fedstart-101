import { useState } from 'react'
import './PromptPlayground.css'

const sampleResponses = {
  "Summarize this meeting notes document": "Here's a summary of the key points from your meeting notes:\n\n• **Action Items:** 3 tasks assigned to team members with deadlines\n• **Decisions Made:** Budget approved for Q3, new vendor selected\n• **Follow-ups:** Schedule review meeting for next Tuesday\n\nWould you like me to format these as a follow-up email?",
  "Write a professional email to reschedule a meeting": "Subject: Request to Reschedule Our Meeting\n\nDear [Name],\n\nI hope this message finds you well. I'm writing to request that we reschedule our meeting originally planned for [date/time]. Due to a scheduling conflict, I'm unable to attend at the planned time.\n\nWould any of the following alternatives work for you?\n• [Option 1]\n• [Option 2]\n\nI apologize for any inconvenience and look forward to connecting soon.\n\nBest regards,\n[Your Name]",
  "Explain what a VA Form 10-10EZ is in simple terms": "The **VA Form 10-10EZ** is the application form Veterans use to enroll in VA health care. Think of it as the \"sign-up sheet\" for VA medical benefits.\n\n**What it covers:**\n• Your military service history\n• Your financial information (to determine copay costs)\n• Your insurance details\n\n**Key things to know:**\n• You can fill it out online at VA.gov, by mail, or in person\n• Processing usually takes about a week\n• Not all Veterans need to provide financial info (some qualify based on service-connected disabilities)",
}

const presetPrompts = Object.keys(sampleResponses)

export default function PromptPlayground() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [typing, setTyping] = useState(false)

  const handleSend = () => {
    const prompt = input.trim()
    if (!prompt || typing) return

    const userMsg = { role: 'user', text: prompt }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    // Find matching response or give generic one
    const matchKey = presetPrompts.find(k => prompt.toLowerCase().includes(k.toLowerCase().slice(0, 20)))
    const response = matchKey
      ? sampleResponses[matchKey]
      : "That's a great prompt! In the real Claude interface, you'd see a thoughtful, detailed response here. Try one of the suggested prompts above to see a sample response."

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', text: response }])
      setTyping(false)
    }, 1200)
  }

  return (
    <div className="playground">
      <div className="playground-header">
        <div className="playground-dot" />
        <span>Claude Prompt Playground</span>
        <span className="playground-tag">Interactive Demo</span>
      </div>
      <div className="playground-presets">
        <span className="preset-label">Try a prompt:</span>
        {presetPrompts.map(p => (
          <button key={p} className="preset-btn" onClick={() => setInput(p)}>
            {p.length > 40 ? p.slice(0, 40) + '…' : p}
          </button>
        ))}
      </div>
      <div className="playground-messages">
        {messages.length === 0 && (
          <div className="playground-empty">
            <div className="playground-empty-icon">C</div>
            <p>Type a prompt or click a suggestion above to see how Claude responds.</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`playground-msg ${msg.role}`}>
            <div className="msg-avatar">{msg.role === 'user' ? '👤' : 'C'}</div>
            <div className="msg-text">{msg.text}</div>
          </div>
        ))}
        {typing && (
          <div className="playground-msg assistant">
            <div className="msg-avatar">C</div>
            <div className="msg-text typing">
              <span className="dot" /><span className="dot" /><span className="dot" />
            </div>
          </div>
        )}
      </div>
      <div className="playground-input-row">
        <input
          className="playground-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Type your message to Claude…"
        />
        <button className="playground-send" onClick={handleSend} disabled={typing || !input.trim()}>
          Send
        </button>
      </div>
    </div>
  )
}
