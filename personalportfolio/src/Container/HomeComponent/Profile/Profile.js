import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"
import Header from '../Header/Header'
 
export default function Profile() {
    return (
        <div className="profile-container">
       

            <div className= "profile-parent ">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">

                        <a href="https://web.facebook.com/adom.collins/" >
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/collins-adom-baffour-10879a127/" >
                            <i className="fa fa-linkedin-square"></i>
                        </a>  
                        <a href="https://www.instagram.com/adom_collins224/" >
                            <i className="fa fa-instagram"></i>
                        </a>  
                        <a href="https://twitter.com/charis_collins" >
                            <i className="fa fa-twitter-square"></i>
                        </a>
                        </div>
                    </div>
                     <div className="profile-details-name">
                         <span className="primary-text">
                             {" "}
                             Hello, I'm <span className="highlighted-text">Collins</span>
                         </span>
                     </div>

                     <div className="profile-details-role">
                         <span className="primary-text">
                             
                              <h1>
                              {" "}
                              <Typical
                                loop={Infinity}
                                steps={[
                                    "CharisCode",
                                    1000, 
                                    "FullStack Developer",
                                    1000, 
                                    "PERN Stack Dev",
                                    1000, 
                                    "React/React Native Developer",
                                    1000, 
                                    "Data Engineer",
                                    1000, 
                                    "Android Developer",
                                    1000,
                                ]}
                                />
                              </h1>
                              <span className="profile-role-tagline">
                                  Tech Savvy proficient in both back and front end development
                              </span>
                         </span>
                     </div>
                     <div className="profile-options">
                         <button className="btn primary-btn">
                                {""}
                                Hire Me{" "}
                         </button>
                         <a href='Collins Baffour.pdf' download="Collins Baffour.pdf">
                             <button className="btn highlighted-btn">Get Resume</button>
                         </a>
                     </div>

                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>

                </div>
            </div>
            
        </div>
        
    )
}
