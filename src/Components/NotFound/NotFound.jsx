import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <section className='page notfound'>
          <div className="content">
            <img src="/images/notfound.png" alt="notfound" />
            <a href={'/'}>RETURN TO HOME PAGE</a>
          </div>
        </section>
    </>
  )
}

export default NotFound