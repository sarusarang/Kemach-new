import React from 'react'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link, useNavigate } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';

function MostUsed() {


    useEffect(() => {

        AOS.init()

    }, [])


    // State to manage the display of full content
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the expanded state
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };



    // State to detect if the screen is mobile
    const [isMobile, setIsMobile] = useState(false);




    // Function to check if the current view is mobile (screen width < 768px)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const Navigate = useNavigate()


    return (



        <>


            <main className='container'>


                <section className="py-3 text-capitalize s3">

                    <div className="row">

                        <div className="col-md-6 items-col d-flex justify-content-center align-items-center ">


                            <div className="box shadow" onClick={() => { Navigate('/enquiry') }} style={{ cursor: 'pointer' }}>

                                <p>Book a Test Operation</p>
                                <img src="/testdrive.png" alt="slide-img" loading='lazy' />

                            </div>


                            <div className="box shadow" onClick={() => { Navigate('/book') }} style={{ cursor: 'pointer' }}>

                                <p>Contact with sales Team</p>
                                <img src="/worker.png" alt="slide-img" loading='lazy' />

                            </div>


                        </div>

                        <div className="col-md-6 right-1">

                            {/* <h3 className="text-center " data-aos="fade-up">Most Used earthmoving equipment in
                                <span>India </span>
                            </h3> */}

                            <p data-aos="zoom-in-up">
                                Our second-generation transition in the business not only brings a captivating blend of
                                continuity and fresh perspectives, emphasizing our familial roots and a profound understanding
                                of core strengths but also introduces an enhanced knowledge base in the field. This added
                                expertise notches up our ability to propel the business forward with greater ease, creating a
                                compelling narrative for our future success.
                            </p>

                        </div>


                    </div>

                </section>

                <hr style={{ color: 'red' }} />


                <section className="s4">

                    <h3 class="pt-1 text-center text-capitalize fw-bold h6">The Most delivered equipments</h3>

                    <div className="row gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-2 justify-content-center container">


                        <div className="col mb-3">

                            <Link to={'/skid'}><div className="card shadow border-0" data-aos="fade-up">

                                <img src="/SQ 3.jpg" loading='lazy' alt="slide-img" />

                                <div className="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                    <h4 className="card-title fw-bolder text-white ">Skid-Steer Loaders</h4>
                                </div>

                            </div></Link>


                        </div>


                        <div className="col mb-3">

                            <Link to={'/mini'}><div className="card shadow border-0" data-aos="fade-down">

                                <img src="/SQ 5.jpg" loading='lazy' alt="slide-img" />

                                <div className="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                    <h4 className="card-title fw-bolder text-white ">Mini Excavators</h4>
                                </div>

                            </div></Link>


                        </div>


                        <div className="col mb-3">

                            <Link to={'/backhoe'}><div className="card shadow border-0" data-aos="fade-up">

                                <img src="/SQ1.jpg" loading='lazy' alt="slide-img" />

                                <div className="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                    <h4 className="card-title fw-bolder text-white ">Backhoe Loaders</h4>
                                </div>

                            </div></Link>


                        </div>

                        <div className="col mb-3" data-aos="fade-up" style={{ cursor: 'pointer' }} onClick={() => { Navigate('/service') }}>

                            <Carousel id="carouselExampleIndicatorsCard1" className='border shadow' interval={3000} controls={false} indicators={false}>

                                <Carousel.Item>

                                    <img src="/SQ 4 A.jpg" loading="lazy" className="d-block w-100" alt="First slide" />

                                    <Carousel.Caption>
                                        <h4>Attachment & Accessories</h4>

                                    </Carousel.Caption>

                                </Carousel.Item>

                                <Carousel.Item>
                                    <img src="/SQ 4 B.jpg" loading="lazy" className="d-block w-100" alt="Second slide" />
                                    <Carousel.Caption>
                                        <h4>Attachment & Accessories</h4>


                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img src="/SQ 4 C.jpg" loading="lazy" className="d-block w-100" alt="Third slide" />
                                    <Carousel.Caption>
                                        <h4>Attachment & Accessories</h4>


                                    </Carousel.Caption>
                                </Carousel.Item>


                            </Carousel>


                        </div>


                    </div>

                </section>



                <section className="s5 py-3 mb-5">

                    <div className="row">

                        <div className="col-md-8">

                            <h3 data-aos="fade-up">The Kemach</h3>


                            <p data-aos="fade-down" style={{ textAlign: 'justify', lineHeight: '30px' }}>
                                {/* First part of the content always visible */}
                                Kemach has been a trusted dealer of Bobcat Compact Equipments and construction Industry for the past 18 years,
                                serving both Kerala and Tamil Nadu with a strong commitment to quality and customer satisfaction.
                                As a leading provider in the industry, Kemach offers a wide range of Bobcat Compact Machinery,
                                including Skid Steer loaders, Mini Excavators, Backhoe Loaders, and Rock Breakers, Compressors
                                (Engine Drive – Electric) for catering to various construction, agricultural, and industrial needs.
                                In addition to sales, Kemach provides comprehensive service-related solutions, ensuring that their customers
                                receive top-notch maintenance, repairs, and support throughout the lifecycle of their equipment.


                                {

                                    !isExpanded && !isMobile &&

                                    <>
                                        <br /><br />
                                        KP Velumani is a highly accomplished leader with over 30 years of expertise in the construction equipment industry.
                                        With a robust presence in the Kerala market for the past 15 years, he has consistently demonstrated a deep understanding
                                        of market trends and customer needs. A graduate with a strong technical background, he began his career in the Product Support
                                        Department at ELGI Equipments Ltd, where he specialized in Rotary Screw Compressors for a decade (1986-1996). <br /><br />

                                        Velumani's leadership track record includes serving as Director of Ramsive Pneumatics Pvt Ltd and Marwell Enncon Tech Pvt Ltd,
                                        where he drove significant growth and operational efficiency. Currently, as the Managing Director of Kemach Equipments,
                                        a trusted dealer for Bobcat and Indus Rock, he continues to steer the company towards innovation and excellence.
                                        His visionary leadership, coupled with a commitment to delivering high-quality solutions, makes him a driving force
                                        in the industry and a valuable asset to any enterprise.

                                    </>

                                }

                                {/* Only display the rest if `isExpanded` is true, and the view is mobile */}
                                {isExpanded && isMobile && (
                                    <>
                                        <br />
                                        KP Velumani is a highly accomplished leader with over 30 years of expertise in the construction equipment industry.
                                        With a robust presence in the Kerala market for the past 15 years, he has consistently demonstrated a deep understanding
                                        of market trends and customer needs. A graduate with a strong technical background, he began his career in the Product Support
                                        Department at ELGI Equipments Ltd, where he specialized in Rotary Screw Compressors for a decade (1986-1996). <br /><br />

                                        Velumani's leadership track record includes serving as Director of Ramsive Pneumatics Pvt Ltd and Marwell Enncon Tech Pvt Ltd,
                                        where he drove significant growth and operational efficiency. Currently, as the Managing Director of Kemach Equipments,
                                        a trusted dealer for Bobcat and Indus Rock, he continues to steer the company towards innovation and excellence.
                                        His visionary leadership, coupled with a commitment to delivering high-quality solutions, makes him a driving force
                                        in the industry and a valuable asset to any enterprise.
                                    </>
                                )}


                            </p>

                            {/* Show the button only on mobile view */}
                            {isMobile && (
                                <button onClick={toggleReadMore} className="btn btn-read">
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </button>
                            )}


                        </div>

                        <div className="col-md-4 d-flex flex-column align-content-center justify-content-end
                        ">

                            <img src="/IMG_7717.png" width="100%" alt="img" loading='lazy' />

                            <div className="img-box">
                                <p>K.P Velumani (Managing Director) </p>
                            </div>

                        </div>


                    </div>

                </section>




            </main>





        </>



    )






}

export default MostUsed