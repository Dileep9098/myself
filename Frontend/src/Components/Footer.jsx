import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer position-relative light-background">
                <div className="container">
                    <div className="social-links1 text-center">
                        {/* <Link href="#" className="twitter"><i className="bi bi-twitter-x"></i></Link> */}


                        <Link to="https://www.linkedin.com/in/dileep-sahu/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                        <Link to="https://github.com/Dileep9098" className="google-plus"><i class="bi bi-github"></i></Link>
                        <Link to="https://www.facebook.com/dileep.rathore.9047" className="facebook"><i className="bi bi-facebook"></i></Link>
                        <Link to="https://www.instagram.com/dileep_rathore____/" className="instagram"><i className="bi bi-instagram"></i></Link>
                        {/* <Link  to="#" className="telegram"><i class="bi bi-telegram"></i></Link> */}
                    </div>
                    {/* <div className="copyright text-center">
                        <ul>
                            <li></li>
                        </ul>
                        <Link to="/">Home</Link>
                        <Link to="/#about">About</Link>
                        <Link to="/#skills">Skills</Link>
                        <Link to="/#resume">Resume</Link>
                        <Link to="/#contact">Contact</Link>


                    </div> */}

                    <div className="footerLinks">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/#about">About</Link></li>
                            <li><Link to="/#skills">Skills</Link></li>
                            <li><Link to="/#resume">Resume</Link></li>
                            <li><Link to="/#contact">Contact</Link></li>
                            {/* <li><Link to="/#contact">Contact</Link></li> */}
                        </ul>
                    </div>

                </div>
            </footer>

          

        </>
    )
}
