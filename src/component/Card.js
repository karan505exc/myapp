import React from 'react'
import './Card.css'
import myimg from '../component/myimg.jpg'
const Card = () => {
    return (
        <div>
             <div className="card__main__div">
                <img src={myimg} alt="" width="350px"/>
                <div>
                    <div className="project__name">Project Name</div>
                    <p className="project__text">Lorem uere eros ultricies. In eu condimentum tellus. Aenean ultrices sapien lacinia odio sagittis tempu</p>
                </div>
            </div>  
        </div>
    )
}

export default Card
