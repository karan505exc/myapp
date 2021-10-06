import React from 'react'
import img1 from "./img1.png"
const Feature = () => {
    return (
        <div>
            <div className="card">
                      <img src={img1} alt=""  />
                   <div div className="feature-info">
                       <div className="feature-head">
                           <div>Feature Lebel</div>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                       </div>
                       <div className="feat-btn">
                           <button className="btn1"> Buy Now!</button>
                           <button className="btn2"> More info</button>
                       </div>
                   </div>
                

                  </div>
        </div>
    )
}

export default Feature
