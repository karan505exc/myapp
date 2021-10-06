import React from 'react'
import "./Layout2.css"

import Feature from './Feature'
const Layout2 = () => {
    return (
        <>
        <div className="mai-div-layout2">
          <div className="smpl-box">
             <div>
                 <p>Sample Heading</p>
                 <span>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
                 <br />
                 <button className="mybtn">call to action!</button>
             </div>
          </div>
         
          <div className="latest-features">

              <hr />
              <div className="latest-feature-heading">Latest Feature</div>
              <div className="cards">
                  <Feature/> 
                  <Feature/> 
                  <Feature/> 
                  <Feature/> 

              </div>
              <hr className="second-hr"/>
              <div className="footer">
                Copyright © Your Website 2014
              </div>
          </div>
        </div>
        </>
    )
}

export default Layout2
