import React from 'react'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Link } from 'react-router-dom'
import { Machineries } from '../Hooks/Machineries'
import LoadingSpinner from '../Components/LoadingSpinner'
import { NearestShowroom } from '../Hooks/Machineries'
import Dealers from '../Components/Dealers'

function Locator() {


    const { data, error, isLoading, isSuccess } = Machineries()
    const { data: ShooroomData, error: iserror, isLoading: loading, isSuccess: success } = NearestShowroom()

 
    const [AllProducts, SetAllProducts] = useState([])

    const [NearestData, SetNearestData] = useState([])



    useEffect(() => {

        if (data && isSuccess && ShooroomData ) {

            const firstSixObjects = data

            SetAllProducts(firstSixObjects)

            SetNearestData(ShooroomData)
            // console.log(ShooroomData);
            


        }

        AOS.init()

        window.scrollTo(0, 0)

    }, [data, isSuccess,ShooroomData, error])




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


                <section
                    className="row store-locator gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {NearestData.map((item, index) => (
                    <div className="col mb-3">
                        <div className="card h-100" data-aos="fade-up">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <a href={item.location_link} target='_blank' className="card-text"> <i
                                    className="fa-solid fa-location-dot"></i>
                                    {item.place} <br />
                                    {item.address} - {item.pincode} <br />
                                    
                                </a> <br />
                                <a href={`tel:${item.phone}`} className="card-text text-decoration-none">
                                    <strong>Contact No:</strong> {item.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                </section>

                <hr style={{ color: 'red' }} className='mb-5' />

                <section>

                    <Carousel responsive={responsive} className='pb-5'>

                    {

                        AllProducts.map((item, index) => (
                            item.category === 'Rock_Breakers' || item.category === 'Hydraulic_Attachments_and_Drill_Bits' ? (
                                <Link to={'/book'} style={{ textDecoration: 'none' }} key={index}>
                                    <div className="card me-3 border-1 h-100">
                                        <img
                                            src={item.image}
                                            className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {item.name}
                                            </h5>
                                            <p className="card-text">
                                                {item.sub_description}
                                            </p>
                                            <a target='_blank' className="d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <Link to={`/pro/${item.id}`} style={{ textDecoration: 'none' }} key={index}>
                                    <div className="card me-3 border-1 h-100">
                                        <img
                                            src={item.image}
                                            className="img-fluid" alt="..." loading='lazy' />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {item.name}
                                            </h5>
                                            <p className="card-text">
                                                {item.sub_description}
                                            </p>
                                            <a target='_blank' className="d-flex justify-content-start align-items-center btn btn-learn">Learn More <i
                                                className="fa-solid ps-1 fa-right-long"></i></a>
                                        </div>
                                    </div>
                                </Link>
                            )
                        ))


                    }


                    </Carousel>


                </section>

                <hr style={{ color: 'red' }} className='mb-5' />

                <section className="s4 mt-3">

                    <div className="row gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-2 justify-content-center container">


                        <div className="col mb-3">

                            <Link to={'/skid'}>

                                <div className="card shadow border-0" data-aos="fade-up">

                                    <img src="/SQ 3.jpg" loading='lazy' alt="slide-img" />

                                    <div className="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                        <h4 className="card-title fw-bolder text-white ">Skid-Steer Loaders</h4>
                                    </div>

                                </div>
                            </Link>

                        </div>


                        <div className="col mb-3">

                            <Link to={'/mini'}>
                                <div className="card shadow border-0" data-aos="fade-down">

                                    <img src="/SQ 5.jpg" loading='lazy' alt="slide-img" />

                                    <div className="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                        <h4 className="card-title fw-bolder text-white ">Mini Excavators</h4>
                                    </div>

                                </div>
                            </Link>

                        </div>


                        <div className="col mb-3">

                            <Link to={'/backhoe'}>

                                <div className="card shadow border-0" data-aos="fade-up">

                                    <img src="/SQ1.jpg" loading='lazy' alt="slide-img" />

                                    <div className="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                        <h4 className="card-title fw-bolder text-white ">Backhoe Loaders</h4>
                                    </div>

                                </div>

                            </Link>

                        </div>

                        <div className="col mb-3">

                            <Link to={'/service'}>

                                <div className="card shadow border-0" data-aos="fade-up">

                                    <img src="/SQ 4 A.jpg" loading='lazy' alt="slide-img" />

                                    <div className="card-img-overlay d-flex align-items-end mb-3 justify-content-center">
                                        <h4 className="card-title fw-bolder text-white ">Attachment & Accessories</h4>
                                    </div>

                                </div>

                            </Link>

                        </div>



                    </div>

                </section>

                <Dealers />



            </main>


        </>


    )


}

export default Locator