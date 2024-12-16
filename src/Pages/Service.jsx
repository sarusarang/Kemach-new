import React from 'react'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ProductParts } from '../Hooks/Attachements'
import LoadingSpinner from '../Components/LoadingSpinner'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from 'react-router-dom'


function Service() {

    const { data, isLoading, isSuccess, error } = ProductParts()


    const [Parts, SetParts] = useState([])


    useEffect(() => {


        if (data && isSuccess) {

            SetParts(data)
        }

        AOS.init()

        window.scrollTo(0, 0)

    }, [data, isSuccess])



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

            <section className="productTopImage"
                style={{ backgroundImage: 'url("https://res.cloudinary.com/doosan-bobcat/image/upload/c_fill,f_auto,g_auto,h_480,q_auto,w_2048/v1671105824/bobcat-assets/alao-approved/in/products/skid-steer-loaders/category-image/20221214-in-ssl-herospot")' }}>
            </section>



            <main className="container" id="ForkLiftD">

                <section className="fork-s2">

                    <div className="row seperation" data-aos="fade-up">
                        <h1>Service</h1>
                    </div>

                    <div className="row service" data-aos="fade-down">
                        <p>We pride ourselves on delivering high-quality products and services with a strong focus on reliability and
                            precision. Our commitment to excellence ensures that every solution we provide meets the highest industry
                            standards, while our emphasis on timely delivery keeps your operations running smoothly and efficiently.
                        </p>
                    </div>
                    <div className="row text-center s2" data-aos="zoom-in">
                        <h3>To Access Our Services Contact Now!</h3>
                    </div>

                    <div className="row serv3 gx-4 gx-lg-3 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-2 justify-content-center">
                        <div className="col mb-3">
                            <div className="card serv-card h-100" data-aos="zoom-in-up">
                                <div className="card-body">
                                    <h5 className="card-title">Kannur, <br />
                                        Kasargod
                                    </h5>
                                    <p className="card-text">+91 93429 44925</p>
                                    <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal1" >enquire now</a>
                                </div>
                            </div>
                        </div>


                        <div className="col mb-3">
                            <div className="card serv-card h-100" data-aos="zoom-in-up">
                                <div className="card-body">
                                    <h5 className="card-title">Calicut,
                                        Malappuram,
                                        Wayanad</h5>
                                    <p className="card-text"> +91 89433 40261
                                    </p>
                                    <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal2" >enquire now</a>
                                </div>
                            </div>
                        </div>


                        <div className="col mb-3">
                            <div className="card serv-card h-100" data-aos="zoom-in-up">
                                <div className="card-body">
                                    <h5 className="card-title">Ernakulam,
                                        Thrissur, <br />
                                        Palakkad
                                    </h5>
                                    <p className="card-text">+91 7034600 888</p>
                                    <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal4" >enquire now</a>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="modal fade servmodal" id="ServiceModal1" tabIndex="-1" aria-labelledby="ServiceModal1Label" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title " id="ServiceModal1Label">enquire now</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <a target="_blank" href="https://wa.me/+919342944925"><i className="pe-2 fa-brands fa-whatsapp"></i>+91 9342944925</a>
                                    <a target="_blank" href="tel:+919342944925"><i className="pe-2 fa-solid fa-phone"></i>+91 9342944925</a>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="modal fade servmodal" id="ServiceModal2" tabIndex="-1" aria-labelledby="ServiceModal2Label" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title " id="ServiceModal2Label">enquire now</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <a target="_blank" href="https://wa.me/+918943340261"><i className="pe-2 fa-brands fa-whatsapp"></i>+91 8943340261</a>
                                    <a target="_blank" href="tel:+918943340261"><i className="pe-2 fa-solid fa-phone"></i>+91 8943340261</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="modal fade servmodal" id="ServiceModal4" tabIndex="-1" aria-labelledby="ServiceModal4Label" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title " id="ServiceModal4Label">enquire now</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <a target="_blank" href="https://wa.me/+917034600888"><i className="pe-2 fa-brands fa-whatsapp"></i>+91  7034600888</a>
                                    <a target="_blank" href="tel:+917034600888"><i className="pe-2 fa-solid fa-phone"></i>+91  7034600888</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
                <section className="fork-s2">
                    <div className="row seperation" data-aos="fade-up">
                        <h1>Parts</h1>
                    </div>
                </section>


                <section className="fork-s1">
                    {/* <img src="./Parts_Kemach.jpg" alt="" /> */}
                    <div className=' parts-banner' style={{ backgroundImage: 'url("/Parts_Kemach.jpg")' }} data-aos="fade-up" >

                    </div>
                    <p data-aos="fade-up" style={{ textAlign: 'justify',fontSize:'23px',fontWeight:'300' }} >
                    Ensure your Bobcat equipment runs smoothly and efficiently with our range of genuine parts and spares. From engine and hydraulic components to filters, tires, and attachments, we provide everything you need to maintain and repair your machines. Our selection includes high-quality, OEM parts designed to fit perfectly and enhance the performance of your Bobcat loaders, excavators, and more. Keep your operations running efficiently with reliable parts and expert support from your trusted Bobcat dealer.
                    </p>

                    <div className="row serv3 gx-4 gx-lg-3 row-cols-1 row-cols-md-3 row-cols-lg-3 justify-content-center ">
                        <div className="col mb-3">
                            <div className="card serv-card h-100" data-aos="zoom-in-up">
                                <div className="card-body parts-div text-center">
                                    <h5 className="card-title">For more information</h5>
                                    <p className="card-text">Contact With Parts Manager</p>
                                    <p>+91 97784 12523</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <ul className='list-unstyled parts-div d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly px-5'>
                            <li className='btn '><a className='text-decoration-none text-white' data-bs-toggle="modal" data-bs-target="#ServiceModal5">Enquire Now</a></li>
                            <li className='btn'><Link to={'/book'} className='text-decoration-none text-white' >Contact with sales team</Link></li>
                            <li className='btn'><Link to={'/locator'} className='text-decoration-none text-white' >Store Locator</Link></li>
                        </ul>
                    </div>
                    


                    
                    <div className="modal fade servmodal" id="ServiceModal5" tabIndex="-1" aria-labelledby="ServiceModal5Label" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title " id="ServiceModal5Label">enquire now</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <a target="_blank" href="https://wa.me/+919778412523"><i className="pe-2 fa-brands fa-whatsapp"></i>+91 97784 12523</a>
                                    <a target="_blank" href="tel:+919778412523"><i className="pe-2 fa-solid fa-phone"></i>+91 97784 12523</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* <Carousel responsive={responsive} className='pb-'>


                            {

                                isLoading || error ?

                                    <LoadingSpinner />


                                    :


                                    Parts.map((item, index) => (

                                        <div className="col mb-3" key={index}>
                                            <a href="" className="text-decoration-none " >
                                                <div className="card h-100" data-aos="fade-down">
                                                    <img
                                                        src={item.image}
                                                        className="img-fluid" alt="..." loading='lazy' />

                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            {item.name}
                                                        </h5>
                                                        <p className="card-text">
                                                            {item.description}
                                                        </p>
                                                        <a href="#" className=" d-flex justify-content-start align-items-center btn-learn btn">Learn More <i
                                                            className="fa-solid ps-1 fa-right-long"></i></a>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>


                                    ))

                            }


                        </Carousel> */}



                  
                </section>
            </main>


        </>


    )





}

export default Service