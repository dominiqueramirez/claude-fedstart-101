import LessonNav from '../components/LessonNav'
import Accordion from '../components/Accordion'
import './lessons.css'

export default function Connectors() {
  return (
    <div className="lesson">
      <h1>Connectors (MS 365)</h1>
      <p className="lesson-subtitle">Integrating Claude with SharePoint, Outlook, Teams, and more.</p>

      <h2>What Are Connectors?</h2>
      <p>
        Connectors let Claude access external tools and data sources directly from the chat interface. On FedStart, the currently available connector is <strong>Microsoft 365</strong>, which gives Claude the ability to search and read from your SharePoint, Outlook, and Teams — without you needing to download and re-upload files.
      </p>

      <div className="info-box">
        <div className="info-box-title">Key Concept</div>
        <p>The MS 365 connector is <strong>read-only</strong> — Claude can search and view content from your SharePoint, Outlook, and Teams, but it cannot modify, send, or delete anything. It's like giving Claude a library card, not admin access.</p>
      </div>

      <h2>Available MS 365 Capabilities</h2>
      <table className="comparison-table">
        <thead>
          <tr><th>Capability</th><th>What It Does</th><th>Example Use</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><code>sharepoint_search</code></td>
            <td>Search across SharePoint sites</td>
            <td>"Find the latest travel policy on SharePoint"</td>
          </tr>
          <tr>
            <td><code>sharepoint_folder_search</code></td>
            <td>Search within a specific SharePoint folder</td>
            <td>"Look in the HR Policies folder for onboarding docs"</td>
          </tr>
          <tr>
            <td><code>read_resource</code></td>
            <td>Read a specific document or resource</td>
            <td>"Read and summarize this SharePoint document"</td>
          </tr>
          <tr>
            <td><code>outlook_email_search</code></td>
            <td>Search your Outlook emails</td>
            <td>"Find emails from John about the budget review"</td>
          </tr>
          <tr>
            <td><code>outlook_calendar_search</code></td>
            <td>Search your calendar events</td>
            <td>"What meetings do I have next Tuesday?"</td>
          </tr>
          <tr>
            <td><code>find_meeting_availability</code></td>
            <td>Check availability for meetings</td>
            <td>"When are Sarah and Mike both free this week?"</td>
          </tr>
          <tr>
            <td><code>chat_message_search</code></td>
            <td>Search Teams chat messages</td>
            <td>"Find the Teams message where we discussed the timeline"</td>
          </tr>
        </tbody>
      </table>

      <h2>Using Connectors</h2>
      <ol>
        <li>Make sure the MS 365 connector is enabled in your FedStart account</li>
        <li>You may need to authorize Claude to access your MS 365 data (one-time setup)</li>
        <li>Simply ask Claude questions that reference your SharePoint, email, or calendar</li>
        <li>Claude will search the relevant source and incorporate the results into its response</li>
      </ol>

      <h2>Practical Scenarios</h2>
      <Accordion title="Meeting Prep" defaultOpen={true}>
        <p><strong>Prompt:</strong> "I have a meeting about Project Alpha at 2 PM today. Search my calendar for the meeting details, find any recent emails about Project Alpha, and search SharePoint for the latest project status document. Then give me a briefing."</p>
        <p>Claude will use multiple connectors to pull together a comprehensive pre-meeting brief.</p>
      </Accordion>
      <Accordion title="Document Discovery">
        <p><strong>Prompt:</strong> "Search SharePoint for any documents related to 'employee wellness program' that were updated in the last 30 days. Summarize what you find."</p>
        <p>Claude searches SharePoint and provides a summary of relevant documents with links.</p>
      </Accordion>
      <Accordion title="Email Summarization">
        <p><strong>Prompt:</strong> "Search my Outlook for all emails from the leadership team in the last week. Identify any action items assigned to me."</p>
        <p>Claude searches your email, reads the relevant messages, and extracts action items.</p>
      </Accordion>
      <Accordion title="Scheduling Help">
        <p><strong>Prompt:</strong> "Check when both Dr. Smith and Ms. Johnson are available for a 1-hour meeting next week. Suggest 3 possible time slots."</p>
        <p>Claude uses the calendar availability connector to find open slots.</p>
      </Accordion>

      <div className="info-box warning">
        <div className="info-box-title">⚠️ Permissions</div>
        <p>Claude can only access content that <strong>you</strong> have permission to view. It respects your existing MS 365 permissions — it won't surface documents or emails you don't already have access to.</p>
      </div>

      <div className="info-box tip">
        <div className="info-box-title">💡 Tip</div>
        <p>Be specific when asking Claude to search. Instead of "find the document," try "search SharePoint for 'FY25 budget proposal' in the Finance team site." The more specific your query, the better the results.</p>
      </div>

      <LessonNav />
    </div>
  )
}
