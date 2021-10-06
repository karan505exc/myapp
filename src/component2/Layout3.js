import React from "react";
import "./Layout3.css";
import img3 from "./img3.png"
const Layout3 = () => {
  return (
    <div className="main-div-3">
      <div className="main-div-layout3">
        <div className="left-div">
          <div className="blog-post-title">
            <p className="post-title">Blog Post title</p>
            <p className="by-test">by <span>Test</span> </p>
          </div>
          <hr />
          <div className="post-time"> <i class="far fa-clock"></i><p>Posted on August 14,2013 At 09:PM</p></div>
          <hr />
          <div className="img-card">
            <img src={img3} alt="" />
          <hr />

          <div className="img-card-text">
            <strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis tempore minus, pariatur corrupti amet, quas ipsam quam
              obcaecati est vel similique eos perspiciatis nemo, soluta maxime
              unde fuga illum neque!
            </strong>
            <div className="all-p">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              ducimus possimus facere. Totam optio voluptas, velit vero nemo
              fugiat provident. Repudiandae perspiciatis ex a odio debitis
           
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              ducimus possimus facere. Totam optio voluptas, velit vero nemo
              fugiat provident. Repudiandae perspiciatis ex a odio debitis
           
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              ducimus possimus facere. Totam optio voluptas, velit vero nemo
              fugiat provident. Repudiandae perspiciatis ex a odio debitis
           
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              ducimus possimus facere. Totam optio voluptas, velit vero nemo
              fugiat provident. Repudiandae perspiciatis ex a odio debitis
           
            </p>
            </div>
             </div>
          </div>
        </div>
        <div className="right-div">
          <div className="blog-search-div">
              <div className="blog-search"> 
                  <p>Blog search</p>
              <input type="text"/> <button><i class="fa fa-search" aria-hidden="true"></i> </button>
              </div>
          </div>
          <div className="blog-categories">
            <h5>Blog categories</h5>
            <div className="sub-categories">
              <div className="sub-left">
                <ul>Category Name</ul>
                <ul>Category Name</ul>
                <ul>Category Name</ul>
                <ul>Category Name</ul>
              </div>
              <div className="sub-right">
                <ul>Category Name</ul>
                <ul>Category Name</ul>
                <ul>Category Name</ul>
                <ul>Category Name</ul>
              </div>
            </div>
          </div>
          <div className="side-widget">
            <h5>Side Widget Well</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              vel, eligendi officiis corrupti explicabo magni aut. Adipisci et
              facilis quis!
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer">
                Copyright © Your Website 2014
              </div>
    </div>
  );
};

export default Layout3;
