// import React from 'react'

// export default function Skills() {
//     return (
//         <>
//             <section id="skills" className="skills section light-background">


//                 <div className="container section-title" data-aos="fade-up">
//                     <h2>Skills</h2>
//                     <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
//                 </div>

//                 <div className="container" data-aos="fade-up" data-aos-delay="100">

//                     <div className="row skills-content skills-animation">

//                         <div className="col-lg-6">

//                             <div className="progress">
//                                 <span className="skill"><span>React JS</span> <i className="val">80%</i></span>
//                                 <div className="progress-bar-wrap">
//                                     <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
//                                 </div>
//                             </div>

//                             <div className="progress">
//                                 <span className="skill"><span>HTML</span> <i className="val">90%</i></span>
//                                 <div className="progress-bar-wrap">
//                                     <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
//                                 </div>
//                             </div>

//                             <div className="progress">
//                                 <span className="skill"><span>CSS</span> <i className="val">80%</i></span>
//                                 <div className="progress-bar-wrap">
//                                     <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
//                                 </div>
//                             </div>

//                             <div className="progress">
//                                 <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
//                                 <div className="progress-bar-wrap">
//                                     <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
//                                 </div>
//                             </div>

//                         </div>

//                         <div className="col-lg-6">



//                             <div className="progress">
//                                 <span className="skill"><span>Bootstrap</span> <i className="val">80%</i></span>
//                                 <div className="progress-bar-wrap">
//                                     <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
//                                 </div>
//                             </div>

//                             <div className="progress">
//                                 <span className="skill"><span>Node JS</span> <i className="val">60%</i></span>
//                                 <div className="progress-bar-wrap">
//                                     <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
//                                 </div>
//                             </div>
//                             <div className="progress">
//                                 <span className="skill"><span>Express JS</span> <i className="val">60%</i></span>
//                                 <div className="progress-bar-wrap">
//                                     <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
//                                 </div>
//                             </div>
//                             <div className="progress">
//                                 <span className="skill"><span> MongoDB</span> <i className="val">60%</i></span>
//                                 <div className="progress-bar-wrap">
//                                     <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
//                                 </div>
//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </section>

//         </>
//     )
// }



import React from 'react'

export default function Skills() {
    // Define skills and their progress values
    const skills = [
        { name: "React JS", value: 80 },
        { name: "HTML", value: 90 },
        { name: "CSS", value: 80 },
        { name: "JavaScript", value: 75 },
        { name: "Bootstrap", value: 80 },
        { name: "Node JS", value: 60 },
        { name: "Express JS", value: 60 },
        { name: "MongoDB", value: 60 }
    ];

    return (
        <>
            <section id="skills" className="skills section light-background">
                <div className="container section-title" data-aos="fade-up">
                    <h2 id='size1'>Skills</h2>
                    <p>Enhance your web development journey with a strong foundation in front-end and back-end technologies. I specialize in creating seamless, interactive user experiences and efficient server-side solutions.</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row skills-content skills-animation">
                        <div className="col-lg-6">
                            {skills.slice(0, 4).map((skill) => (
                                <div className="progress" key={skill.name}>
                                    <span className="skill">
                                        <span id='size4'>{skill.name}</span> <i className="val">{skill.value}%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={skill.value}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: `${skill.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-6">
                            {skills.slice(4).map((skill) => (
                                <div className="progress" key={skill.name}>
                                    <span className="skill">
                                        <span id='size4'>{skill.name}</span> <i className="val">{skill.value}%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={skill.value}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: `${skill.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
