// import React, { useState } from 'react'

// export default function Portfolio() {

//     const[addActive,setAddActive]=useState(false)

//     const handleActive=()=>{
//         setAddActive(!true)
//     }

//   return (
//     <>

//                 <section id="portfolio" className="portfolio section light-background">

//                     <div className="container section-title" data-aos="fade-up">
//                         <h2 id='size1'>Portfolio</h2>
//                         <p>I have developed many websites combine Live and personal and i have a experience on dynamic website   </p>
//                     </div>

//                     <div className="container">

//                         <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

//                             <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
//                                 <li data-filter="*"  >All</li>
//                                 <li data-filter=".filter-app" className={`${addActive?'filter-active':''}`} onClick={handleActive}>Websites</li>
//                                 <li data-filter=".filter-product" className={`${addActive?'filter-active':''}`} onClick={handleActive}>Live</li>
//                                 <li data-filter=".filter-branding">Personal</li>
//                                 {/* <li data-filter=".filter-books">Books</li> */}
//                             </ul>

//                             <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>App 1</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>Product 1</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>Branding 1</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>Books 1</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>App 2</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>Product 2</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>Branding 2</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>Books 2</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>App 3</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>Product 3</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>Branding 3</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                                 <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
//                                     <div className="portfolio-content h-100">
//                                         <img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt=""/>
//                                             <div className="portfolio-info">
//                                                 <h4>Books 3</h4>
//                                                 <p>Lorem ipsum, dolor sit amet consectetur</p>
//                                                 <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
//                                                 <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
//                                             </div>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>

//                     </div>

//                 </section>




import React, { useEffect, useState } from 'react';
import GLightbox from 'glightbox';  
import 'glightbox/dist/css/glightbox.min.css'; 
import { Link } from 'react-router-dom';


export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('*'); 

    const handleFilter = (filter) => {
        setActiveFilter(filter); 
    };
    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.glightbox', 
            width: '80vw', 
            height: '80vh', 
            closeButton: true, 
        });
    }, []);


    // const data = [
    //     {
    //         id: 1,
    //         name: "Parijat Handicraft",
    //         shortDescription: "Parijat Handicraft is committed to promoting traditional Indian craftsmanship through our exclusive range of handmade products",
    //         fullDescription: "At Parijat Handicraft, we bring you a unique collection of hand-crafted masterpieces that embody the rich heritage of traditional craftsmanship. Each product is made with love, skill, and dedication by local artisans, blending cultural significance with contemporary appeal. Explore our carefully curated collection of handcrafted home décor, jewelry, gifts, and more, and bring timeless beauty to your life.",
    //         ProductHeadline: "Welcome to Parijat Handicraft - Where Tradition Meets Artistry",
    //         link: "https://parijathandicraft.com/",
    //         images: ["assets/img/parijat1.png", "assets/img/parijat2.png", "assets/img/parijat3.png", "assets/img/parijat4.png", "assets/img/parijat5.png", "assets/img/parijat6.png", "assets/img/parijat7.png", "assets/img/parijat8.png", "assets/img/parijat9.png", "assets/img/parijat10.png"],
    //         technology: ['React JS', "Bootstrap", "CSS", ".NET"],
    //         workAsA: "Frontend Developer"


    //     },
    //     {
    //         id: 2,
    //         name: "BLW Project",
    //         shortDescription: "This is based on indian railway project.",
    //         fullDescription: "This project is focused on the Indian Railway system, designed to gather and address inquiries related to various issues faced by the railway infrastructure. It aims to streamline the reporting and resolution process for passengers, helping to identify and resolve concerns efficiently.",
    //         ProductHeadline: "Welcome to BLW Project",
    //         link: "#",
    //         images: ["assets/img/portfolio/books-1.jpg", "assets/img/portfolio/books-2.jpg", "assets/img/portfolio/books-3.jpg"],
    //         technology: ['Javascript', "Bootstrap", "CSS", ".NET", "Html", "jQuery"],
    //         workAsA: "Frontend Developer"
    //     },
    //     {
    //         id: 3,
    //         name: "Eshop Website",
    //         shortDescription: "This is Ecommerce Eshop website",
    //         fullDescription: "This project deals with developing a website ‘E-shop Website’. It provides the user with a list of the various products available for purchase in the store. For the convenience of online shopping, a shopping cart is provided to the user. After the selection of the goods, it is sent for the order confirmation process. The system is implemented using Python’s web framework Django.",
    //         ProductHeadline: "Welcome to Ecommerce Eshop - Where Tradition Meets Artistry",
    //         link: "https://github.com/Dileep9098/eshop",
    //         images: ["assets/img/eshop1.png", "assets/img/eshop2.png", "aassets/img/eshop3.png"]

    //     },
    //     {
    //         id: 4,
    //         name: "Bakery Website",
    //         shortDescription: "This is Ecommerce Bakery Website",
    //         fullDescription: "This project deals with developing a website ‘Bakery Website’. It provides the user with a list of the various products available for purchase in the store. For the convenience of online shopping, a shopping cart is provided to the user. After the selection of the goods, it is sent for the order confirmation process. The system is implemented using Frontend and Backend technologies.",
    //         ProductHeadline: "Welcome to Ecommerce Bakery Website ",
    //         link: "https://github.com/Dileep9098/bakery1",
    //         images: ["assets/img/bakery1.png", "assets/img/bakery2.png", "assets/img/bakery3.png","assets/img/bakery4.png"]

    //     },
    //     {
    //         id: 5,
    //         name: "News App",
    //         shortDescription: "This is News App website provide News Information",
    //         fullDescription: "This News App website provides real-time news information sourced from a reliable news API. The application is built using React JS to ensure a dynamic and responsive user interface. The app displays various news articles based on categories, such as technology, sports, business, health, and more, offering users access to the latest headlines from trusted news outlets",
    //         ProductHeadline: "Welcome to News App Website provide",
    //         link: "https://github.com/Dileep9098/NewsApp",
    //         images: ["assets/img/news1.png", "assets/img/news2.png", "assets/img/news3.png","assets/img/news4.png"]

    //     },
    // ]

    // localStorage.setItem("personal", JSON.stringify(data));

    // // Retrieve the data from localStorage and parse it back into an array
    // const storedData = JSON.parse(localStorage.getItem("personal"));

    // console.log(storedData);
    // setTimeout(() => {
    //     localStorage.removeItem("personal");
    //     console.log("Data has been deleted from localStorage after 24 hours.");
    // }, 24 * 60 * 60000);  // 24 hours

    return (
        <>
            <section id="portfolio" className="portfolio section light-background">
                <div className="container section-title" data-aos="fade-up">
                    <h2 id="size1">Portfolio</h2>
                    <p>
                        I have developed many websites combining Live and personal, and I have experience in dynamic websites.
                    </p>
                </div>

                <div className="container">
                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            <li
                                data-filter="*"
                                className={activeFilter === '*' ? 'filter-active' : ''}
                                onClick={() => handleFilter('*')}
                            >
                                All
                            </li>
                            <li
                                data-filter="*"
                                className={activeFilter === '.filter-app' ? 'filter-active' : ''}
                                onClick={() => handleFilter('*')}
                            >
                                Websites
                            </li>
                            <li
                                data-filter=".filter-product"
                                className={activeFilter === '.filter-product' ? 'filter-active' : ''}
                                onClick={() => handleFilter('.filter-product')}
                            >
                                Live
                            </li>
                            <li
                                data-filter=".filter-branding"
                                className={activeFilter === '.filter-branding' ? 'filter-active' : ''}
                                onClick={() => handleFilter('.filter-branding')}
                            >
                                Personal
                            </li>
                        </ul>

                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                            <div className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-app ${activeFilter === '*'|| activeFilter === '.filter-product' ? '' : 'd-none'}`} >
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/parijat2.png" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Parijat Handicraft</h4>
                                        <p>Parijat Handicraft is committed to promoting traditional Indian craftsmanship through our exclusive range of handmade products</p>
                                        <a href="assets/img/parijat2.png" title="Parijat Handicraft" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                            <i className="bi bi-zoom-in"></i>
                                        </a>
                                        <Link to="/project-datails/1" title="More Details" className="details-link">
                                            <i className="bi bi-link-45deg"></i>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>

                            {/* <div
                                className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-product ${activeFilter === '*' || activeFilter === '.filter-product' ? '' :'d-none'
                                    }`}
                            >
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Eshop Website</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link">
                                            <i className="bi bi-zoom-in"></i>
                                        </a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link">
                                            <i className="bi bi-link-45deg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div> */}

                            <div
                                className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-branding ${activeFilter === '*' || activeFilter === '.filter-branding' ? '' : 'd-none'
                                    }`}
                            >
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/eshop1.png" className="img-fluid h-100" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Eshop Website</h4>
                                        <p>This is Ecommerce Eshop website</p>
                                        <a href="assets/img/eshop1.png" title="Eshop Website" data-gallery="portfolio-gallery-branding" className="glightbox preview-link">
                                            <i className="bi bi-zoom-in"></i>
                                        </a>
                                        <Link to="/project-datails/3" title="More Details" className="details-link">
                                            <i className="bi bi-link-45deg"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-branding ${activeFilter === '*' || activeFilter === '.filter-branding' ? '' : 'd-none'
                                    }`}
                            >
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/bakery1.png" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Bakery Website</h4>
                                        <p>This is Ecommerce Bakery Website</p>
                                        <a href="assets/img/bakery1.png" title="Bakery Website" data-gallery="portfolio-gallery-branding" className="glightbox preview-link">
                                            <i className="bi bi-zoom-in"></i>
                                        </a>
                                        <Link to="/project-datails/4" title="More Details" className="details-link">
                                            <i className="bi bi-link-45deg"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-branding ${activeFilter === '*' || activeFilter === '.filter-branding' ? '' : 'd-none'
                                    }`}
                            >
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/news1.png" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>News App website</h4>
                                        <p>This is News App website provide News Information.</p>
                                        <a href="assets/img/news1.png" title="News App website" data-gallery="portfolio-gallery-branding" className="glightbox preview-link">
                                            <i className="bi bi-zoom-in"></i>
                                        </a>
                                        <Link to="/project-datails/5" title="More Details" className="details-link">
                                            <i className="bi bi-link-45deg"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            

                            {/* <div
                                className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-product ${activeFilter === '*' || activeFilter === '.filter-product' || activeFilter === '.filter-app' || activeFilter === '.filter-branding' ? '' : 'd-none'
                                    }`}
                            >

                                {
                                    data.map((item, ind) => (
                                        <>

                                            <div className="portfolio-content h-100" key={ind}>
                                                <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" />
                                                <div className="portfolio-info">
                                                    <h4>Product 1</h4>
                                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                    <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link">
                                                        <i className="bi bi-zoom-in"></i>
                                                    </a>
                                                    <a href="portfolio-details.html" title="More Details" className="details-link">
                                                        <i className="bi bi-link-45deg"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }

                            </div> */}



                        </div>
                    </div>
                </div>
            </section>



            <section id="services" className="services section">

                <div className="container section-title" data-aos="fade-up">
                    <h2 id='size1'>Services</h2>
                    <p>As a Full Stack Developer, I offer a wide range of web development services to help businesses build powerful, scalable, and user-friendly applications. Whether you're looking for a simple website or a complex, data-driven web app, I can provide end-to-end solutions tailored to your needs. Below are the services I specialize in:</p>
                </div>

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon flex-shrink-0"><i class="bi bi-code-square"></i></div>
                            <div>
                                <h4 className="title"><a href="#" className="stretched-link">Custom Web Application Development</a></h4>
                                <p className="description">I create dynamic, responsive, and scalable web applications using modern technologies such as React, Node.js, Express, MongoDB, MySQL, and more</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
                            <div>
                                <h4 className="title"><a href="#" className="stretched-link">Front-End Development</a></h4>
                                <p className="description">I design and develop intuitive, responsive, and engaging user interfaces with a focus on HTML5, CSS3, JavaScript, and modern front-end frameworks like React and Vue.js. My goal is to create seamless, interactive experiences that delight users across devices.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
                            <div>
                                <h4 className="title"><a href="#" className="stretched-link">Back-End Development</a></h4>
                                <p className="description">I specialize in building powerful and efficient back-end systems using technologies such as Node.js, Express js. I can design RESTful APIs, integrate databases, and ensure that your application can handle traffic and scale effortlessly.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon flex-shrink-0"><i className="bi bi-binoculars"></i></div>
                            <div>
                                <h4 className="title"><a href="#" className="stretched-link">E-commerce Development
                                </a></h4>
                                <p className="description">I build secure and high-performance e-commerce websites that help businesses engage with customers and drive sales</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon flex-shrink-0"><i className="bi bi-brightness-high"></i></div>
                            <div>
                                <h4 className="title"><a href="#" className="stretched-link"> API Integration & Development</a></h4>
                                <p className="description">I can integrate third-party APIs into your website or application, enhancing its functionality and user experience. Additionally, I can develop custom APIs tailored to your business needs, ensuring smooth data exchange and real-time performance.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
                            <div className="icon flex-shrink-0"><span class="material-symbols-outlined maintenance">engineering</span></div>
                            <div>
                                <h4 className="title"><a href="#" className="stretched-link">Website Maintenance & Support</a></h4>
                                <p className="description">A great website needs ongoing maintenance to stay up-to-date, secure, and fast.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';  // Importing useNavigate
// import GLightbox from 'glightbox';  // Import GLightbox
// import 'glightbox/dist/css/glightbox.min.css'; // Import the CSS for styling
// import ProjectDetails from './ProjectDetails';

// export default function Portfolio() {
//     const [activeFilter, setActiveFilter] = useState('*'); // Default filter: Show all items
//     const navigate = useNavigate(); // useNavigate for page navigation

//     const handleFilter = (filter) => {
//         setActiveFilter(filter); // Set active filter on click
//     };

//     useEffect(() => {
//         const lightbox = GLightbox({
//             selector: '.glightbox', // Target glightbox elements
//             width: '80vw', // Set the width of the lightbox image (80% of the viewport width)
//             height: '80vh', // Set the height of the lightbox image (80% of the viewport height)
//             closeButton: true, // Ensure close button is enabled
//         });
//     }, []);

//     // Function to handle "More Details" click
//     const handleMoreDetailsClick = () => {
//         const projectData = {
//             name: 'Parijat Handicraft',
//             description: 'Parijat Handicraft is committed to promoting traditional Indian craftsmanship...',
//             image: 'assets/img/portfolio/app-1.jpg'
//         };

//         // Navigate to ProjectDetails page and pass data via state
//         navigate('/project-datails', { state: { project: projectData } });
//     };

//     return (
//         <>
//             <section id="portfolio" className="portfolio section light-background">
//                 <div className="container section-title" data-aos="fade-up">
//                     <h2 id="size1">Portfolio</h2>
//                     <p>
//                         I have developed many websites combining Live and personal, and I have experience in dynamic websites.
//                     </p>
//                 </div>

//                 <div className="container">
//                     <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
//                         <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
//                             {/* Filter buttons */}
//                         </ul>

//                         <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
//                             <div className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-app ${activeFilter === '*' || activeFilter === '.filter-app' ? '' : 'd-none'}`}>
//                                 <div className="portfolio-content h-100">
//                                     <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
//                                     <div className="portfolio-info">
//                                         <h4>Parijat Handicraft</h4>
//                                         <p>Parijat Handicraft is committed to promoting traditional Indian craftsmanship through our exclusive range of handmade products</p>
//                                         <a href="assets/img/portfolio/app-1.jpg" title="Parijat Handicraft" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
//                                             <i className="bi bi-zoom-in"></i>
//                                         </a>
//                                         <button onClick={handleMoreDetailsClick} className="details-link">
//                                             <i className="bi bi-link-45deg"></i>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Other portfolio items */}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

