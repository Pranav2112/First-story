import React from 'react'
import'./Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import pranav from '../../img/pranavvv.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png'
import FloatinDiv from '../FloatingDiv/FloatingDiv';



const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
            <span>Hy! Welcome to</span>
            <span>Stock Story</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam ducimus similique ad obcaecati aut, hic odio!</span>
            </div>

            <button className="button i-button">Join Us</button>
                <div className="i-icons">

                {/* <a href="">
                <img src={Github} alt="" />
                </a> */}

                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>




        </div>
        <div className="i-right"> 
        
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={pranav} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{top: '-4%',left: '59%'}}>
        <FloatinDiv image={crown} text1='Stock Market' text2='Invester'/>
        </div>

        <div style={{top: '18rem',left: '0rem'}}>
        <FloatinDiv image={thumbup} text1='Best StartUp' text2='Award'/>
        </div>

             {/* Blur Divs       */}
             <div className="blur" style={{background:"rgb (238 210 255)"}}></div>
             <div className="blur" style={{background: '#C1F5FF',
            top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>





    </div>
</div>
  )
}

export default Intro