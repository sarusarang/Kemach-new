import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { PostContact } from '../Services/AllApi'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Dealers from '../Components/Dealers'

function ContactUs() {


    useEffect(() => {

        AOS.init()


        window.scrollTo(0, 0)

    }, [])



    // React form data
    const { register, handleSubmit, formState, reset } = useForm()


    // Handle Form Errors
    const { errors } = formState



    // test form submit
    const SubmitContact = async (data) => {


        try {


            if (data) {

            
                const reqheader = {

                    "Content-Type": "multipart/form-data"

                }

                const formdata = new FormData()

                formdata.append("name", data.name)
                formdata.append("city", data.city)
                formdata.append("comments", data.comments)
                formdata.append("company", data.company)
                formdata.append("discussedWithTeam", data.discussedWithTeam)
                formdata.append("email", data.email)
                formdata.append("equipment", data.equipment)
                formdata.append("phone", data.phone)
                formdata.append("preferredContactMethod", data.preferredContactMethod)
                formdata.append("serialNumber", data.serialNumber)
                formdata.append("streetAddress", data.streetAddress)
                formdata.append("zipCode", data.zipCode)


                const res = await PostContact(formdata, reqheader)

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
            <main class="container" id="contact">


                <section class="section1">
                    <h2>Contact Kemach Customer Support</h2>
                    <p>If you have technical Kemach product concerns that your dealer can't resolve or other customer service-related issues, please complete the form below.</p>
                </section>


                <section class="section2 ">


                    <form onSubmit={handleSubmit(SubmitContact)} class="contact-form">

                        <div class="row py-4 ">


                            <div className="form-group d-flex flex-column col-12">
                                {[
                                    "Skid-Steer Loaders",
                                    "Mini Excavators",
                                    "Backhoe Loaders",
                                    "Rock Breakers",
                                    "Hydraulic Attachments & Drill Bits",
                                    "Electric Compressors",
                                    "Service & Parts",
                                ].map((label, index) => (
                                    <label key={index} data-aos="fade-up">
                                        <input
                                            type="checkbox"
                                            className="form-check-input me-2"
                                            value={label}
                                            {...register("equipment", { required: "Please select at least one equipment" })}
                                        /> {label}
                                    </label>
                                ))}
                            </div>
                            {errors.equipment && <p className="text-danger small">{errors.equipment.message}</p>}



                            <div className="mt-4 col-sm-6" data-aos="fade-up">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your First Name"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.firstName && <p className="text-danger small">{errors.firstName.message}</p>}
                            </div>



                            <div className="mt-4 col-sm-6" data-aos="fade-up">
                                <label htmlFor="company">Company / Agency / Owner</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Company Name"
                                    {...register("company", { required: "Company is required" })}
                                />
                                {errors.company && <p className="text-danger small">{errors.company.message}</p>}
                            </div>



                            <div className="mt-4 col-12" data-aos="fade-up">
                                <label htmlFor="streetAddress">Street Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Street Address"
                                    {...register("streetAddress", { required: "Street address is required" })}
                                />
                                {errors.streetAddress && <p className="text-danger small">{errors.streetAddress.message}</p>}
                            </div>



                            <div className="mt-4 col-sm-6" data-aos="fade-up">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your City"
                                    {...register("city", { required: "City is required" })}
                                />
                                {errors.city && <p className="text-danger small">{errors.city.message}</p>}
                            </div>



                            <div className="mt-4 col-sm-6" data-aos="fade-up">
                                <label htmlFor="zipCode">Zip Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Zip Code"
                                    {...register("zipCode", { required: "Zip code is required" })}
                                />
                                {errors.zipCode && <p className="text-danger small">{errors.zipCode.message}</p>}
                            </div>

                           

                            <div className="mt-4 col-sm-6" data-aos="fade-up">
                                <label htmlFor="phone">Mobile/Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    maxLength={10}
                                    placeholder="Enter Your Phone Number"
                                    {...register("phone", {
                                        required: "Phone number is required",
                                        pattern: { value: /^[0-9]{10}$/, message: "Enter a valid phone number (10 digits)" }
                                    })}
                                />
                                {errors.phone && <p className="text-danger small">{errors.phone.message}</p>}
                            </div>



                            <div className="mt-4 col-sm-6" data-aos="fade-up">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Your Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter a valid email address" }
                                    })}
                                />
                                {errors.email && <p className="text-danger small">{errors.email.message}</p>}
                            </div>



                            <div className="mt-4 col-12" data-aos="fade-up">
                                <label>Have you discussed this with our team?</label>
                                <select {...register("discussedWithTeam",{ required: "Select one" })} className="form-select">
                                    <option value="">-----------</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>



                            <div className="mt-4 col-12" data-aos="fade-up">
                                <label htmlFor="serialNumber">Machine Serial Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Machine Serial Number"
                                    {...register("serialNumber",{ required: "Enter a Serial Number" })}
                                />
                            </div>



                            <div className="mt-4 col-12" data-aos="fade-up">
                                <label>How would you like to be contacted?</label>
                                <select {...register("preferredContactMethod",{ required: "Select one" })} className="form-select">
                                    <option value="">-----------</option>
                                    <option value="whatsapp">WhatsApp</option>
                                    <option value="phone">Phone</option>
                                    <option value="email">Email</option>
                                </select>
                            </div>



                            <div className="mt-4 col-12" data-aos="fade-up">
                                <label htmlFor="comments">Comments</label>
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Enter any comments here"
                                    {...register("comments")}
                                />
                            </div>


                            <div class=" mt-4 col-12">
                                <button class="btn sbtn">Submit <i class="fa-regular fa-paper-plane ms-3"></i></button>
                            </div>


                        </div>

                    </form>


                </section>


                <Dealers />

            </main>
        </>


    )





}

export default ContactUs