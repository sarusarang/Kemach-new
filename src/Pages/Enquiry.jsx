import React, { useState, useEffect } from 'react'
import { NearestShowroom, Machineries } from '../Hooks/Machineries'
import LoadingSpinner from '../Components/LoadingSpinner'
import { useForm } from 'react-hook-form'
import { PostBookTest } from '../Services/AllApi'
import { toast } from 'sonner'

function Enquiry() {


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

        window.scrollTo(0, 0)

    }, [isSuccess, data, ShooroomData, success])



    // React form data
    const { register, handleSubmit, formState, reset } = useForm()


    // Handle Form Errors
    const { errors } = formState



    // test form submit
    const BookTest = async (data) => {


        try {


            if (data) {

                console.log(data);


                const reqheader = {

                    "Content-Type": "multipart/form-data"

                }

                const formdata = new FormData()

                formdata.append("name", data.name)
                formdata.append("email", data.email)
                formdata.append("phone", data.phone)
                formdata.append("machinery", data.machineModel)
                formdata.append("nearestshowroom", data.nearestShowroom)


                const res = await PostBookTest(formdata, reqheader)

                if (res.status >= 200 && res.status <= 300) {


                    toast.success("We Will Contact You Soon Thank You")

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

                        <section className="section1">
                            <h2>Book for Test Operation / Equipment Enquiry</h2>
                            <p>Submit the Form or Direct Contact</p>
                        </section>


                        <section className="section2 ">


                            <form onSubmit={handleSubmit(BookTest)} noValidate className="contact-form">


                                <div className="row py-4 ">


                                    <div className="mt-4 col-sm-4" data-aos="fade-up">
                                        <label htmlFor="name">Name</label>
                                        <input id="name" type="text" {...register("name", { required: { value: true, message: "Name is required" } })} className="form-control" placeholder="Enter Your Name" />
                                        {errors.name?.message && <p className='text-danger small mb-0'>{errors.name.message}</p>}
                                    </div>


                                    <div className="mt-4 col-sm-4" data-aos="fade-up">
                                        <label htmlFor="phone">Mobile/Phone Number</label>
                                        <input id="phone" type="tel" {...register("phone", {
                                            required: { value: true, message: "Mobile Number is required" },
                                            pattern: { value: /^[0-9]{10}$/, message: "Enter a valid phone number (10 digits)" }
                                        })} className="form-control" placeholder="Enter Your Phone Number" maxLength={10} />
                                        {errors.phone?.message && <p className='text-danger small mb-0'>{errors.phone.message}</p>}
                                    </div>


                                    <div className="mt-4 col-sm-4 " data-aos="fade-up">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" {...register("email", {
                                            required: { value: true, message: "Email is Required" },
                                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter a valid email address" }
                                        })} className="form-control" placeholder="Enter Your Email Id" />
                                        {errors.email?.message && <p className='text-danger small mb-0'>{errors.email.message}</p>}
                                    </div>


                                    <div className="mt-4 col-sm-6" data-aos="fade-up">
                                        <label htmlFor="Machine/Equipment Model">Machine/Equipment Model</label>
                                        <select {...register("machineModel", { required: { value: true, message: "Select a Machine" } })} className="form-select mb-0">
                                            <option value="" selected>-----------</option>
                                            {MachineData.map((item, index) => (
                                                <option key={index} value={item.name}>{item.name}</option>
                                            ))}
                                        </select>
                                        {errors.machineModel?.message && <p className="text-danger small">{errors.machineModel.message}</p>}
                                    </div>



                                    <div className="mt-4 col-sm-6" data-aos="fade-up">
                                        <label htmlFor="Nearest Showroom">Nearest Showroom</label>
                                        <select {...register("nearestShowroom", { required: { value: true, message: "Select a Showroom" } })} className="form-select mb-0">
                                            <option value="" selected>-----------</option>
                                            {NearestData.map((item, index) => (
                                                <option key={index} value={item.address}>{item.address} {item.name}</option>
                                            ))}
                                        </select>
                                        {errors.nearestShowroom?.message && <p className="text-danger small mb-0">{errors.nearestShowroom.message}</p>}
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

export default Enquiry