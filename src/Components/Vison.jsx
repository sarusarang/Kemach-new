import React from 'react'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {Comments} from '../Hooks/Attachements'	
import Dealers from './Dealers';

function Vison() {

    const { data, error, isLoading, isSuccess } = Comments()
    const { data: CommentData, error: iserror, isLoading: loading, isSuccess: success } = Comments()

    const [CommentsData, SetCommentsData] = useState([])

    useEffect(() => {

        if (data && isSuccess && CommentData ) {

            const firstSixObjects = data;

            SetCommentsData(firstSixObjects)

            
        }

        AOS.init()

    }, [data, CommentData])


    // Using useInView hook to detect when the section is in view
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });


    // Slider Responsive
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }


    return (




        <>


            <main className='container'>


                <section className="s6">

                    <section className="row">

                        <div className="col-md-4 r1">
                            <h3 data-aos="fade-up fw-bold" style={{ textAlign: 'center', fontWeight: '600' }}>Vision</h3>
                        </div>

                        <div className="col-md-8 r1">
                            <q data-aos="fade-down" className="text-center" style={{ fontSize: '16px', textAlign: 'justify' }}>
                                Kemach’s vision is to be the leading provider of innovative and reliable Compact Equipments and
                                Earth-moving Equipment solutions, consistently delivering high-quality products and services. We aim
                                to foster long-term customer relationships built on trust and to expand our presence across India
                                while maintaining excellence in service and customer satisfaction
                            </q>
                        </div>

                    </section>


                    <div className="row r2">


                        {/* First column */}
                        <div className="col-4" data-aos="zoom-out-up" ref={ref1}>
                            <div className="content-inner">
                                <div className="d-flex">
                                    <h4 id="count1" className="pe-2">
                                        {inView1 ? <CountUp start={0} end={2300} duration={4} /> : '0'}
                                    </h4>
                                    <span><i className="fa-solid fa-plus "></i></span>
                                </div>
                                <div className="inner-2">
                                    <i className="fa-solid fa-truck-ramp-box"></i>
                                    <p className='mb-0'>Equipment Delivered</p>
                                </div>
                            </div>
                        </div>

                        {/* Second column */}
                        <div className="col-4 middle" data-aos="zoom-out-down" ref={ref2}>
                            <div className="content-inner">
                                <div className="d-flex">
                                    <h4 id="count2" className="pe-2">
                                        {inView2 ? <CountUp start={0} end={6200} duration={4} /> : '0'}
                                    </h4>
                                    <span><i className="fa-solid fa-plus "></i></span>
                                </div>
                                <div className="inner-2">
                                    <i className="fa-regular fa-face-smile"></i>
                                    <p className='mb-0'>Happy Customers</p>
                                </div>
                            </div>
                        </div>

                        {/* Third column */}
                        <div className="col-4" data-aos="zoom-out-up" ref={ref3}>
                            <div className="content-inner">
                                <div className="d-flex">
                                    <h4 id="count3" className="pe-2">
                                        {inView3 ? <CountUp start={0} end={40} duration={4} /> : '0'}
                                    </h4>
                                    <span><i className="fa-solid fa-plus "></i></span>
                                </div>
                                <div className="inner-2">
                                    <i className="fa-solid fa-users"></i>
                                    <p className='mb-0'>Employees</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>



                <section class="s7 py-3">
                    <div class="row">
                        <h3 data-aos="zoom-in">Team Strength</h3>
                        <p data-aos="zoom-in-up">
                            In the dynamic realm of construction equipment, customer acquisition becomes effortless. Our
                            exceptional team of engineers, armed with impressive capabilities, not only ensures a seamless
                            process but also infuses excellence and customer satisfaction, making prospect generation a breeze.
                            This winning combination guarantees a journey that is not only highly productive but also immensely
                            attractive to potential customers. With this well-built team and our winning approach, we anticipate
                            a significant success rate in the construction equipment business market in the upcoming years. Our
                            seamless process and commitment to excellence position us for remarkable achievements in this
                            dynamic industry.
                        </p>
                    </div>
                </section>


                <section class="award">
                    <h3>Awards and Achievements</h3>
                    <div class="row gx-4 gx-lg-3 row-cols-1 row-cols-md-2 justify-content-center">
                        <div class="col mb-3">
                            <div class="card">
                                <div class="card-body">
                                    Bobcat Best Chanel Partner Award For 05 Years
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="card">
                                <div class="card-body">
                                    Sales Volume Increased Year By Year.
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="card">
                                <div class="card-body">
                                    No.1 Position In SSL Market
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="card">
                                <div class="card-body">
                                    No 2 Position In The MEX Market Till 2022.
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="card">
                                <div class="card-body">
                                    No.4 Position In The Industry
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="card">
                                <div class="card-body">
                                    Created A Strong Customer Base.
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="card">
                                <div class="card-body">
                                    Regular Contact With Bobcat.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Carousel responsive={responsive} className="mb-5">

                  {CommentsData.map((item, index) => (

                    
                    <div key={index} className="me-1 p-3 h-100">
                      <div className="border-0 h-100 shadow rounded-3 card  d-flex flex-column justify-content-center align-items-center">
                        <img
                          className="card-img  "
                          style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover'}}
                          alt="slide-img"
                          loading="lazy"
                          src={item.image || "data:image/jpeg;base64,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"} // Default image URL
                        />
                        <div className="card-body">
                            
                          <p className="card-text text-center">
                            <q>{item.comment}</q> <br />
                            - <strong className=' text-black text-uppercase ' 
                            >{item.name}</strong>

                          </p>
                        </div>
                      </div>
                    </div>


                  ))
                  
                  }


                </Carousel>

                <Dealers />




            </main>





        </>







    )






}

export default Vison