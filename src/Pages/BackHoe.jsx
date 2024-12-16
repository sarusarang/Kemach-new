import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Machineries } from "../Hooks/Machineries";
import { Attachments } from "../Hooks/Attachements";
import LoadingSpinner from "../Components/LoadingSpinner";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

function BackHoe() {
  const { data, error, isLoading, isSuccess } = Machineries();

  const {
    data: attchmentData,
    error: iserror,
    isLoading: loading,
    isSuccess: success,
  } = Attachments();

  const [ProductData, SetProductData] = useState([]);

  const [ProductAttachments, SetProductAttachments] = useState([]);

  useEffect(() => {
    AOS.init();

    if (data && isSuccess && attchmentData && success) {
      const res = data.filter((item) => item.category === "Backhoe_Loaders");

      const attach = attchmentData.filter(
        (item) => item.category === "Backhoe_Loaders"
      );

      SetProductAttachments(attach);

      SetProductData(res);
    }

    window.scrollTo(0, 0);
  }, [data, isSuccess, attchmentData, success]);

  // Slider Responsive
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <>
      <section
        className="productTopImage"
        style={{ backgroundImage: 'url("/backhostrip.jpg")' }}
      ></section>

      <main className="container" id="ForkLiftD">
        <section className="fork-s1">
          <div className="row row1">
            <h1>Backhoe Loaders</h1>
            <p>
              Bobcat® Backhoe Loaders are versatile machines and can easily be
              configured for different applications by coupling with Bobcat
              optional attachments. Whatever your job - digging, trenching,
              breaking or material handling (to name but a few) - Bobcat Backhoe
              Loaders have the power to get it done efficiently. Under the hood,
              they have the best-in-className 75 hp engine to take on tough jobs
              with powerful performance and high fuel economy.
            </p>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="row row2 gx-4 gx-lg-3 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center ">
                {isLoading || error ? (
                  <LoadingSpinner />
                ) : (
                  ProductData.map((item, index) => (
                    <div className="col mb-3 mt-3" key={index}>
                      <Link
                        to={`/pro/${item.id}`}
                        className="text-decoration-none "
                      >
                        <div className="card h-100" data-aos="fade-down">
                          <img
                            src={item.image}
                            className="img-fluid"
                            alt="..."
                            loading="lazy"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
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

                            <a
                              href="#"
                              className=" d-flex justify-content-center align-items-center btn "
                            >
                              Learn More{" "}
                              <i className="fa-solid ps-1 fa-right-long"></i>
                            </a>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="fork-s2">
          <div className="row seperation" data-aos="fade-up">
            <h1>Attachments</h1>
          </div>
        </section>

        <section className="fork-s1">
          <div>
            <Carousel responsive={responsive}>
              {loading || iserror ? (
                <LoadingSpinner />
              ) : (
                ProductAttachments.map((item, index) => (
                  <div className="col mb-3 me-3" key={index}>
                    <a
                      href="https://wa.me/+919778412529?text=Hi"
                      target="_blank"
                      className="text-decoration-none "
                    >
                      <div className="card h-100" data-aos="fade-down">
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt="..."
                          loading="lazy"
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>

                          <p style={{ textAlign: "justify" }}>
                            {item.description}
                          </p>

                          <a
                            href="https://wa.me/+919778412529?text=Hi"
                            target="_blank"
                            className=" d-flex justify-content-center align-items-center btn btn-learn"
                          >
                            Learn More{" "}
                            <i className="fa-solid ps-1 fa-right-long"></i>
                          </a>
                        </div>
                      </div>
                    </a>
                  </div>
                ))
              )}
            </Carousel>
          </div>
        </section>
      </main>
    </>
  );
}

export default BackHoe;
