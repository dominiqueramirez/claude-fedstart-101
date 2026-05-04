import LessonNav from '../components/LessonNav'
import Accordion from '../components/Accordion'
import './lessons.css'

export default function WritingPrompts() {
  return (
    <div className="lesson">
      <h1>Writing Effective Prompts</h1>
      <p className="lesson-subtitle">The art and science of getting exactly what you need from Claude.</p>

      <h2>What Makes a Good Prompt?</h2>
      <p>A prompt is simply what you type to Claude. The quality of Claude's response depends heavily on the quality of your prompt. Think of it like giving instructions to a smart new colleague — the more context and clarity you provide, the better the result.</p>

      <h2>The CRAFT Framework</h2>
      <p>Use this simple framework to write better prompts:</p>

      <div className="card-grid">
        <div className="card"><h3>C — Context</h3><p>Give background info. Who are you? What's the situation?</p></div>
        <div className="card"><h3>R — Role</h3><p>Tell Claude what role to play. "Act as a policy analyst…"</p></div>
        <div className="card"><h3>A — Action</h3><p>Be specific about what you want done.</p></div>
        <div className="card"><h3>F — Format</h3><p>Specify the output format: email, table, bullet points, etc.</p></div>
        <div className="card"><h3>T — Tone</h3><p>Set the tone: professional, casual, empathetic, etc.</p></div>
      </div>

      <h2>Examples: Weak vs. Strong Prompts</h2>

      <h3>Scenario: Drafting an Email</h3>
      <div className="prompt-example">
        <div className="prompt-example-label bad">❌ Weak Prompt</div>
        <div className="prompt-example-text">Write an email about the meeting.</div>
      </div>
      <div className="prompt-example">
        <div className="prompt-example-label good">✅ Strong Prompt</div>
        <div className="prompt-example-text">
          Write a professional email to my team (about 10 people in the Benefits division) summarizing our Q3 planning meeting. Key decisions were: (1) new intake form launches Oct 15, (2) training sessions will be held the week before, (3) each team lead needs to submit resource requests by Sept 30. Keep the tone upbeat but clear, and end with action items in a bulleted list.
        </div>
      </div>

      <h3>Scenario: Summarizing a Document</h3>
      <div className="prompt-example">
        <div className="prompt-example-label bad">❌ Weak Prompt</div>
        <div className="prompt-example-text">Summarize this.</div>
      </div>
      <div className="prompt-example">
        <div className="prompt-example-label good">✅ Strong Prompt</div>
        <div className="prompt-example-text">
          Summarize the attached 30-page policy document in 5 bullet points. Focus on changes from the previous version. Write at an executive level — assume the reader is a senior VA leader who needs the key takeaways in under 2 minutes.
        </div>
      </div>

      <h2>Advanced Prompting Techniques</h2>
      <Accordion title="Chain of Thought — Ask Claude to think step by step">
        <p>For complex analysis or math, tell Claude to work through the problem step by step. This produces more accurate results.</p>
        <p><strong>Example:</strong> "Analyze this budget proposal step by step. First, identify the top 3 line items by cost. Then, compare them to last year's actuals. Finally, flag any items with more than 20% increase."</p>
      </Accordion>
      <Accordion title="Few-Shot Examples — Show Claude what you want">
        <p>Provide 1-3 examples of the input/output format you want. Claude will follow the pattern.</p>
        <p><strong>Example:</strong> "Convert these notes to action items in this format:<br/>
        Note: 'John will update the SOW by Friday' → Action: John | Update SOW | Due: Friday<br/>
        Now do the same for these notes: [paste notes]"</p>
      </Accordion>
      <Accordion title="Persona Setting — Give Claude a role">
        <p>"You are a VA benefits counselor with 15 years of experience. A Veteran asks you..." This helps Claude calibrate its language, depth, and perspective.</p>
      </Accordion>
      <Accordion title="Constraints — Tell Claude what NOT to do">
        <p>Sometimes the best way to get what you want is to specify what you don't want. "Don't use jargon. Don't exceed 200 words. Don't include personal opinions."</p>
      </Accordion>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>You don't need to use all of these techniques at once. Start simple, and if the result isn't right, add more context or constraints. Prompting is iterative.</p>
      </div>

      <LessonNav />
    </div>
  )
}
