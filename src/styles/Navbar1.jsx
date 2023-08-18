import { useState } from 'react';
import '../styles/navbar.css'
function first(){
    window.location.assign("file:///C:/Users/kiran/OneDrive/Desktop/WEB%20TECH/CSS/background.html")
}
function Navbar1(){
    let[drop ,setdrop]=useState(false)
    let styles={
     bgcolor:"red",
     
    }
    return(
        <body style={styles}>
            
        <nav >
            <div id="logo">
                <i className='bx bx-leaf'></i>
            </div >
            <div>
                <input type="text" />
            </div>

            <div id="hamberger" onClick={()=>{setdrop(!drop)}}>
                {drop==false ? <i className="bx bx-menu"></i>:
                              <i className="bx bx-menu-alt-left"></i>}
            </div >
            

            {drop &&<div id="dropdown">
            <ul>
                <li><a href="">about us</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">about us</a></li>
                <li><a href="">about us</a></li>
            </ul>
            </div>}
        </nav>
        <div id='list'>
            <legend>select department</legend>
        <ul >
                <li><a href="">first</a></li>
                <li><a href="">second</a></li>
                <marquee behavior="reverse" direction="left" bgcolor="red">hi</marquee>
                <li><a href="">third</a></li>
                <li><a href="">fourth</a></li>
                <li><a href="">fifth</a></li>
            </ul>
            <marquee behavior="reverse" direction="left" bgcolor="yellow">hi</marquee>
        </div>
        </body>
        
        
        
    )
}
export default Navbar1;