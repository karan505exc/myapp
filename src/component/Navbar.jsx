import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
          <nav>
              <div>Layout 1</div>
              <ul>
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/layout2">Layout 2</Link></li>
                  <li><Link to="/layout3">Layout 3</Link></li>
                 
               
              </ul>
          
          </nav>
          
        
        </>
    )
}

export default Navbar
