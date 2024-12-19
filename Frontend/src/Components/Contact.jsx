import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import "./loader.scss"

export default function Contact() {
    //  http://localhost:5000/api/v1


    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMassage] = useState()
    const [phone, setPhone] = useState()

    const [loading, setLoading] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)

    const [ename, setEname] = useState('')

    const navigate = useNavigate()

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     console.log(name, email, subject, message)

    //     const formData = new FormData()

    //     formData.append('name', name)
    //     formData.append('email', email)
    //     formData.append('subject', subject)
    //     formData.append('phone', phone)
    //     formData.append('message', message)


    //     try {
    //         debugger;
    //         setLoading(true)
    //         setEname("Mohan")
    //         console.log(loading,ename)
    //         const response = await axios.post("http://localhost:5000/api/v1", {name,email,subject,message,phone})
    //         console.log(response.data)
    //         setLoading(false)
    //         if(response.data.success===true)
    //         {
    //             alert("Okay well")
    //         }
    //         else{
    //             console.log("Somethis is wrong")
    //         }

    //     } catch (error) {
    //         console.log("Backend Error:",error)

    //     }

    // }

    // Log state values after they change




    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(name, email, subject, message)

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('subject', subject)
        formData.append('phone', phone)
        formData.append('message', message)

        try {
            setLoading(true)

            // const response = await axios.post(`${window.location.origin}/api/v1`, { name, email, subject, message, phone })
            const response = await axios.post("https://myself-api.vercel.app/api/v1", { name, email, subject, message, phone })
            console.log(response.data)
            setLoading(false)

            if (response.data.success === true) {
                setSuccessMsg(!successMsg)

                setTimeout(() => {
                    setSuccessMsg(false)
                }, 3000)



            } else {
                console.log("Something went wrong")
            }

        } catch (error) {
            console.log("Backend Error:", error)
            setLoading(false) // Make sure to reset loading on error
        }
    }

    // console.log(successMsg)

    useEffect(() => {
        console.log('Loading state changed:', loading)
        console.log('Ename state changed:', ename)
        console.log('Ename state Success:', successMsg)

    }, [loading, ename]) // This will run whenever loading or ename changes



    // if(loading){
    //     return <div id="preloader"></div>

    // }

    return (
        <>


            <section id="contact" className="contact section">

                <div className="container section-title" data-aos="fade-up">
                    <h2 id='size1'>Contact</h2>
                    <p>I’m always excited to work on new projects, collaborate with businesses, and help solve complex problems with innovative web solutions. If you're looking for a passionate Full Stack Developer to bring your ideas to life, feel free to get in touch!</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-lg-5">

                            <div className="info-wrap">
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Current Address</h3>
                                        <p>Sector 15,Noida Uttar Pradesh </p>
                                    </div>
                                </div>
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Parmanent Address</h3>
                                        <p>Village Bardha, Dist. Damoh Madhya Pradesh
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+91 9098590873</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p><Link to="mailto:dileeprathore9098@gmail.com">dileeprathore9098@gmail.com</Link></p>
                                    </div>
                                </div>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d77.391026!3d28.576623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1ebcf42e3b9%3A0x9b95b5a5f59bbf0d!2sSector%2015%2C%20Noida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                    frameborder="0"
                                    style={{ border: "0", width: "100%", height: "270px" }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                                {/* <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d77.391026!3d28.576623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1ebcf42e3b9%3A0x9b95b5a5f59bbf0d!2sSector%2015%20Naya%20Bans%2C%20Noida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                    frameborder="0"
                                    style={{ border: "0", width: "100%", height: "270px" }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe> */}


                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form className="php-email-form" data-aos="fade-up" data-aos-delay="200" onSubmit={handleSubmit}>
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <label for="name-field" className="pb-2">Your Name</label>
                                        <input type="text" name="name" id="name-field" placeholder="Enter Full Name.." className="form-control" required onChange={(e) => setName(e.target.value)} />
                                    </div>

                                    <div className="col-md-6">
                                        <label for="phone-field" className="pb-2">Phone Number</label>
                                        <input type="text" className="form-control" name="phone" id="phone-field" required onChange={(e) => setPhone(e.target.value)} placeholder='Enter Number' />
                                    </div>

                                    <div className="col-md-12">
                                        <label for="email-field" className="pb-2">Email Address</label>
                                        <input type="email" className="form-control" name="email" id="email-field" required onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Address' />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="subject-field" className="pb-2" >Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject-field" required onChange={(e) => setSubject(e.target.value)} placeholder='Enter Subject' />
                                    </div>

                                    <div className="col-md-12">
                                        <label for="message-field" className="pb-2">Message</label>
                                        <textarea className="form-control" name="message" rows="6" id="message-field" required onChange={(e) => setMassage(e.target.value)}></textarea>
                                    </div>

                                    <div className="col-md-12 text-center">


                                        {/* <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div> */}
                                        {
                                            loading ?
                                                <input type="submit" value="Send Message" className='sendmessage' disabled />
                                                : <>
                                                    <input type="submit" value="Send Message" className='sendmessage' />
                                                </>
                                        }
                                        <div className="loderCss mt-4">

                                            {loading ?
                                                <>
                                                    <div class="custom-loader"></div><p>Sending...</p>
                                                </>
                                                : ""
                                            }
                                        </div>
                                        {
                                            successMsg ?
                                                <><div className="succussMsg1">
                                                    <div className="succussMsg">
                                                        <p> <i class="bi bi-check-circle me-1"></i>  Your message has been sent. Thank you!</p>
                                                    </div>
                                                </div>
                                                </>
                                                : ""
                                        }

                                    </div>

                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}
