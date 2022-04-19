import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()
  
    return (
    <footer className='footer p-9 bg-gray-750 text-primary-content footer-center'>
        <div>
        <p>Ronnie Rios {footerYear}</p>
        </div>
    </footer>
  )
}

export default Footer