import React, { useState, useEffect } from 'react'
import { PostService } from '../Services/AllApi'
import LoadingSpinner from '../Components/LoadingSpinner'
import { useForm } from 'react-hook-form'
import { NearestShowroom, Machineries } from '../Hooks/Machineries'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { toast } from 'sonner'




function Booking() {


    // Meachine data
    const { data, isLoading, error, isSuccess } = Machineries()

    // Nearest Showroom Data
    const { data: ShooroomData, error: iserror, isLoading: loading, isSuccess: success } = NearestShowroom()


    const [MachineData, SetMachineData] = useState([])

    const [NearestData, SetNearestData] = useState([])




    useEffect(() => {

        if (isSuccess && data && ShooroomData && success) {


            SetMachineData(data)

            SetNearestData(ShooroomData)

        }

        AOS.init()

        window.scrollTo(0, 0)

    }, [isSuccess, data, ShooroomData, success])





    // React form data
    const { register, handleSubmit, formState, reset } = useForm()


    // Handle Form Errors
    const { errors } = formState



    // test form submit
    const BookService = async (data) => {


        try {


            if (data) {


                const reqheader = {

                    "Content-Type": "multipart/form-data"

                }

                const formdata = new FormData()


                formdata.append("interested_date", data.interestedDate)
                formdata.append("interested_time", data.interestedTime)
                formdata.append("machinery", data.machineModel)
                formdata.append("name", data.name)
                formdata.append("phone", data.phoneNumber)
                formdata.append("register", data.registerNumber)
                formdata.append("nearestshowroom", data.serviceCenter)
                formdata.append("service_type", data.serviceType)


                const res = await PostService(formdata, reqheader)

                if (res.status >= 200 && res.status <= 300) {


                    toast.success("We Will Be In Touch Soon Thank You")

                    reset()


                } else {

                    console.log(res);


                }


            }

        }
        catch (err) {

            console.log(err);

        }

    }


    return (

        <>

            {

                isLoading || loading || error || iserror ?

                    <LoadingSpinner />

                    :

                    <main className="container p-5" id="contact">
                        <section className="section1  text-capitalize">
                            <h2>Contact our respective Area Sales Engineer / Manager </h2>
                        </section>
                        <main className="" id="ForkLiftD">

                            <section className="fork-s2">

                                <div className="row serv3 gx-4 gx-lg-3 row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-xl-3 justify-content-center">
                                    <div className="col mb-3">
                                        <div className="card serv-card h-100" data-aos="zoom-in-up">
                                            <div className="card-body">
                                                <h5 className="card-title">Ernakulam
                                                </h5>
                                                <p className="card-text">+91 75919 14141</p>
                                                <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal1">enquire now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <div className="card serv-card h-100" data-aos="zoom-in-up">
                                            <div className="card-body">
                                                <h5 className="card-title">Thrissur </h5>
                                                <p className="card-text"> +91 93883 46500
                                                </p>
                                                <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal2">enquire now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <div className="card serv-card h-100" data-aos="zoom-in-up">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Palakkad
                                                </h5>
                                                <p className="card-text">+91 93429 87602</p>
                                                <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal3">enquire now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <div className="card serv-card h-100" data-aos="zoom-in-up">
                                            <div className="card-body">
                                                <h5 className="card-title">Territory Manager <br />
                                                    (Ernakulam I Palakkad I Thrissur )

                                                </h5>
                                                <p className="card-text">+91 93883 46500</p>
                                                <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal4">enquire now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <div className="card serv-card h-100" data-aos="zoom-in-up">
                                            <div className="card-body">
                                                <h5 className="card-title">Malappuram
                                                </h5>
                                                <p className="card-text">+91 93429 87601</p>
                                                <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal5">enquire now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <div className="card serv-card h-100" data-aos="zoom-in-up">
                                            <div className="card-body">
                                                <h5 className="card-title">Calicut
                                                </h5>
                                                <p className="card-text">+91 93883 46100</p>
                                                <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal6">enquire now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <div className="card serv-card h-100" data-aos="zoom-in-up">
                                            <div className="card-body">
                                                <h5 className="card-title">Wayanad
                                                </h5>
                                                <p className="card-text">+91 93429 44897</p>
                                                <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal7">enquire now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <div className="card serv-card h-100" data-aos="zoom-in-up">
                                            <div className="card-body">
                                                <h5 className="card-title"> Kannur /
                                                    Kasargod
                                                </h5>
                                                <p className="card-text">+91 93885 50450</p>
                                                <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal8">enquire now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <div className="card serv-card h-100" data-aos="zoom-in-up">
                                            <div className="card-body">
                                                <h5 className="card-title">General Manager
                                                </h5>
                                                <p className="card-text">+91 93883 46100</p>
                                                <a href="#" className="btn " data-bs-toggle="modal" data-bs-target="#ServiceModal9">enquire now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade servmodal" id="ServiceModal1" tabindex="-1" aria-labelledby="ServiceModal1Label"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title " id="ServiceModal1Label">enquire now</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <a target="_blank" href="https://wa.me/+917591914141"><i className="pe-2 fa-brands fa-whatsapp"></i>+91
                                                    75919 14141</a>
                                                <a target="_blank" href="tel:+917591914141"><i className="pe-2 fa-solid fa-phone"></i>+91 75919 14141</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade servmodal" id="ServiceModal2" tabindex="-1" aria-labelledby="ServiceModal2Label"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title " id="ServiceModal2Label">enquire now</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <a target="_blank" href="https://wa.me/+919388346500"><i className="pe-2 fa-brands fa-whatsapp"></i>+91 93883 46500</a>
                                                <a target="_blank" href="tel:+919388346500"><i className="pe-2 fa-solid fa-phone"></i>+91 93883 46500</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade servmodal" id="ServiceModal3" tabindex="-1" aria-labelledby="ServiceModal3Label"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title " id="ServiceModal3Label">enquire now</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <a target="_blank" href="https://wa.me/+919342987602"><i className="pe-2 fa-brands fa-whatsapp"></i>+91
                                                    93429 87602</a>
                                                <a target="_blank" href="tel:+919342987602"><i className="pe-2 fa-solid fa-phone"></i>+91 93429 87602</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade servmodal" id="ServiceModal4" tabindex="-1" aria-labelledby="ServiceModal4Label"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title " id="ServiceModal4Label">enquire now</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <a target="_blank" href="https://wa.me/+919388346500"><i className="pe-2 fa-brands fa-whatsapp"></i>+91 93883 46500</a>
                                                <a target="_blank" href="tel:+919388346500"><i className="pe-2 fa-solid fa-phone"></i>+91 93883 46500</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade servmodal" id="ServiceModal5" tabindex="-1" aria-labelledby="ServiceModal5Label"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title " id="ServiceModal5Label">enquire now</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <a target="_blank" href="https://wa.me/+919342987601"><i className="pe-2 fa-brands fa-whatsapp"></i>+91
                                                    93429 87601</a>
                                                <a target="_blank" href="tel:+919342987601"><i className="pe-2 fa-solid fa-phone"></i>+91 93429 87601</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade servmodal" id="ServiceModal6" tabindex="-1" aria-labelledby="ServiceModal6Label"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title " id="ServiceModal6Label">enquire now</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <a target="_blank" href="https://wa.me/+919388346100"><i className="pe-2 fa-brands fa-whatsapp"></i>+91
                                                    93883 46100</a>
                                                <a target="_blank" href="tel:+919388346100"><i className="pe-2 fa-solid fa-phone"></i>+91 93883 46100</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade servmodal" id="ServiceModal7" tabindex="-1" aria-labelledby="ServiceModal7Label"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title " id="ServiceModal7Label">enquire now</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <a target="_blank" href="https://wa.me/+919342944897"><i className="pe-2 fa-brands fa-whatsapp"></i>+91
                                                    93429 44897</a>
                                                <a target="_blank" href="tel:+919342944897"><i className="pe-2 fa-solid fa-phone"></i>+91 93429 44897</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade servmodal" id="ServiceModal8" tabindex="-1" aria-labelledby="ServiceModal8Label"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title " id="ServiceModal8Label">enquire now</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <a target="_blank" href="https://wa.me/+919388550450"><i className="pe-2 fa-brands fa-whatsapp"></i>+91
                                                    93885 50450</a>
                                                <a target="_blank" href="tel:+919388550450"><i className="pe-2 fa-solid fa-phone"></i>+91 93885 50450</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade servmodal" id="ServiceModal9" tabindex="-1" aria-labelledby="ServiceModal9Label"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title " id="ServiceModal9Label">enquire now</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <a target="_blank" href="https://wa.me/+919388346100"><i className="pe-2 fa-brands fa-whatsapp"></i>+91
                                                    93883 46100</a>
                                                <a target="_blank" href="tel:+919388346100"><i className="pe-2 fa-solid fa-phone"></i>+91 93883 46100</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </main>

                        <section className="section2 ">


                            <section className="section1  text-capitalize">
                                <h2>Book a Service appointment</h2>
                            </section>


                            <form className="contact-form" onSubmit={handleSubmit(BookService)}>


                                <div className="row py-4 ">


                                    <div className="mt-4 col-sm-6" data-aos="fade-up">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control"
                                            placeholder="Enter Your Name"
                                            {...register("name", { required: "Name is required" })}
                                        />
                                        {errors.name && <p className="text-danger small">{errors.name.message}</p>}
                                    </div>



                                    <div className="mt-4 col-sm-6" data-aos="fade-up">
                                        <label htmlFor="phoneNumber">Mobile/Phone Number</label>
                                        <input
                                            type="text"
                                            id="phoneNumber"
                                            className="form-control"
                                            placeholder="Enter Mobile/Phone Number"
                                            maxLength={10}
                                            {...register("phoneNumber", {
                                                required: "Phone number is required",
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: "Enter a valid 10-digit phone number"
                                                }
                                            })}
                                        />
                                        {errors.phoneNumber && <p className="text-danger small">{errors.phoneNumber.message}</p>}
                                    </div>


                                    <div className="mt-4 col-sm-6" data-aos="fade-up">
                                        <label htmlFor="interestedTime mb-0">Machine/Equipment Model</label>
                                        <select {...register("machineModel", { required: { value: true, message: "Select a Machine" } })} className="form-select mb-0">
                                            <option value="" selected>-----------</option>
                                            {MachineData.map((item, index) => (
                                                <option key={index} value={item.name}>{item.name}</option>
                                            ))}
                                        </select>
                                        {errors.machineModel?.message && <p className="text-danger small">{errors.machineModel.message}</p>}
                                    </div>


                                    <div className="mt-4 col-sm-6" data-aos="fade-up">
                                        <label htmlFor="registerNumber">Register Number</label>
                                        <input
                                            type="text"
                                            id="registerNumber"
                                            className="form-control"
                                            placeholder="Enter Register Number"
                                            {...register("registerNumber", { required: "Register number is required" })}
                                        />
                                        {errors.registerNumber && <p className="text-danger small">{errors.registerNumber.message}</p>}
                                    </div>


                                    <div className="mt-4 col-sm-6" data-aos="fade-up">
                                        <label htmlFor="serviceType">Service Type</label>
                                        <select
                                            id="serviceType"
                                            className="form-select"
                                            {...register("serviceType", { required: "Service type is required" })}
                                        >
                                            <option value="">-----------</option>
                                            <option value="Free Service">Free Service</option>
                                            <option value="Paid Service">Paid Service</option>
                                        </select>
                                        {errors.serviceType && <p className="text-danger small">{errors.serviceType.message}</p>}
                                    </div>



                                    <div className="mt-4 col-sm-6" data-aos="fade-up">
                                        <label htmlFor="interestedTime">Service Center</label>
                                        <select {...register("serviceCenter", { required: { value: true, message: "Select a Showroom" } })} className="form-select mb-0">
                                            <option value="" selected>-----------</option>
                                            {NearestData.map((item, index) => (
                                                <option key={index} value={item.address}>{item.place} {item.address} {item.name}</option>
                                            ))}
                                        </select>
                                        {errors.nearestShowroom?.message && <p className="text-danger small mb-0">{errors.nearestShowroom.message}</p>}
                                    </div>



                                    <div className="mt-4 col-sm-6" data-aos="fade-up">
                                        <label htmlFor="interestedDate">Service Planning Interested Date</label>
                                        <input
                                            type="date"
                                            id="interestedDate"
                                            className="form-control"
                                            placeholder="Select a date"
                                            {...register("interestedDate", { required: "Date is required" })}
                                        />
                                        {errors.interestedDate && <p className="text-danger small">{errors.interestedDate.message}</p>}
                                    </div>


                                    <div className="mt-4 col-sm-6" data-aos="fade-up ps-0">
                                        <label htmlFor="interestedTime">Interested Time</label>
                                        <input
                                            type="time"
                                            id="interestedTime"
                                            className="form-control"
                                            placeholder="Select a time"
                                            min="09:00"
                                            max="19:00"
                                            {...register("interestedTime", {
                                                required: "Time is required",
                                                validate: value => {
                                                    const time = value.split(":");
                                                    const hours = parseInt(time[0], 10);
                                                    const minutes = parseInt(time[1], 10);
                                                    return (hours >= 9 && hours < 19) || (hours === 19 && minutes === 0) || "Time should be between 9 AM and 7 PM";
                                                }
                                            })}
                                        />
                                        {errors.interestedTime && <p className="text-danger small">{errors.interestedTime.message}</p>}
                                    </div>



                                    <div className=" mt-4 col-12" >
                                        <button className="btn sbtn">Submit <i className="fa-regular fa-paper-plane ms-3"></i></button>
                                    </div>


                                </div>


                            </form>


                        </section>

                    </main>

            }

        </>


    )


}

export default Booking