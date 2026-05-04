import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Welcome from './pages/Welcome'
import WhatIsClaude from './pages/WhatIsClaude'
import GettingStarted from './pages/GettingStarted'
import TheInterface from './pages/TheInterface'
import YourFirstConversation from './pages/YourFirstConversation'
import WritingPrompts from './pages/WritingPrompts'
import ConversationsContext from './pages/ConversationsContext'
import FilesAndImages from './pages/FilesAndImages'
import Projects from './pages/Projects'
import Artifacts from './pages/Artifacts'
import Models from './pages/Models'
import ExtendedThinking from './pages/ExtendedThinking'
import Skills from './pages/Skills'
import Connectors from './pages/Connectors'
import TipsAndLimits from './pages/TipsAndLimits'

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-area">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/what-is-claude" element={<WhatIsClaude />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/the-interface" element={<TheInterface />} />
            <Route path="/your-first-conversation" element={<YourFirstConversation />} />
            <Route path="/writing-prompts" element={<WritingPrompts />} />
            <Route path="/conversations-context" element={<ConversationsContext />} />
            <Route path="/files-and-images" element={<FilesAndImages />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/artifacts" element={<Artifacts />} />
            <Route path="/models" element={<Models />} />
            <Route path="/extended-thinking" element={<ExtendedThinking />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/connectors" element={<Connectors />} />
            <Route path="/tips-and-limits" element={<TipsAndLimits />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
