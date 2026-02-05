import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import SearchProducts from '../Hooks/Search';





function Header() {



    const { updateSearch } = SearchProducts()



    const navbarRef = useRef(null);



    // Close navbar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                const navbarToggler = document.querySelector('.navbar-toggler');
                const collapse = document.querySelector('.navbar-collapse');
                if (collapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);



    // Close navbar on link click
    const closeNavbarOnLinkClick = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const collapse = document.querySelector('.navbar-collapse');
        if (collapse.classList.contains('show')) {
            navbarToggler.click();
        }
    };




    return (



        <>

            <header className="top-header sticky-top">


                <div className="sub-div container">


                    <div className="left-side">

                        <ul className='mb-0 p-0'>

                            <li>
                                <a href="https://wa.me/+919778412529?text=Hi" target='_blank'><i className="fa-brands fa-square-whatsapp fa-xl"></i>+91 9778412529</a>
                            </li>

                            <li>
                                <a href="mailto:info@kemach.in" target='_blank'><i className="fa-solid fa-envelope"></i>info@kemach.in</a>
                            </li>

                        </ul>


                    </div>


                    <div className="right-side">

                        <ul className="mb-0">

                            <li><a href='https://www.facebook.com/kemachequipmentsin/' target='_blank'><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href='https://www.instagram.com/kemachequipment/' target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href='https://x.com/kemachequipmen' target='_blank'><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href='https://www.linkedin.com/company/kemachequipments/?viewAsMember=true' target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href='https://www.youtube.com/@Kemachequipments' target='_blank'><i className="fa-brands fa-youtube"></i></a></li>
                            <li><a href='https://in.pinterest.com/kemachequipments/' target='_blank'><i className="fa-brands fa-pinterest"></i></a></li>

                        </ul>

                    </div>


                </div>



                <nav className="navbar navbar-expand-lg navbar-dark sticky-top" ref={navbarRef}>


                    <div className="container">


                        <Link className="navbar-brand" to={'/'}>
                            <img src="/KEMACH LOGO web-01.png" width="200" alt='img-logo' />
                        </Link>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">


                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'} onClick={closeNavbarOnLinkClick}>Home</Link>
                                </li>


                                <div className="dropdown nav-item">


                                    <a className="nav-link dropdown-toggle" role="button" id="dropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Products & Services
                                    </a>


                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">


                                        {/* Bobcat Brand */}
                                        <li className="dropend">

                                            <a className="dropdown-item dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Bobcat
                                            </a>

                                            <ul className="dropdown-menu">
                                                <li><Link to={'/skid'} className="dropdown-item" onClick={closeNavbarOnLinkClick}>Skid-Steer Loaders</Link></li>
                                                <li><Link to={'/mini'} className="dropdown-item" onClick={closeNavbarOnLinkClick}>Mini Excavators</Link></li>
                                                <li><Link to={'/backhoe'} className="dropdown-item" onClick={closeNavbarOnLinkClick}>Backhoe Loaders</Link></li>
                                                <li><Link to={'/rock'} className="dropdown-item" onClick={closeNavbarOnLinkClick}>Rock Breakers</Link></li>
                                                <li><Link to={'/drills'} className="dropdown-item" onClick={closeNavbarOnLinkClick}>Hydraulic Attachments & Drill Bits</Link></li>
                                                <li><Link to={'/compressors'} className="dropdown-item" onClick={closeNavbarOnLinkClick}>Electric Compressors</Link></li>
                                                <li><Link to={'/service'} className="dropdown-item" onClick={closeNavbarOnLinkClick}>Service & Parts</Link></li>
                                            </ul>

                                        </li>


                                        {/* Gain Well Brand */}
                                        <li className="dropend">
                                            <a className="dropdown-item dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Gain Well
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><Link to={'/asphalt'} className="dropdown-item" onClick={closeNavbarOnLinkClick}>Asphalt</Link></li>
                                                <li><Link to={'/concrete'} className="dropdown-item" onClick={closeNavbarOnLinkClick}>Concrete</Link></li>
                                            </ul>
                                        </li>


                                        {/* Indo Farm Cranes Brand */}
                                        <li><Link to={'/indo-farm-crane'} className="dropdown-item" onClick={closeNavbarOnLinkClick}>Indo Farm Cranes</Link></li>

                                    </ul>


                                </div>



                                <li className="nav-item">
                                    <Link className="nav-link" to={'/locator'} onClick={closeNavbarOnLinkClick}>Store Location</Link>
                                </li>



                                <li className="nav-item">
                                    <Link to={'/contact'} className="nav-link active" onClick={closeNavbarOnLinkClick}>Contact Us</Link>
                                </li>


                            </ul>



                            <Link to={'/search'}>

                                <div className="search-box">
                                    <button className="btn-search"><i className="fas fa-search"></i></button>
                                    <input type="text" className="input-search" onChange={(e) => { updateSearch(e.target.value) }} placeholder="Type to Search..." />
                                </div>

                            </Link>


                        </div>


                    </div>


                </nav>


            </header>



        </>



    )




}

export default Header