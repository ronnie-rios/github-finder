import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear()
  
    return (
    <footer className='footer p-9 bg-gray-750 text-primary-content footer-center'>
        <div>
        <p className='text-base-content text-opacity-35'>Ronnie Rios {footerYear}</p>
        <a className='mb-4 text-base-content text-opacity-35 hover:focus-visible' href='https://www.ronnie-rios.com/' target='_blank' rel='noreferrer'>https://www.ronnie-rios.com/</a>
        </div>
    </footer>
  )
}

export default Footer