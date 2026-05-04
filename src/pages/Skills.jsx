import LessonNav from '../components/LessonNav'
import Accordion from '../components/Accordion'
import './lessons.css'

export default function Skills() {
  return (
    <div className="lesson">
      <h1>Skills</h1>
      <p className="lesson-subtitle">Pre-built capabilities and custom workflows that extend Claude's abilities.</p>

      <div className="info-box warning">
        <div className="info-box-title">⚠️ Coming Soon to FedStart</div>
        <p>Skills are <strong>not yet available</strong> on FedStart as of May 2026. This lesson is included because Skills are one of Claude's most powerful features on the consumer/enterprise platform, and we expect them to come to FedStart in the future. Understanding Skills now will help you hit the ground running when they arrive.</p>
      </div>

      <h2>What Are Skills?</h2>
      <p>
        Skills are pre-configured capabilities or workflows that enhance what Claude can do. Think of them as "power-ups" — they give Claude specialized abilities beyond its default chat functionality. Some are built-in, and organizations can have custom skills configured.
      </p>

      <h2>How Skills Work</h2>
      <p>Skills typically work by:</p>
      <ol>
        <li>Providing Claude with specialized instructions for a particular task type</li>
        <li>Connecting Claude to external tools or data sources</li>
        <li>Automating multi-step workflows that would otherwise require manual prompting</li>
      </ol>

      <h2>Common Skill Types</h2>
      <Accordion title="Document Processing Skills">
        <p>Automated workflows for handling specific document types:</p>
        <ul>
          <li>Extract structured data from unstructured documents</li>
          <li>Convert between formats (e.g., meeting notes → action items)</li>
          <li>Standardize formatting across documents</li>
        </ul>
      </Accordion>
      <Accordion title="Analysis Skills">
        <p>Capabilities for deeper data analysis:</p>
        <ul>
          <li>Statistical analysis of uploaded datasets</li>
          <li>Trend identification and forecasting</li>
          <li>Comparative analysis across multiple documents</li>
        </ul>
      </Accordion>
      <Accordion title="Writing & Communication Skills">
        <p>Specialized writing assistance:</p>
        <ul>
          <li>VA-specific communication templates</li>
          <li>Plain language translation of technical/legal content</li>
          <li>Multi-audience document adaptation</li>
        </ul>
      </Accordion>

      <h2>Using Skills</h2>
      <p>To use a skill, you may:</p>
      <ul>
        <li>Select it from a skills menu (if available in your FedStart interface)</li>
        <li>Reference it in your prompt if your organization has named skills configured</li>
        <li>Use a project with custom instructions that activate the skill automatically</li>
      </ul>

      <div className="info-box">
        <div className="info-box-title">Key Concept</div>
        <p>Skill availability depends on your FedStart configuration. Your organization's admin controls which skills are enabled. If you have ideas for custom skills that would help your team, talk to your AI coordinator or IT team.</p>
      </div>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>Even without formal skills, you can create your own "skills" by saving effective prompts and reusing them. A detailed prompt template stored in a Project's custom instructions effectively works as a custom skill.</p>
      </div>

      <LessonNav />
    </div>
  )
}
