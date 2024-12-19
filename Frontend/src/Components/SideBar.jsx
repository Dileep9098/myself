import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SideBar() {

    const [show, setShow] = useState(false);
    const [dropDownMenu, setDropdownMenu] = useState(false);

    // Toggle function for the header menu
    const headerToggle = () => {
        setShow(!show);
    };
    const handleDropDownMenu = () => {
        setDropdownMenu(!dropDownMenu);
    };
    return (
        <>
            <header id="header" className={`header dark-background d-flex flex-column ${show ? 'header-show' : ''}`}>
                <i
                    className={`header-toggle d-xl-none bi ${show ? 'bi-x-lg' : 'bi-list'}`}
                    onClick={headerToggle}
                ></i>

                <div className="profile-img">
                    <img src="/assets/img/portfolioImg.jpg" alt="" className="img-fluid rounded-circle" />
                </div>

                <Link to="/" className="logo d-flex align-items-center justify-content-center">
                    <h1 className="sitename">Dileep Sahu</h1>
                </Link>

                <div className="social-links text-center">
                    {/* <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a> */}    

                    <Link to="https://www.linkedin.com/in/dileep-sahu/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                    <Link to="https://github.com/Dileep9098" className="google-plus"><i class="bi bi-github"></i></Link>
                    <Link to="https://www.facebook.com/dileep.rathore.9047" className="facebook"><i className="bi bi-facebook"></i></Link>
                    <Link to="https://www.instagram.com/dileep_rathore____/" className="instagram"><i className="bi bi-instagram"></i></Link>
                   
                </div>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
                        <li><a href="/#about"  onClick={headerToggle}><i className="bi bi-person navicon"></i> About</a></li>
                        <li><a href="/#resume"  onClick={headerToggle}><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
                        <li><a href="/#portfolio" onClick={headerToggle}><i className="bi bi-images navicon"></i> Portfolio</a></li>
                        <li><a href="/#services"  onClick={headerToggle}><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
                       
                       
                        {/* <li className="dropdown"><a href="#" className={`${dropDownMenu ? 'active' : ''}`}><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" onClick={handleDropDownMenu}></i></a>
                            <ul className={`${dropDownMenu ? 'dropdown-active' : ''}`}>
                                <li><a href="#">Dropdown 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul >
                                        <li><a href="#">Deep Dropdown 1</a></li>
                                        <li><a href="#">Deep Dropdown 2</a></li>
                                        <li><a href="#">Deep Dropdown 3</a></li>
                                        <li><a href="#">Deep Dropdown 4</a></li>
                                        <li><a href="#">Deep Dropdown 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Dropdown 2</a></li>
                                <li><a href="#">Dropdown 3</a></li>
                                <li><a href="#">Dropdown 4</a></li>
                            </ul>
                        </li> */}

                        <li><a href="#contact" onClick={headerToggle}><i className="bi bi-envelope navicon"></i> Contact</a></li>
                    </ul>
                </nav>
            </header>

        </>
    )
}



// <li class="dropdown"><a href="#" class="active"><i class="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
//     <ul class="dropdown-active">
//         <li><a href="#">Dropdown 1</a></li>
//         <li class="dropdown"><a href="#" class=""><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
//             <ul class="dropdown-active">
//                 <li><a href="#">Deep Dropdown 1</a></li>
//                 <li><a href="#">Deep Dropdown 2</a></li>
//                 <li><a href="#">Deep Dropdown 3</a></li>
//                 <li><a href="#">Deep Dropdown 4</a></li>
//                 <li><a href="#">Deep Dropdown 5</a></li>
//             </ul>
//         </li>
//         <li><a href="#">Dropdown 2</a></li>
//         <li><a href="#">Dropdown 3</a></li>
//         <li><a href="#">Dropdown 4</a></li>
//     </ul>
// </li>