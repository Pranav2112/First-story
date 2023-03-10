import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">
                Stock Story
            </div>
            <span>Toggel</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experiences</li>
                    <li>Portifolio</li>
                    <li>Testimoniols</li>
                </ul>
            </div>
            <button className="button">Contact</button>
        </div>

    </div>
  )
}

export default Navbar