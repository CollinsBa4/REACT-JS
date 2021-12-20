import React from 'react'
import './Header.css'

export default function Header() {
    return (
    <nav class=" header-parent navbar navbar-expand-sm fixed-top ">
    <div class="container">
        <div class="collapse navbar-collapse" id="navbar1">
            <h1>COLLINS</h1>
            <ul class="navbar-nav nav nav-fill w-100">
                <li class="nav-item">
                    <a class="nav-link active" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Serv">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact Me</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
        // <div className="header-container">
        //     <div className="header-parent">
        //             <ul className="menu ">
        //                 <h1 className="head">COLLINS ~</h1>
        //                 <li><a href="/">Home</a></li>
        //                 <li><a href="about">About</a></li>
        //                 <li><a href="resume">Resume</a></li>
        //                 <li><a href="testimonial">Testimonial</a></li>
        //                 <li><a href="contact">Contact Me</a></li>

        //             </ul>
                
        //     </div>
            
        // </div>
    )
}
