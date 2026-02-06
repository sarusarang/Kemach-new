import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import SearchProducts from '../Hooks/Search';

function Header() {
    const { updateSearch } = SearchProducts();
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSubMenu, setActiveSubMenu] = useState(null); // 'bobcat' | 'gainwell' | null

    // Handle Search
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        updateSearch(searchTerm);
        navigate('/search');
        setExpanded(false);
    };

    const closeNavbar = () => {
        setExpanded(false);
        setActiveSubMenu(null);
    };

    const toggleSubMenu = (menu, e) => {
        e.preventDefault();
        e.stopPropagation(); // Stop bubbling to prevent closing the parent dropdown
        setActiveSubMenu(prev => prev === menu ? null : menu);
    };

    return (
        <>
            <header className="top-header sticky-top">
                <div className="sub-div container">
                    <div className="left-side">
                        <ul className='mb-0 p-0'>
                            <li>
                                <a href="https://wa.me/+919778412529?text=Hi" target='_blank' rel="noreferrer">
                                    <i className="fa-brands fa-square-whatsapp fa-xl"></i>+91 9778412529
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@kemach.in" target='_blank' rel="noreferrer">
                                    <i className="fa-solid fa-envelope"></i>info@kemach.in
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <ul className="mb-0">
                            <li><a href='https://www.facebook.com/kemachequipmentsin/' target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href='https://www.instagram.com/kemachequipment/' target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href='https://x.com/kemachequipmen' target='_blank' rel="noreferrer"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href='https://www.linkedin.com/company/kemachequipments/?viewAsMember=true' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href='https://www.youtube.com/@Kemachequipments' target='_blank' rel="noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
                            <li><a href='https://in.pinterest.com/kemachequipments/' target='_blank' rel="noreferrer"><i className="fa-brands fa-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>

                <Navbar
                    expand="lg"
                    variant="dark"
                    sticky="top"
                    expanded={expanded}
                    onToggle={(expanded) => setExpanded(expanded)}
                    className="navbar-custom"
                >
                    <Container>
                        <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
                            <img src="/KEMACH LOGO web-01.png" width="200" alt='img-logo' />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbar-nav" />

                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="mx-auto mb-2 mb-lg-0">
                                <Nav.Link as={Link} to="/" onClick={closeNavbar}>Home</Nav.Link>

                                <NavDropdown title="Products & Services" id="products-dropdown">

                                    {/* Bobcat Nested Menu */}
                                    <div className="dropend">
                                        <div
                                            className={`dropdown-item dropdown-toggle ${activeSubMenu === 'bobcat' ? 'active-header' : ''}`}
                                            onClick={(e) => toggleSubMenu('bobcat', e)}
                                            role="button"
                                        >
                                            Bobcat
                                        </div>
                                        <div
                                            className={`dropdown-menu ${activeSubMenu === 'bobcat' ? 'show-mobile' : ''}`}
                                        >
                                            <NavDropdown.Item as={Link} to="/skid" onClick={closeNavbar}>Skid-Steer Loaders</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/mini" onClick={closeNavbar}>Mini Excavators</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/backhoe" onClick={closeNavbar}>Backhoe Loaders</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/rock" onClick={closeNavbar}>Rock Breakers</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/drills" onClick={closeNavbar}>Hydraulic Attachments & Drill Bits</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/compressors" onClick={closeNavbar}>Electric Compressors</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/service" onClick={closeNavbar}>Service & Parts</NavDropdown.Item>
                                        </div>
                                    </div>

                                    {/* Gain Well Nested Menu */}
                                    <div className="dropend">
                                        <div
                                            className={`dropdown-item dropdown-toggle ${activeSubMenu === 'gainwell' ? 'active-header' : ''}`}
                                            onClick={(e) => toggleSubMenu('gainwell', e)}
                                            role="button"
                                        >
                                            Gain Well
                                        </div>
                                        <div
                                            className={`dropdown-menu ${activeSubMenu === 'gainwell' ? 'show-mobile' : ''}`}
                                        >
                                            <NavDropdown.Item as={Link} to="/asphalt" onClick={closeNavbar}>Asphalt</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to="/concrete" onClick={closeNavbar}>Concrete</NavDropdown.Item>
                                        </div>
                                    </div>

                                    <NavDropdown.Item as={Link} to="/indo-farm-crane" onClick={closeNavbar}>Indo Farm Cranes</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link as={Link} to="/locator" onClick={closeNavbar}>Store Location</Nav.Link>
                                <Nav.Link as={Link} to="/contact" onClick={closeNavbar}>Contact Us</Nav.Link>
                            </Nav>

                            <Form className="d-flex search-box-container" onSubmit={handleSearchSubmit}>
                                <div className="search-box">
                                    <button className="btn-search" type="submit"><i className="fas fa-search"></i></button>
                                    <input
                                        type="text"
                                        className="input-search"
                                        placeholder="Type to Search..."
                                        value={searchTerm}
                                        onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            updateSearch(e.target.value); // Keep real-time update if needed
                                        }}
                                    />
                                </div>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default Header;