
import React, { useState } from "react"; // Import useState
import "./HomePage.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import headerLogo from "../../assets/header-logo.png";
import bgMp4 from "../../assets/ezgif.com-gif-maker.mp4";
import bgWebM from "../../assets/ezgif.com-gif-maker.webm";
import Ticker from "../../components/Ticker/Ticker"; // Ensure Ticker is imported
import "./Services.scss"

function HomePage(props) {
    const [activeDropdown, setActiveDropdown] = useState(null); // State to manage which dropdown is open

    const servicesData = [
        {
            title: "Video Editing",
            description:
                "Create engaging, high-quality videos tailored to captivate and inspire. From social media content to corporate videos, we bring a polished, cinematic touch to every project.",
            niches: [
                "Social Media Videos",
                "Corporate Videos",
                "Promotional Videos",
                "YouTube Content",
                "Event Coverage",
                "Tutorial Videos",
                "Animated Videos",
                "Testimonials",
                "Product Demos",
                "Highlight Reels",
            ],
        },
        {
            title: "Motion Graphics",
            description:
                "Our motion graphics breathe life into static visuals, perfect for explainer videos, social media ads, and branding animations.",
            niches: [
                "Animated Logos",
                "Explainer Videos",
                "Infographics",
                "Social Media Ads",
                "Branding Animations",
                "Title Sequences",
                "Transition Effects",
                "3D Motion Graphics",
                "Kinetic Typography",
                "Character Animation",
            ],
        },
        {
            title: "Graphic Design",
            description:
                "We create brand-aligned visuals, from logos to social media graphics, that leave a lasting impression and communicate your message powerfully.",
            niches: [
                "Logo Design",
                "Business Cards",
                "Brochures",
                "Flyers",
                "Social Media Graphics",
                "Infographics",
                "Packaging Design",
                "Web Graphics",
                "Posters",
                "Brand Identity",
            ],
        },
        {
            title: "VFX",
            description:
                "Bring imagination to reality with expert VFX. From green screen keying to 3D integration, we craft seamless visual effects that transform raw footage into extraordinary scenes.",
            niches: [
                "Green Screen Effects",
                "3D Integration",
                "Compositing",
                "Particle Effects",
                "Simulations",
                "Matte Painting",
                "Character Rigging",
                "Set Extensions",
                "Motion Tracking",
                "Visual Storytelling",
            ],
        },
        {
            title: "3D Design and Animation",
            description:
                "Add depth to your visuals with high-quality 3D design. Our 3D modeling and animation services enhance your projects with realistic depth and engaging visuals, perfect for product showcases, environments, and animated characters.",
            niches: [
                "3D Modeling",
                "Product Visualization",
                "Character Animation",
                "Architectural Rendering",
                "Environmental Design",
                "Animation for Games",
                "Visual Effects for 3D",
                "Virtual Reality Models",
                "3D Printing Models",
                "Interactive 3D Experiences",
            ],
        },
        {
            title: "Need a WEBSITE?",
            href: "http://fluxrware.com/",
            description:
                "Create a stunning online presence that stands out. We design custom, visually compelling websites that capture your brand and engage your audience. From responsive layouts to intuitive navigation, let us bring your online vision to life.",
            niches: [
                "E-commerce Websites",
                "Portfolio Websites",
                "Landing Pages",
                "Business Websites",
                "Blogs and Articles",
                "Responsive Design",
                "Website Redesign",
                "SEO Optimization",
                "Content Management Systems",
                "Web Maintenance Services",
            ],
        },
    ];

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index); // Toggle dropdown
    };

    return (
        <main className="homepage">
            <section className="header padding">
                <div className="header__brand">
                    <h1 className="title">CRAFTING POWERFUL VISUALS FOR BOLD BRANDS!</h1>
                    <img src={headerLogo} alt="" className="header__brand__icon" />
                    <p className="header__brand__description">
                        Bringing stories to life through precision editing, dynamic motion graphics, and impactful visual effects. Let us elevate your vision with creativity that resonates.
                    </p>
                    <Link to="/portfolio" className="nav-links" activeClassName="active-links">
                        See our works!
                    </Link>
                </div>
            </section>

            {/* Wrapper for background */}
            <div className="wrapper-top">
                {/* Stats Section */}
                <section className="stats padding">
                    <div className="stats__container">
                        <div className="stats__container__item">
                            <h2 className="stats__container__item__counter">
                                <Ticker end={100} duration={1} suffix=" +" />
                            </h2>
                            <p className="stats__container__item__description">Unique Clients</p>
                        </div>
                        <div className="stats__container__item">
                            <h2 className="stats__container__item__counter">
                                <Ticker end={100} duration={1} suffix=" +" />
                            </h2>
                            <p className="stats__container__item__description">Freelancers</p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services padding">
                    <h2 className="services__heading">OUR SERVICES</h2>
                    <div className="services__container">
                        {servicesData.map((service, index) => (
                            <div className="services__container__item card-hover" key={index} onClick={() => toggleDropdown(index)}>
                                <div className="services__container__item__description">
                                    <h3
                                        className="services__container__item__description__heading"
                                        
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="services__container__item__description__details">
                                        {service.description}
                                    </p>
                                    {activeDropdown === index && (
                                        <ul className="dropdown">
                                            {service.niches.map((niche, nicheIndex) => (
                                                <li key={nicheIndex} className="dropdown__item">
                                                    {niche}
                                                </li>
                                            ))}
                                        </ul>
                                    )}{service.href ? (
                                      <div><br /><a href={service.href}><h3 className="services__container__item__description__heading">GET ONE JUST FOR YOU!</h3></a></div>
                                      
                                    ) : null}
                                    
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            
        {/* Features Section */}
        <section className="features padding">
          <h2 className="features__heading">OUR FEATURES</h2>
          <div className="features__container">
            <div className="features__container__item card-hover">
              <img
                src="./quality.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">Quality</h3>
              <p className="features__container__item__details">
                Delivering excellence in every detail. At Rhembow Labs, we pride
                ourselves on high-quality work that meets professional
                standards, ensuring every project makes a lasting impact.
              </p>
            </div>
            <div className="features__container__item card-hover">
              <img
                src="./AFFORDABLE.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">Affordable</h3>
              <p className="features__container__item__details">
                Creative services that fit your budget. We believe in offering
                top-notch work at competitive rates, making professional design
                and editing accessible for all.
              </p>
            </div>
            <div className="features__container__item card-hover">
              <img
                src="./EFFICIENT.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">Efficient</h3>
              <p className="features__container__item__details">
                Fast turnarounds without compromising quality. Our team is
                committed to delivering timely results, balancing speed with the
                meticulous attention your project deserves.
              </p>
            </div>
            <div className="features__container__item card-hover">
              <img
                src="PROFESSIONAL.png"
                alt=""
                className="features__container__item__icon"
              />
              <h3 className="features__container__item__heading">
                Professional
              </h3>
              <p className="features__container__item__details">
                Trusted expertise you can rely on. With a team of skilled
                professionals, Rhembow Labs is dedicated to providing reliable
                service and polished results every time.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews padding">
          <h2 className="reviews__heading">OUR REVIEWS</h2>

          <div className="reviews__carousel">
            <img src="./btn-prev.png" alt="btn-prev" className="prev" />
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src="./star.png"
                        alt="star"
                        className="reviews__carousel__item__stars__star"
                      />
                    ))}
                  </div>
                  <p className="reviews__carousel__item__details">
                    “Rhembow Labs exceeded my expectations. Their team helped
                    bring my vision to life, and the final product was nothing
                    short of amazing. The whole process was smooth and
                    professional!”
                  </p>
                  <h2 className="reviews__carousel__item__name">
                    Adekunle Olatunde
                  </h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src="./star.png"
                        alt="star"
                        className="reviews__carousel__item__stars__star"
                      />
                    ))}
                  </div>
                  <p className="reviews__carousel__item__details">
                    “Working with Rhembow Labs was a delight. Their attention to
                    detail and creativity helped my project stand out, and they
                    completed it well within the timeline. Highly recommend!”
                  </p>
                  <h2 className="reviews__carousel__item__name">
                    Esther Nwankwo
                  </h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src="./star.png"
                        alt="star"
                        className="reviews__carousel__item__stars__star"
                      />
                    ))}
                  </div>
                  <p className="reviews__carousel__item__details">
                    “I needed high-quality visual content, and Rhembow Labs
                    delivered beyond my expectations. Their expertise in both
                    design and editing really shines through in their work!”
                  </p>
                  <h2 className="reviews__carousel__item__name">
                    Emmanuel Chibueze
                  </h2>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="reviews__carousel__item">
                  <div className="reviews__carousel__item__stars">
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src="./star.png"
                        alt="star"
                        className="reviews__carousel__item__stars__star"
                      />
                    ))}
                  </div>
                  <p className="reviews__carousel__item__details">
                    “Professional, reliable, and incredibly talented! Rhembow
                    Labs brought fresh ideas to our project, and the result was
                    just what we needed. I’ll definitely be back for future
                    work.”
                  </p>
                  <h2 className="reviews__carousel__item__name">
                    Miriam Ayodeji
                  </h2>
                </div>
              </SwiperSlide>
            </Swiper>

            <img src="./btn-next.png" alt="" className="next" />
          </div>
          <a
            href="https://wa.me/+2347041099662/"
            target="_blank"
            className="btn btn-primary"
          >
            Order a service
          </a>
        </section>
        </main>
    );
}

export default HomePage;
