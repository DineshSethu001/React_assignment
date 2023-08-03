import React from 'react'
import './Footer.css'

const Footer = () => {
  const date=new Date()
  return (
    <div className="footer">
      <h1>Copyright &copy; {date.getFullYear()}</h1>
    </div>
  )
}

export default Footer
