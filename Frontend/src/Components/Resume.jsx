import React from 'react'
import { Link } from 'react-router-dom'

export default function Resume({totalMonths,totalYears}) {
    return (
        <>
            <section id="resume" className="resume section">

                <div className="container section-title" data-aos="fade-up">
                    <h2 id='size1'>Resume</h2>
                    <p>My journey has been defined by a passion for growth, continuous learning, and tackling challenges head-on. I have consistently delivered exceptional results by applying innovative solutions to complex problems. From refining processes to driving success in team-oriented projects, I am dedicated to achieving excellence in everything I do.</p>

                </div>

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title" id='size2'>Sumary</h3>

                            <div className="resume-item pb-0">
                                {/* <h4>Brandon Johnson</h4> */}
                                <p><em>Experienced Full Stack Developer with approximately <strong className='hightWord'>{totalYears} years</strong> and <strong className='hightWord'>{totalMonths} months</strong> of hands-on experience in building robust
                                    web applications. Proven expertise in developing admin webpages and resolving technical support
                                    tickets. Proficient in leveraging React.js and Node.js for seamless front-end and back-end development.
                                    Skilled in implementing API requests to enhance application functionality. Committed to delivering
                                    efficient user experiences.</em></p>
                                {/* <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>(123) 456-7891</li>
                                    <li>alice.barkley@example.com</li>
                                </ul> */}
                            </div>

                            <h3 className="resume-title" id='size2'>Education</h3>
                            <div className="resume-item">
                                <h4>Bachelor of Technology (B.Tech)</h4>
                                <h5>2020 - 2024</h5>
                                <p><strong>Gyan Sagar College of Engineering Sagar (Madhya Pradesh)</strong></p>
                                <p>Computer Science & Engineering with 8.42 CGPA</p>
                            </div>

                            <div className="resume-item">
                                <h4>High &amp; Higher secondary education</h4>
                                <p><strong>Govt Excellence school Hatta, Damoh (Madhya Pradesh)</strong></p>
                                {/* <h4>Govt Excellence school Hatta District Damoh (Madhya Pradesh)</h4> */}
                                <h5>2018 - 2020</h5>
                                <p><em>Completed High & Higher secondary Education with 88.0% & 80.4%</em></p>
                            </div>

                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="resume-title" id='size2'>Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Software Engineer</h4>
                                <h5>Feb 2024 - Present</h5>
                                <p ><a href="https://www.inzealinfotech.in/"><i class="bi bi-buildings"></i>
                                    <strong id='size4'> Inzeal Infotech Private Limited</strong></a></p>
                                <p><em><i class="bi bi-geo-alt-fill"></i>
                                    {" "} Noida ,Utter Pradesh</em></p>
                                <ul>
                                    <li> Proficient in React.js for building dynamic web applications.</li>
                                    <li>User engagement increased by 30% after implementing applications in React.js.</li>
                                    <li>Collaborated with cross-functional teams to meet project requirements and deadlines.</li>
                                    <li>Conducted testing and debugging to ensure application reliability.
                                        Currently working on RKS Wealth, a live project focused on financial services.</li>
                                    <li>The project is based on React.js, Node.js, Express.js, and MongoDB.
                                    </li>


                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>Web Developer Intern</h4>
                                <h5>Oct 2023 - Jan 2024</h5>
                                <p ><a href="https://qualitywebs.in/"><i class="bi bi-buildings"></i>
                                    <strong id='size4'>  Quality Webs LLC</strong></a></p>
                                <p><em><i class="bi bi-geo-alt-fill"></i>
                                    {" "} Indore ,Madhya Pradesh</em></p>
                                <ul>
                                    <li>I completed an internship as a web developer at QualityWebs LLC in Indore, where I gained
                                        hands-on experience in React.js, HTML, CSS, JavaScript, and Bootstrap. My work involved
                                        developing responsive web applications and enhancing user interfaces.</li>
                                </ul>
                            </div>

                        </div>

                        <div className="resumeBtn">
                            {/* <Link className='btn btn-primary' download="/assets/img/DileepResume.pdf" to="/assets/img/DileepResume.pdf">Download Resume</Link> */}
                            <a href="/assets/img/DileepResume.pdf" className='sendmessage'  download>Download Resume</a>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}
