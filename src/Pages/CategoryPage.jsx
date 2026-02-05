import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Machineries } from "../Hooks/Machineries";
import { Attachments } from "../Hooks/Attachements";
import LoadingSpinner from "../Components/LoadingSpinner";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { getCategoryConfig } from "../config/categoryConfig";





function CategoryPage({ categoryKey }) {



    // Get Machine
    const { data, error, isLoading, isSuccess } = Machineries();



    // Get attachments
    const { data: attachmentData, error: attachmentError, isLoading: attachmentLoading, isSuccess: attachmentSuccess, } = Attachments();



    const [productData, setProductData] = useState([]);
    const [productAttachments, setProductAttachments] = useState([]);
    const [sectionData, setSectionData] = useState({});



    // Get configuration for this category
    const config = getCategoryConfig(categoryKey);




    useEffect(() => {

        AOS.init();
        window.scrollTo(0, 0);

        if (!config) return;


        if (data && isSuccess) {

            // Handle different layout types
            if (config?.layoutType === "standard" || config?.layoutType === "simple") {


                // Filter products by category
                const filtered = data?.filter((item) => item?.category === config?.category);
                setProductData(filtered);


            } else if (config?.layoutType === "multi-section" && config?.sections) {


                // Filter products for each section
                const sections = {};

                config?.sections?.forEach((section) => {
                    sections[section?.filterValue] = data?.filter(
                        (item) => item[section?.filterKey] === section?.filterValue
                    );
                });

                setSectionData(sections);

            }

        }


        // Load attachments if needed
        if (config?.showAttachments && attachmentData && attachmentSuccess) {
            const filtered = attachmentData?.filter(
                (item) => item?.category === config?.attachmentCategory
            );
            setProductAttachments(filtered);
        }


    }, [data, isSuccess, attachmentData, attachmentSuccess, config, categoryKey]);




    // Carousel responsive settings
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };



    if (!config) {
        return (
            <main className="container" id="ForkLiftD">
                <section className="fork-s1">
                    <div className="row row1">
                        <h1>Category not found</h1>
                    </div>
                </section>
            </main>
        );
    }



    // Render product card for standard/simple layouts
    const renderProductCard = (item, index) => (

        <div className="col mb-3 mt-3" key={index}>


            <Link to={`/pro/${item?.id}`} className="text-decoration-none">


                <div className="card h-100" data-aos="fade-down">


                    <img
                        src={item?.image}
                        className="img-fluid"
                        alt="..."
                        loading="lazy"
                    />


                    <div className="card-body">


                        <h5 className="card-title">{item?.name}</h5>
                        <p className="card-text" style={{ textAlign: "justify" }}>
                            {item?.sub_description}
                        </p>


                        {/* Bobcat */}
                        {item?.power && (

                            <div className="d-flex justify-content-between w-100">
                                <h6 className="fw-bold mb-0">
                                    {item?.power ? "Horsepower" : ""}
                                </h6>
                                <p className="mb-0">
                                    {item?.power ? <p>{item?.power}hp</p> : ""}
                                </p>
                            </div>

                        )}



                        {item?.weight && (

                            <div className="d-flex justify-content-between w-100">
                                <h6 className="fw-bold">
                                    {item?.weight ? "Operation Weight" : ""}
                                </h6>
                                <p>{item?.weight ? <p>{item?.weight}kg</p> : ""}</p>
                            </div>
                        )}



                        {/* Asphalt */}
                        {item?.capacity && (
                            <div className="d-flex justify-content-between align-items-start w-100 gap-3">
                                <h6 className="fw-bold mb-0 flex-shrink-0">
                                    Capacity
                                </h6>

                                <span className="mb-0 text-end text-wrap capacity-text">
                                    {item?.capacity} kg
                                </span>
                            </div>
                        )}


                        {item?.batch_cycle_time && (

                            <div className="d-flex justify-content-between w-100">
                                <h6 className="fw-bold">
                                    {item?.batch_cycle_time ? "Batch Cycle Time" : ""}
                                </h6>
                                <p>{item?.batch_cycle_time ? <p>{item?.batch_cycle_time}</p> : ""}</p>
                            </div>
                        )}



                        {/* Concrete category */}
                        {item?.plant_capacity && (

                            <div className="d-flex justify-content-between w-100">
                                <h6 className="fw-bold">
                                    {item?.plant_capacity ? "Plant Capacity" : ""}
                                </h6>
                                <p>{item?.plant_capacity ? <p>{item?.plant_capacity}</p> : ""}</p>
                            </div>
                        )}



                        {item?.aggregate_bin_type && (

                            <div className="d-flex justify-content-between w-100">
                                <h6 className="fw-bold">
                                    {item?.aggregate_bin_type ? "Aggregate Bin Type" : ""}
                                </h6>
                                <p>{item?.aggregate_bin_type ? <p>{item?.aggregate_bin_type}</p> : ""}</p>
                            </div>
                        )}


                        {item?.number_of_bins && (

                            <div className="d-flex justify-content-between w-100">
                                <h6 className="fw-bold">
                                    {item?.number_of_bins ? "Number of Bins" : ""}
                                </h6>
                                <p>{item?.number_of_bins ? <p>{item?.number_of_bins}</p> : ""}</p>
                            </div>
                        )}


                        {item?.bin_capacity && (

                            <div className="d-flex justify-content-between w-100">
                                <h6 className="fw-bold">
                                    {item?.bin_capacity ? "Bin Capacity" : ""}
                                </h6>
                                <p>{item?.bin_capacity ? <p>{item?.bin_capacity}</p> : ""}</p>
                            </div>
                        )}


                        <a
                            href="#"
                            className="d-flex justify-content-center align-items-center btn"
                        >
                            Learn More <i className="fa-solid ps-1 fa-right-long"></i>
                        </a>


                    </div>


                </div>


            </Link>


        </div>

    );



    // Render product card for multi-section layouts (carousel items)
    const renderCarouselProductCard = (item, index) => (

        <div className="col mb-3 me-3 h-100" key={index}>

            <a
                href="https://wa.me/+919778412529?text=Hi"
                target="_blank"
                className="text-decoration-none"
            >

                <div className="card h-100" data-aos="fade-down">

                    <img src={item.image} className="img-fluid" alt="..." loading="lazy" />

                    <div className="card-body">

                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.sub_description}</p>

                        <Link
                            to={"/book"}
                            className="d-flex justify-content-center align-items-center btn"
                        >
                            Enquire Now <i className="fa-solid ps-1 fa-right-long"></i>
                        </Link>

                    </div>

                </div>

            </a>

        </div>

    );




    // Render attachment card
    const renderAttachmentCard = (item, index) => (
        <div className="w-100 mb-3 me-3 h-100" key={index}>
            <a
                href="https://wa.me/+919778412529?text=Hi"
                target="_blank"
                className="text-decoration-none d-block h-100"
            >
                <div className="card h-100" data-aos="fade-down">
                    <img src={item.image} className="img-fluid" alt="..." loading="lazy" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="flex-grow-1" style={{ textAlign: "justify" }}>{item.description}</p>
                        <a
                            href="https://wa.me/+919778412529?text=Hi"
                            target="_blank"
                            className="d-flex justify-content-center align-items-center btn btn-learn mt-auto"
                        >
                            Learn More <i className="fa-solid ps-1 fa-right-long"></i>
                        </a>
                    </div>
                </div>
            </a>
        </div>
    );




    // Render No Products UI
    const renderNoProducts = (showBackHome = true, title = "No Products Found", message = "We couldn't find any products in this category at the moment.") => (
        <div className="col-12 text-center py-5">
            <div className="d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
                <i className="fa-solid fa-box-open fa-4x mb-3 text-secondary" style={{ opacity: 0.5 }}></i>
                <h3 className="fw-bold mb-2 text-secondary">{title}</h3>
                <p className="text-muted mb-4">{message}</p>
                {showBackHome && (
                    <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill shadow-sm" style={{ backgroundColor: '#c3191c', border: 'none' }}>
                        <i className="fa-solid fa-home me-2"></i> Back to Home
                    </Link>
                )}
            </div>
        </div>
    );


    // Render Standard Layout (products + optional attachments)
    const renderStandardLayout = () => (
        <>
            {config.backgroundImage && (
                <section
                    className="productTopImage"
                    style={{ backgroundImage: `url("${config.backgroundImage}")` }}
                ></section>
            )}

            <main className="container" id="ForkLiftD">

                <section className="fork-s1">

                    <div className="row row1">
                        <h1>{config.title}</h1>
                        {config.description && <p>{config.description}</p>}
                    </div>

                    <div className="row">

                        <div className="col-md-12">

                            <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                                {isLoading || error ? (
                                    <LoadingSpinner />
                                ) : productData.length > 0 ? (
                                    productData.map((item, index) =>
                                        renderProductCard(item, index)
                                    )
                                ) : (
                                    renderNoProducts(true)
                                )}
                            </div>

                        </div>

                    </div>

                </section>


                {config.showAttachments && (

                    <>

                        <section className="fork-s2">

                            <div className="row seperation" data-aos="fade-up">
                                <h1>Attachments</h1>
                            </div>

                        </section>


                        <section className="fork-s1">

                            <div>

                                {attachmentLoading || attachmentError ? (

                                    <LoadingSpinner />

                                ) : productAttachments.length > 0 ? (

                                    <Carousel responsive={responsive} itemClass="h-100 d-flex">

                                        {productAttachments.map((item, index) =>
                                            renderAttachmentCard(item, index)
                                        )}

                                    </Carousel>

                                ) : (

                                    renderNoProducts(false, "No Attachments Found", "We couldn't find any attachments for this category.")

                                )}

                            </div>

                        </section>

                    </>

                )}

            </main>

        </>

    );



    // Render Simple Layout (products only, no banner)
    const renderSimpleLayout = () => (


        <main className="container" id="ForkLiftD">


            <section className="fork-s1">


                <div className="row row1">
                    <h1>{config.title}</h1>
                    {config.description && <p>{config.description}</p>}
                </div>


                <div className="row">

                    <div className="col-md-12">

                        <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center py-5">

                            {isLoading || error ? (
                                <LoadingSpinner />
                            ) : productData.length > 0 ? (
                                productData.map((item, index) => renderProductCard(item, index))
                            ) : (
                                renderNoProducts()
                            )}

                        </div>

                    </div>

                </div>

            </section>

        </main>

    );




    // Render Multi-Section Layout (multiple carousels)
    const renderMultiSectionLayout = () => {
        // Check if there are any products across all sections
        const hasAnyProducts = sectionData && Object.values(sectionData).some(arr => arr && arr.length > 0);

        if (!isLoading && !error && !hasAnyProducts) {
            return (
                <main className="container" id="ForkLiftD">
                    <section className="fork-s1">
                        <div className="row row1">
                            <h1>{config.title}</h1>
                            {config.description && <p>{config.description}</p>}
                        </div>
                        <div className="row">
                            {renderNoProducts(true)}
                        </div>
                    </section>
                </main>
            );
        }

        return (
            <main className="container" id="ForkLiftD">

                <section className="fork-s1">

                    <div className="row row1">
                        <h1>{config.title}</h1>
                        {config.description && <p>{config.description}</p>}
                    </div>


                    {config.sections.map((section, idx) => (

                        <React.Fragment key={idx}>

                            <div className="rock-seperation">
                                <h4 className="text-center fw-bold">{section.title}</h4>
                            </div>

                            <div className={idx === 0 ? "pt-3 p-5" : "p-5 pt-3"}>

                                {isLoading || error ? (
                                    <LoadingSpinner />

                                ) : sectionData[section.filterValue] &&
                                    sectionData[section.filterValue].length > 0 ? (
                                    <Carousel responsive={responsive} itemClass="h-100 d-flex">
                                        {sectionData[section.filterValue].map((item, index) =>
                                            renderCarouselProductCard(item, index)
                                        )}
                                    </Carousel>
                                ) : (
                                    renderNoProducts(false)
                                )}

                            </div>

                        </React.Fragment>

                    ))}

                </section>

            </main>
        );
    };



    // Render appropriate layout based on config
    return (

        <>

            {config.layoutType === "standard" && renderStandardLayout()}
            {config.layoutType === "simple" && renderSimpleLayout()}
            {config.layoutType === "multi-section" && renderMultiSectionLayout()}

        </>

    );


}

export default CategoryPage;
