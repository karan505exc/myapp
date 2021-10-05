import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
          <nav>
              <div>Layout 1</div>
              <ul>
                  <li><a href="">About</a></li>
                  <li><a href="">Services</a></li>
                  <li><a href="">Contact</a></li>
              </ul>
          
          </nav>
          
          <div className="page-heading">
              <div>Page Heading <span>Secondary Text</span></div>
          </div>
          
        </>
    )
}

export default Navbar
