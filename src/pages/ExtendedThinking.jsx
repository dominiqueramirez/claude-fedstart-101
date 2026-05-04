import LessonNav from '../components/LessonNav'
import Accordion from '../components/Accordion'
import './lessons.css'

export default function ExtendedThinking() {
  return (
    <div className="lesson">
      <h1>Extended Thinking</h1>
      <p className="lesson-subtitle">Letting Claude reason through complex problems before responding.</p>

      <h2>What Is Extended Thinking?</h2>
      <p>
        Extended Thinking is a feature that allows Claude to "think" more deeply before giving you an answer. When enabled, Claude takes extra time to reason through complex problems step by step — similar to how you might sketch out notes before writing a final answer.
      </p>

      <div className="info-box">
        <div className="info-box-title">Key Concept</div>
        <p>With Extended Thinking, you can actually <strong>see Claude's reasoning process</strong>. A "thinking" section appears before the final answer, showing you how Claude worked through the problem. This makes it easier to verify Claude's logic.</p>
      </div>

      <h2>When to Use Extended Thinking</h2>
      <ul className="feature-list">
        <li><span className="check">✓</span> Complex data analysis with multiple variables</li>
        <li><span className="check">✓</span> Policy interpretation where nuance matters</li>
        <li><span className="check">✓</span> Multi-step math or calculations</li>
        <li><span className="check">✓</span> Comparing and contrasting multiple options</li>
        <li><span className="check">✓</span> Writing that requires careful planning (like a briefing)</li>
        <li><span className="check">✓</span> Debugging complex code or logic</li>
      </ul>

      <h2>How to Enable It</h2>
      <p>Click the <strong>model selector button</strong> at the bottom-right of the input bar. In the dropdown, you'll see the <strong>Extended Thinking</strong> toggle below the model list. Flip it on, and when enabled:</p>
      <ol>
        <li>You'll see a "Thinking…" indicator while Claude reasons</li>
        <li>The thinking process appears in a collapsible section</li>
        <li>The final answer follows the thinking section</li>
      </ol>

      <h2>Extended Thinking in Practice</h2>
      <Accordion title="Example: Budget Analysis">
        <p><strong>Prompt:</strong> "Here's our division's budget for Q1-Q3. Analyze spending trends, identify areas where we're over/under budget, and recommend adjustments for Q4."</p>
        <p><strong>Without Extended Thinking:</strong> Claude gives a decent summary but might miss subtle patterns.</p>
        <p><strong>With Extended Thinking:</strong> Claude methodically compares each line item across quarters, calculates percentages, identifies seasonal patterns, and provides a more thorough, accurate analysis.</p>
      </Accordion>
      <Accordion title="Example: Policy Comparison">
        <p><strong>Prompt:</strong> "Compare the old and new versions of this VA directive. What changed? What are the implications for our team?"</p>
        <p><strong>With Extended Thinking:</strong> Claude systematically goes through each section, notes specific changes, and reasons about downstream effects — producing a more reliable comparison.</p>
      </Accordion>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>You don't need Extended Thinking for simple tasks like drafting an email or answering a factual question. Save it for tasks where you'd want a human to "really think about it" before answering. It takes longer but produces higher-quality output for complex work.</p>
      </div>

      <div className="info-box warning">
        <div className="info-box-title">⚠️ Note</div>
        <p>Extended Thinking uses more resources and takes longer to generate a response. Use it when the quality benefit justifies the extra wait time.</p>
      </div>

      <LessonNav />
    </div>
  )
}
