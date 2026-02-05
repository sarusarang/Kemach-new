import React from 'react'


function HomeSlider() {


    return (



        <>

            <section>




                <div id="carouselExampleAutoplaying" className="carousel slide main-carousel" data-bs-ride="carousel">

                    <div className="carousel-inner">

                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4"
                                aria-label="Slide 5"></button>
                        </div>


                        <div className="carousel-item active">
                            <img src="./Baner11.jpg" className="d-none w-100 d-md-block" alt="" />
                            <img src="./mobilebanner1.jpg" className="d-block w-100 d-md-none" alt="" />
                            <div className="carousel-caption d-block fade-up ">
                                {/* <div class="animated-background"></div>  */}
                                <h4 class="animated-text-new text-white fw-bolder">When the ground needs moving,
                                    we’ve got the power to get it done</h4>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <img src="./Baner21.jpg" className="d-none w-100 d-md-block" alt="" />
                            <img src="./mobilebanner2.jpg" className="d-block w-100 d-md-none" alt="" />
                            <div className="carousel-caption d-block fade-up">
                                {/* <div class="animated-background"></div> */}
                                <h4 class="animated-text-new text-white fw-bolder">Transform your worksite with
                                    force of our heavy-duty machines</h4>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <img src="./Baner3.jpg" className="d-none w-100 d-md-block" alt="" />
                            <img src="./mobilebanner3.jpg" className="d-block w-100 d-md-none" alt="" />
                            <div className="carousel-caption d-block fade-up">
                                {/* <div class="animated-background"></div> */}
                                <h4 class="animated-text-new text-white fw-bolder">Power and precision in every move,
                                    heavy equipment for your next big project</h4>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <img src="./Baner4.jpg" className="d-none w-100 d-md-block" alt="" />
                            <img src="./mobilebanner4.jpg" className="d-block w-100 d-md-none" alt="" />
                            <div className="carousel-caption d-block fade-up">
                                {/* <div class="animated-background"></div> */}
                                <h4 class="animated-text-new text-white fw-bolder">Paving the way to progress with
                                    industry-leading technology</h4>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <img src="./baner5.jpg" className="d-none w-100 d-md-block" alt="" />
                            <img src="./mobilebanner5.jpg" className="d-block w-100 d-md-none" alt="" />
                            <div className="carousel-caption d-block fade-up">
                                {/* <div class="animated-background"></div> */}
                                <h4 class="animated-text-new text-white fw-bolder">When power meets precision,
                                    heavy-duty heroes have landed</h4>
                            </div>
                        </div>


                    </div>
                </div>


            </section>


        </>

    )


}

export default HomeSlider