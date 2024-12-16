import React, { useState, useEffect } from 'react'
import { Machineries } from '../Hooks/Machineries'
import SearchProducts from '../Hooks/Search';
import LoadingSpinner from '../Components/LoadingSpinner'
import { Link } from 'react-router-dom';




function Search() {



    const { data, error, isLoading, isSuccess } = Machineries()

    const { SearchKey } = SearchProducts()

    const [ProductData, SetProductData] = useState([])

    const [SearchData, SetSearchData] = useState([])




    // Items per page
    const itemsPerPage = 8;

    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(SearchData.length / itemsPerPage);

    // Get the data for the current page
    const currentData = SearchData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goToNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
        window.scrollTo(0, 0)
    };

    const goToPreviousPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
        window.scrollTo(0, 0)
    };



    useEffect(() => {


        if (data && isSuccess) {

            SetProductData(data)
        }


        window.scrollTo(0, 0)

    }, [data, isSuccess])



    // Search function
    useEffect(() => {

        const HandleSearch = () => {

            const SearchTerm = SearchKey.toLowerCase();


            if (SearchTerm.trim() === "") {
                SetSearchData(ProductData);
                return;
            }


            const res = ProductData.filter((item) => {
                return Object.values(item).some(value =>
                    value !== null && value !== undefined && value.toString().toLowerCase().includes(SearchTerm)
                );
            });

            SetSearchData(res);
        };

        HandleSearch()

        window.scrollTo(0, 0)

    }, [SearchKey, ProductData,]);






    return (




        <>


            <section className='container p-5'>


                <div className='row'>

                    <div className="col-md-12">

                        <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center ">



                            {isLoading || error ? (
                                <LoadingSpinner />
                            ) : (
                                <>

                                    {SearchData.length > 0 ? (
                                        <>

                                            {currentData.map((item, index) => (

                                                <div className="col mb-4" key={index}>
                                                    <Link to={`/pro/${item.id}`} className="text-decoration-none ">
                                                        <div className="card border shadow  h-100" data-aos="fade-down">
                                                            <img src={item.image} className="img-fluid" alt="..." loading="lazy" />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{item.name}</h5>
                                                                <p className="card-text" style={{ textAlign: "justify" }}>
                                                                    {item.sub_description}
                                                                </p>
                                                                <div className="d-flex justify-content-between w-100">
                                                                    <h6 className="fw-bold mb-0">
                                                                        {item.power ? "Horsepower" : ""}
                                                                    </h6>
                                                                    <p className="mb-0">
                                                                        {item.power ? <p>{item.power}hp</p> : ""}
                                                                    </p>
                                                                </div>
                                                                <div className="d-flex justify-content-between w-100">
                                                                    <h6 className="fw-bold">
                                                                        {item.weight ? "Operation Weight" : ""}
                                                                    </h6>
                                                                    <p>{item.weight ? <p>{item.weight}kg</p> : ""}</p>
                                                                </div>
                                                                <a href="#" className="d-flex justify-content-center align-items-center btn btn-learn">
                                                                    Learn More <i className="fa-solid ps-1 fa-right-long"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}



                                        </>


                                    ) : (
                                        <div  className='w-75 m-auto'>
                                            <img src="https://tradebharat.in/assets/catalogue/img/no-product-found.png" className='img-fluid' alt="img" loading='lazy' />
                                        </div>
                                    )}
                                </>
                            )}

                        </div>

                    </div>


                    <div className="d-flex justify-content-center align-items-center mt-4 pagination-container">
                        <button
                            className={`btn btn-pagination ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                        >
                            <i className="fa-solid fa-arrow-left"></i> Previous
                        </button>

                        <span className="mx-3 page-indicator">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            className={`btn btn-pagination ${currentPage === totalPages ? 'disabled' : ''}`}
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>


                </div>

            </section>



        </>







    )





}

export default Search