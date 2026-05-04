import { useState } from 'react'
import './Accordion.css'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`accordion ${open ? 'open' : ''}`}>
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="accordion-chevron">{open ? '▾' : '▸'}</span>
      </button>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  )
}
