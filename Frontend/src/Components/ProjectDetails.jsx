// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const ProjectDetails = () => {
//     const location = useLocation(); // Access the passed state data
//     const { project } = location.state; // Destructure the project data

//     return (
//         <div className="project-details">
//             <h2>{project.name}</h2>
//             <img src={project.image} alt={project.name} />
//             <p>{project.description}</p>
//         </div>
//     );
// };

// export default ProjectDetails;



// import React from 'react'
// import SideBar from './SideBar'

// export default function ProjectDetails() {
//   return (
//     <>
//       <SideBar />
//       <main className="main">

//       <div class="page-title dark-background">
//       <div class="container d-lg-flex justify-content-between align-items-center">
//         <h1 class="mb-2 mb-lg-0">Portfolio Details</h1>
//         <nav class="breadcrumbs">
//           <ol>
//             <li><a href="index.html">Home</a></li>
//             <li class="current">Portfolio Details</li>
//           </ol>
//         </nav>
//       </div>
//     </div>
//     <section id="portfolio-details" class="portfolio-details section">

//       <div class="container" data-aos="fade-up" data-aos-delay="100">

//         <div class="row gy-4">

//           <div class="col-lg-8">
//             <div class="portfolio-details-slider swiper init-swiper">

//               <script type="application/json" class="swiper-config">
//                 {
//                   "loop": true,
//                   "speed": 600,
//                   "autoplay": {
//                     "delay": 5000
//                   },
//                   "slidesPerView": "auto",
//                   "pagination": {
//                     "el": ".swiper-pagination",
//                     "type": "bullets",
//                     "clickable": true
//                   }
//                 }
//               </script>

//               <div class="swiper-wrapper align-items-center">

//                 <div class="swiper-slide">
//                   <img src="/assets/img/portfolio/app-1.jpg" alt=""/>
//                 </div>

//                 <div class="swiper-slide">
//                   <img src="/assets/img/portfolio/product-1.jpg" alt=""/>
//                 </div>

//                 <div class="swiper-slide">
//                   <img src="/assets/img/portfolio/branding-1.jpg" alt=""/>
//                 </div>

//                 <div class="swiper-slide">
//                   <img src="/assets/img/portfolio/books-1.jpg" alt=""/>
//                 </div>

//               </div>
//               <div class="swiper-pagination"></div>
//             </div>
//           </div>

//           <div class="col-lg-4">
//             <div class="portfolio-info" data-aos="fade-up" data-aos-delay="200">
//               <h3>Project information</h3>
//               <ul>
//                 <li><strong>Category</strong>: Web design</li>
//                 <li><strong>Client</strong>: ASU Company</li>
//                 <li><strong>Project date</strong>: 01 March, 2020</li>
//                 <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
//               </ul>
//             </div>
//             <div class="portfolio-description" data-aos="fade-up" data-aos-delay="300">
//               <h2>Exercitationem repudiandae officiis neque suscipit</h2>
//               <p>
//                 Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
//               </p>
//             </div>
//           </div>

//         </div>

//       </div>

//     </section>

//   </main>

//   <footer id="footer" class="footer position-relative light-background">

//     <div class="container">
//       <div class="copyright text-center ">
//         <p>© <span>Copyright</span> <strong class="px-1 sitename">iPortfolio</strong> <span>All Rights Reserved</span></p>
//       </div>
//       <div class="credits">

//         Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
//       </div>
//     </div>

//   </footer>



//     </>
//   )
// }




// import React from 'react';
// import SideBar from './SideBar';

// // Import core Swiper and its styles
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';

// // Import the Swiper modules from their correct paths
// import { Pagination } from 'swiper/modules/pagination';
// import { Navigation } from 'swiper/modules/navigation';
// import { Autoplay } from 'swiper/modules/autoplay';

// // Main ProjectDetails component
// export default function ProjectDetails() {
//   return (
//     <>
//       <SideBar />
//       <main className="main">
//         <div className="page-title dark-background">
//           <div className="container d-lg-flex justify-content-between align-items-center">
//             <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
//             <nav className="breadcrumbs">
//               <ol>
//                 <li><a href="index.html">Home</a></li>
//                 <li className="current">Portfolio Details</li>
//               </ol>
//             </nav>
//           </div>
//         </div>

//         {/* Portfolio Details Section */}
//         <section id="portfolio-details" className="portfolio-details section">
//           <div className="container" data-aos="fade-up" data-aos-delay="100">
//             <div className="row gy-4">
//               <div className="col-lg-8">
//                 {/* Swiper Component */}
//                 <Swiper
//                   loop={true}
//                   speed={600}
//                   autoplay={{ delay: 5000 }}
//                   slidesPerView="auto"
//                   pagination={{ clickable: true }}
//                   navigation={true}
//                   modules={[Pagination, Navigation, Autoplay]} // Pass modules array here
//                 >
//                   <SwiperSlide>
//                     <img src="/assets/img/portfolio/app-1.jpg" alt="" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="/assets/img/portfolio/product-1.jpg" alt="" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="/assets/img/portfolio/branding-1.jpg" alt="" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <img src="/assets/img/portfolio/books-1.jpg" alt="" />
//                   </SwiperSlide>
//                 </Swiper>
//               </div>

//               <div className="col-lg-4">
//                 <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
//                   <h3>Project information</h3>
//                   <ul>
//                     <li><strong>Category</strong>: Web design</li>
//                     <li><strong>Client</strong>: ASU Company</li>
//                     <li><strong>Project date</strong>: 01 March, 2020</li>
//                     <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
//                   </ul>
//                 </div>
//                 <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
//                   <h2>Exercitationem repudiandae officiis neque suscipit</h2>
//                   <p>
//                     Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer id="footer" className="footer position-relative light-background">
//         <div className="container">
//           <div className="copyright text-center">
//             <p>© <span>Copyright</span> <strong className="px-1 sitename">iPortfolio</strong> <span>All Rights Reserved</span></p>
//           </div>
//           <div className="credits">
//             Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }




// import React from 'react';
// import SideBar from './SideBar';
// import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide components
// import 'swiper/css';  // Import Swiper's CSS for v10+
// import { useParams } from 'react-router-dom';

// export default function ProjectDetails() {

//   const {id}=useParams()
//   console.log(id)
//   const data = [
//     {
//       id: 1,
//       name: "Parijat Handicraft",
//       shortDescription: "Parijat Handicraft is committed to promoting traditional Indian craftsmanship through our exclusive range of handmade products",
//       fullDescription: "At Parijat Handicraft, we bring you a unique collection of hand-crafted masterpieces that embody the rich heritage of traditional craftsmanship. Each product is made with love, skill, and dedication by local artisans, blending cultural significance with contemporary appeal. Explore our carefully curated collection of handcrafted home décor, jewelry, gifts, and more, and bring timeless beauty to your life.",
//       ProductHeadline: "Welcome to Parijat Handicraft - Where Tradition Meets Artistry",
//       link: "https://parijathandicraft.com/",
//       images: ["/assets/img/parijat1.png", "assets/img/parijat2.png", "assets/img/parijat3.png", "assets/img/parijat4.png", "assets/img/parijat5.png", "assets/img/parijat6.png", "assets/img/parijat7.png", "assets/img/parijat8.png", "assets/img/parijat9.png", "assets/img/parijat10.png"],
//       technology: ['React JS', "Bootstrap", "CSS", ".NET"],
//       workAsA: "Frontend Developer"


//     },
//     {
//       id: 2,
//       name: "BLW Project",
//       shortDescription: "This is based on indian railway project.",
//       fullDescription: "This project is focused on the Indian Railway system, designed to gather and address inquiries related to various issues faced by the railway infrastructure. It aims to streamline the reporting and resolution process for passengers, helping to identify and resolve concerns efficiently.",
//       ProductHeadline: "Welcome to BLW Project",
//       link: "#",
//       images: ["assets/img/portfolio/books-1.jpg", "assets/img/portfolio/books-2.jpg", "assets/img/portfolio/books-3.jpg"],
//       technology: ['Javascript', "Bootstrap", "CSS", ".NET", "Html", "jQuery"],
//       workAsA: "Frontend Developer"
//     },
//     {
//       id: 3,
//       name: "Eshop Website",
//       shortDescription: "This is Ecommerce Eshop website",
//       fullDescription: "This project deals with developing a website ‘E-shop Website’. It provides the user with a list of the various products available for purchase in the store. For the convenience of online shopping, a shopping cart is provided to the user. After the selection of the goods, it is sent for the order confirmation process. The system is implemented using Python’s web framework Django.",
//       ProductHeadline: "Welcome to Ecommerce Eshop - Where Tradition Meets Artistry",
//       link: "https://github.com/Dileep9098/eshop",
//       images: ["assets/img/eshop1.png", "assets/img/eshop2.png", "aassets/img/eshop3.png"]

//     },
//     {
//       id: 4,
//       name: "Bakery Website",
//       shortDescription: "This is Ecommerce Bakery Website",
//       fullDescription: "This project deals with developing a website ‘Bakery Website’. It provides the user with a list of the various products available for purchase in the store. For the convenience of online shopping, a shopping cart is provided to the user. After the selection of the goods, it is sent for the order confirmation process. The system is implemented using Frontend and Backend technologies.",
//       ProductHeadline: "Welcome to Ecommerce Bakery Website ",
//       link: "https://github.com/Dileep9098/bakery1",
//       images: ["assets/img/bakery1.png", "assets/img/bakery2.png", "assets/img/bakery3.png", "assets/img/bakery4.png"]

//     },
//     {
//       id: 5,
//       name: "News App",
//       shortDescription: "This is News App website provide News Information",
//       fullDescription: "This News App website provides real-time news information sourced from a reliable news API. The application is built using React JS to ensure a dynamic and responsive user interface. The app displays various news articles based on categories, such as technology, sports, business, health, and more, offering users access to the latest headlines from trusted news outlets",
//       ProductHeadline: "Welcome to News App Website provide",
//       link: "https://github.com/Dileep9098/NewsApp",
//       images: ["assets/img/news1.png", "assets/img/news2.png", "assets/img/news3.png", "assets/img/news4.png"]

//     },
//   ]

//   const fdata = data.filter(item => item.id === id);

//   console.log(fdata);

//   return (
//     <>
//       <SideBar />
//       <main className="main">
//         <div className="page-title dark-background">
//           <div className="container d-lg-flex justify-content-between align-items-center">
//             <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
//             <nav className="breadcrumbs">
//               <ol>
//                 <li><a href="index.html">Home</a></li>
//                 <li className="current">Portfolio Details</li>
//               </ol>
//             </nav>
//           </div>
//         </div>

//         <section id="portfolio-details" className="portfolio-details section">
//           <div className="container" data-aos="fade-up" data-aos-delay="100">
//             <div className="row gy-4">
//               <div className="col-lg-8">

//                 <div id="carouselExampleIndicators" class="carousel slide">
//                   <div class="carousel-indicators">
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                   </div>
//                   <div class="carousel-inner">
//                     <div class="carousel-item active">
//                       <img src="/assets/img/parijat2.png" class="d-block w-100 projectDetailsImage " alt="..." />
//                     </div>
//                     <div class="carousel-item">
//                       <img src="/assets/img/parijat3.png" class="d-block w-100 projectDetailsImage " alt="..." />
//                     </div>
//                     <div class="carousel-item">
//                       <img src="/assets/img/parijat4.png" class="d-block w-100 projectDetailsImage " alt="..." />
//                     </div>
//                   </div>
//                   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Previous</span>
//                   </button>
//                   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span class="visually-hidden">Next</span>
//                   </button>
//                 </div>

//               </div>

//               <div className="col-lg-4">
//                 <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
//                   <h3>Project information</h3>
//                   <ul>
//                     <li><strong>Category</strong>: Web design</li>
//                     <li><strong>Client</strong>: ASU Company</li>
//                     <li><strong>Project date</strong>: 01 March, 2020</li>
//                     <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
//                   </ul>
//                 </div>
//                 <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
//                   <h2>Exercitationem repudiandae officiis neque suscipit</h2>
//                   <p>
//                     Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer id="footer" className="footer position-relative light-background">
//         <div className="container">
//           <div className="copyright text-center">
//             <p>© <span>Copyright</span> <strong className="px-1 sitename">iPortfolio</strong> <span>All Rights Reserved</span></p>
//           </div>
//           <div className="credits">
//             Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }




import React from 'react';
import SideBar from './SideBar';
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';

export default function ProjectDetails() {
  const { id } = useParams();
  console.log(id);

  // The data array with multiple projects
  const data = [
    {
      id: 1,
      name: "Parijat Handicraft",
      shortDescription: "Parijat Handicraft is committed to promoting traditional Indian craftsmanship through our exclusive range of handmade products",
      fullDescription: "At Parijat Handicraft, we bring you a unique collection of hand-crafted masterpieces that embody the rich heritage of traditional craftsmanship. Each product is made with love, skill, and dedication by local artisans, blending cultural significance with contemporary appeal. Explore our carefully curated collection of handcrafted home décor, jewelry, gifts, and more, and bring timeless beauty to your life.",
      ProductHeadline: "Welcome to Parijat Handicraft - Where Tradition Meets Artistry",
      link: "https://parijathandicraft.com/",
      images: ["/assets/img/parijat1.png", "/assets/img/parijat2.png", "/assets/img/parijat3.png", "/assets/img/parijat4.png", "/assets/img/parijat5.png", "/assets/img/parijat6.png", "/assets/img/parijat7.png", "/assets/img/parijat8.png",],
      technology: ['React JS', "Bootstrap", "CSS", ".NET", "Node JS", "Express JS"],
      workAsA: "Frontend Developer"
    },
    {
      id: 2,
      name: "BLW Project",
      shortDescription: "This is based on indian railway project.",
      fullDescription: "This project is focused on the Indian Railway system, designed to gather and address inquiries related to various issues faced by the railway infrastructure. It aims to streamline the reporting and resolution process for passengers, helping to identify and resolve concerns efficiently.",
      ProductHeadline: "Welcome to BLW Project",
      link: "#",
      images: ["/assets/img/portfolio/books-1.jpg", "/assets/img/portfolio/books-2.jpg", "/assets/img/portfolio/books-3.jpg"],
      technology: ['Javascript', "Bootstrap", "CSS", ".NET", "Html", "jQuery"],
      workAsA: "Frontend Developer"
    },
    {
      id: 3,
      name: "Eshop Website",
      shortDescription: "This is Ecommerce Eshop website",
      fullDescription: "This project deals with developing a website ‘E-shop Website’. It provides the user with a list of the various products available for purchase in the store. For the convenience of online shopping, a shopping cart is provided to the user. After the selection of the goods, it is sent for the order confirmation process. The system is implemented using Python’s web framework Django.",
      ProductHeadline: "Welcome to Ecommerce Eshop - Where Tradition Meets Artistry",
      link: "https://github.com/Dileep9098/eshop",
      images: ["/assets/img/eshop1.png", "/assets/img/eshop2.png", "/assets/img/eshop3.png"]
    },
    {
      id: 4,
      name: "Bakery Website",
      shortDescription: "This is Ecommerce Bakery Website",
      fullDescription: "This project deals with developing a website ‘Bakery Website’. It provides the user with a list of the various products available for purchase in the store. For the convenience of online shopping, a shopping cart is provided to the user. After the selection of the goods, it is sent for the order confirmation process. The system is implemented using Frontend and Backend technologies.",
      ProductHeadline: "Welcome to Ecommerce Bakery Website ",
      link: "https://github.com/Dileep9098/bakery1",
      images: ["/assets/img/bakery1.png", "/assets/img/bakery2.png", "/assets/img/bakery3.png", "/assets/img/bakery4.png"]
    },
    {
      id: 5,
      name: "News App",
      shortDescription: "This is News App website provide News Information",
      fullDescription: "This News App website provides real-time news information sourced from a reliable news API. The application is built using React JS to ensure a dynamic and responsive user interface. The app displays various news articles based on categories, such as technology, sports, business, health, and more, offering users access to the latest headlines from trusted news outlets",
      ProductHeadline: "Welcome to News App Website provide",
      link: "https://github.com/Dileep9098/NewsApp",
      images: ["/assets/img/news1.png", "/assets/img/news2.png", "/assets/img/news3.png", "/assets/img/news4.png"]
    },
  ];

  // Convert id to a number for comparison
  const projectId = parseInt(id, 10);

  // Filter the data array to find the project matching the id
  const fdata = data.filter(item => item.id === projectId);

  // Ensure that the filtered data exists
  if (fdata.length === 0) {
    return <div>Project not found.</div>;
  }

  const project = fdata[0]; // Assuming there is only one project with the matching ID

  return (
    <>
      <SideBar />
      <main className="main">
        <div className="page-title dark-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><Link to="/">Home</Link></li>
                <li className="current">Portfolio Details</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-8">
                {/* <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                  <div className="carousel-inner">
                    {project.images.map((image, index) => (
                      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={image} className="d-block w-100 projectDetailsImage" alt={`Slide ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div> */}

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                  <div className="carousel-inner">
                    {project.images.map((image, index) => (
                      <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={image} className="d-block w-100 projectDetailsImage" alt={`Slide ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

              </div>

              <div className="col-lg-4">
                <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                  <h3 id='size2'>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>: <span id='size4'> Web design</span></li>
                    <li><strong>Project Name</strong>: <span id='size4'> {project.name}</span></li>
                    {project.workAsA ?
                      <li><strong>Work As A</strong>:<span id='size4'>  {project.workAsA} </span></li>
                      : ""}
                    <li><strong>Project URL</strong>: <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></li>

                    {project.technology &&
                      <li><strong>Technology :</strong>
                        {project.technology.map((tech, ind) => (
                          <div key={ind}>

                            <ul>

                              <ol> {ind + 1}. {tech}</ol>
                            </ul>

                          </div>
                        ))}


                      </li>
                    }
                  </ul>

                 

                </div>
                <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                  <h2 id='size2'>{project.ProductHeadline}</h2>
                  <p>{project.fullDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
