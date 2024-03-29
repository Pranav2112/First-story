import React from 'react'
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';


const Services = () => {
  return (
        <div className="services">

          {/* left side */}
            <div className="awesome">
                <span>Our Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sint. 
                    <br/>
                     vel natus voluptate inventore, molestiae suscipit sapiente?</span>



                    <a href download>
                     <button className="button s-button">Download Brocure</button></a>
                     <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>

            </div>



            <div className="cards">
             <div style={{left:'14rem'}}>
            <Card 
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma,photoshop,Adobe,Adobe xd"}
            /></div>



            {/* second box */}
            <div style={{top:"12rem", left:"-4rem"}}>
            <Card 
            emoji={Glasses}
            heading={'Developer'}
            detail={"Html, Css, JavaScript "}
            /></div>




            {/* Third box */}
            <div style={{top:"19rem", left:"12rem"}}>
            <Card 
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Html, Css, JavaScript "}
            /></div>

            <div className=" blur s-blur2" style={{background:"var(--purple)"}}></div>

            </div>
        </div>


  )
}

export default Services