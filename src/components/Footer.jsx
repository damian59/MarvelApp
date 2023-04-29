import React from 'react'
import { FaGithub, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import '../styles/footer.css'
const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    Marvel
                </div>

                <div className="item2">
                <p>

                Copyright © {year} - All right reserved.
                </p>
                </div>
                <a
                    href='https://github.com/damian59/MarvelApp.git'
                    
                    className="item3"
                >
                    <FaGithub  />
                </a>
                <a
                    href="https://www.linkedin.com/in/damian-almanza"
                    
                    className="item4"
                >
                    <FaLinkedinIn  />
                </a>
                <a
                    href="https://www.youtube.com/watch?v=nxs13L5IOH0"
                    
                    className="item5"
                >
                   <FaYoutube/>
                </a>
            </div>
        </footer>
  )
}

export default Footer