import React from 'react'
import Cards from './component/Cards';
import PageHeading from './component/PageHeading';

import './Home.css'
const Home = () => {
    return (
        <div className="App">
         <PageHeading/>
         <hr className="my_hrtag"/>  
         <Cards/>
         <hr className="my_hrtag"/>
         
            <p className="myfooter">Copyright Your Website 2014</p>
          
        </div>
    )
}

export default Home
