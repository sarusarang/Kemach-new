import React from 'react'

import { Link } from 'react-router-dom'

function Footer() {


    return (


        <>


            <footer className="footer d-flex justify-content-center flex-column align-items-center">

                <div className="row r1 container ">

                    <div className="col-md-4">
                        <h4>Links</h4>

                        <ul className='p-0'>
                            <li><a> <Link to={'/'}>Home</Link></a></li>
                            <li><a> <Link to={'/service'}>Products & Services</Link></a></li>
                            <li><a> <Link to={'/locator'}>Distributor Location</Link></a></li>
                            <li><a> <Link to={'/contact'}>Contact Us</Link></a></li>
                        </ul>


                    </div>


                    <div className="col-md-4">

                        <h4>Address</h4>


                        <ul className='p-0'>

                            <li><a className='text-white'>Kemach Equipments Pvt Ltd</a></li>
                            <li><a className='text-white' >15/340A, Swalih Plaza,Karikkode,</a></li>
                            <li><a className='text-white'>Okkal Post, Ernakulam – 683550</a></li>
                            <li><a href="https://wa.me/+919778412529?text=Hi" target='_blank'> WhatsApp: +91 9778412529</a></li>
                            <li><a href="mailto:info@kemach.in" target='_blank'>Email Id: info@kemach.in </a></li>
                            
                        </ul>


                    </div>



                    <div className="col-md-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1526098.0854557562!2d74.82051070699859!3d11.256112812635035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65125d7864b43%3A0xc0f479528c814a41!2sBobcat%20Showroom!5e1!3m2!1sen!2sin!4v1726641568963!5m2!1sen!2sin"
                            width="100%" height="100%" style={{ border: 'none' }}  loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>


                </div>


                <div className="row r2 container d-flex justify-content-between">

                    <div className="row  d-flex justify-content-around align-items-center flex-md-column">


                        <div className=' col-md-6 social d-flex justify-content-between flex-column align-items-center'>
                        <h4>Follow Us</h4>
                        <ul className="d-flex gap-3 p-0">

                            <li><a href='https://www.facebook.com/kemachequipmentsin/' ><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href='https://www.instagram.com/kemachequipment/' ><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href='https://x.com/kemachequipmen' ><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href='https://www.linkedin.com/company/kemachequipments/?viewAsMember=true' ><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href='https://www.youtube.com/@Kemachequipments' ><i className="fa-brands fa-youtube"></i></a></li>
                            <li><a href='https://in.pinterest.com/kemachequipments/' ><i className="fa-brands fa-pinterest"></i></a></li>
                        </ul>
                        <div class="d-flex justify-content-center text-white align-items-center flex-column" >
                            <p class="text-center mt-2">© {new Date().getFullYear()} Kemach All Rights Reserved</p>
                            <p class="text-center "> <Link to={"/terms"} class=" text-white">Terms & Conditions</Link><span> I </span><Link to={"/policy"} class=" text-white">Privacy Policy</Link></p>
                        </div>
                        </div>
                    </div>

                    


                </div>


            </footer>

            <div className="copy d-flex justify-content-center align-items-center">
                <div className="row contain er">

                    <p className='mb-2'>Powered by : <a href="https://exmedia.in" target='_blank' className="ex">Exmedia.in </a></p>


                </div>
            </div>




        </>



    )


}

export default Footer