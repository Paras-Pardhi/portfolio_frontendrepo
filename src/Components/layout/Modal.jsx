import React from 'react'
import { createPortal } from 'react-dom'
import './header.css'

export default function Modal({ isOpen, setIsOpen, header, footer, children }) {
  return createPortal(
   <div
  onClick={() => setIsOpen(false)}
  className={`modal-overlay ${isOpen ? '' : 'hidden'}`}
>
  <div
    onClick={(e) => e.stopPropagation()}
    className="modal-content"
  >
    {header}
    <div className="modal-body">
      {children}
    </div>
    {footer}
  </div>
</div>
,
    document.getElementById('portal')
  )
}
