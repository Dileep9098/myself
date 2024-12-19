import React from 'react'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';

export default function BannerHome() {
    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="hero section dark-background">
                <img src="assets/img/portfolioImg.jpg" alt="" className="img-fluid" />
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <h2>Dileep Sahu</h2>
                    <p id='typeWriter1'>
                        I'm
                        {" "}
                        {/* <span className="typed" data-typed-items="Full Stack Developer, Frontend Developer, Backend Developer, Developer">Developer</span> */}
                        {/* <span style={{color:"red"}}>{text}</span>
                            <Cursor/> */}
                        <span id='typeWriter'>
                            <Typewriter
                                words={['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Developer']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </p>
                </div>
            </section>

        </>
    )
}
