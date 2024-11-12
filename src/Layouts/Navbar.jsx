import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Profile from '../Modals/Profile';
import PayPopUp from '../Modals/Login';
import toast from 'react-hot-toast';
import Login from '../Modals/Login';
import HashLoader from './Loader';

const Navbare = styled.div`
    height: 100%;
    background-color: #fff;

    .scanmebox{
        cursor: pointer;
        height: 43px;
        width: 180px;
        box-shadow:  0px 0px 9px 9px #f6f6f6;
    }

    .reddiv{
        height: 43px;
        width: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(133deg, #F71D00 , #BC041B);
    }

    .lineracolor{
        background: -webkit-linear-gradient(310deg,#F71D00, #BC041B);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }


    @media screen and (max-width: 1290px) and (min-width: 1121px) {
        .scanmebox {
            height: 40px;
            width: 175px;
        }

        .reddiv{
            height: 40px;
            width: 40px;
        }
    }


    @media screen and (max-width: 1120px) and (min-width: 1072px) {
        .scanmebox {
            height: 30px;
            width: 155px;
        }

        .reddiv{
            height: 30px;
            width: 30px;
        }

        .scannerLogo{
            width: 1.2rem;
        }
    }

    @media screen and (max-width: 1071px) and (min-width: 969px) {
        .scanmebox {
            height: 30px;
            width: 135px;
        }

        .reddiv{
            height: 30px;
            width: 30px;
        }

        .scannerLogo{
            width: 1.2rem;
        }
    }

    @media screen and (max-width: 968px) and (min-width: 3px) {
      .scanmebox {
        height: 28px;
        width: 115px;
      }
      
      .reddiv{
        height: 28px;
        width: 28px;
      }
      
      .scannerLogo{
        width: 1.2rem;
      }
      
      .nav-item  mt-2{
        align-self: end !important;
      }
    }
    
    
`;

const Navbar = ({ sendDataToParent }) => {

    // const [showLoader, setShowLoader] = useState(false);
    const [searchingLocation, setSearchingLocation] = useState(false);
    const token = localStorage.getItem("pay999-token");
    const profileDetails = JSON.parse(localStorage.getItem("profileDetails"));


    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        if (navigator.geolocation) {
            sendDataToParent(true);
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // console.log(position)
                    sendDataToParent(false);
                    setLoggedIn(true);
                    toast.success('Location granted!');
                    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
                    modal.show();
                },
                (error) => {
                    toast.error(error.message);
                    sendDataToParent(false);
                }
            );
        } else {
            toast.error('Geolocation is not supported by this browser.');
            sendDataToParent(false);
        }
    };



    return (
        <>

            <Navbare className='row bg-white'>
                <div className="row h-100 w-100">
                    <div className="col-md-1 col-sm-1 col-1"></div>
                    <div className="col-md-10 col-sm-10 col-10">
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid p-0">
                                <Link to="/" class="navbar-brand"><img src="./images/pay999.svg" alt="Pay999" className='pay999imggnav' height={45} /></Link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                                        <li class="nav-item  mt-2 align-self-center">
                                            <Link to="/paymenthistory" className='me-3 ms-3 font18 text-decoration-none text-black align-self-center' href="">Home</Link>
                                        </li>
                                        {
                                            token && (
                                                <li class="nav-item  mt-2 align-self-center">
                                                    <Link to="/paymenthistory" style={{ textDecoration: "none" }} className='me-3 ms-3 font18 text-decoration-none text-black align-self-center'>Payment History</Link>
                                                </li>
                                            )
                                        }

                                        <li class="nav-item  mt-2 align-self-center">
                                            <Link to="/about_us" className='me-3 ms-3 font18 text-decoration-none text-black align-self-center' href="">About Us</Link>
                                        </li>
                                        <li class="nav-item  mt-2 align-self-center">
                                            <Link className='me-3 ms-3 font18 text-decoration-none text-black align-self-center' to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                    {!token ?
                                        (
                                            <a className='text-decoration-none bg-white scanmebox d-flex' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                                                <div className="col-2 reddiv">
                                                    <svg className='scannerLogo' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                                        <path fill="white" d="M9.5 6.5v3h-3v-3zM11 5H5v6h6zm-1.5 9.5v3h-3v-3zM11 13H5v6h6zm6.5-6.5v3h-3v-3zM19 5h-6v6h6zm-6 8h1.5v1.5H13zm1.5 1.5H16V16h-1.5zM16 13h1.5v1.5H16zm-3 3h1.5v1.5H13zm1.5 1.5H16V19h-1.5zM16 16h1.5v1.5H16zm1.5-1.5H19V16h-1.5zm0 3H19V19h-1.5zM22 7h-2V4h-3V2h5zm0 15v-5h-2v3h-3v2zM2 22h5v-2H4v-3H2zM2 2v5h2V4h3V2z" />
                                                    </svg>
                                                </div>
                                                {/* Display "Searching For your location" text if geolocation search is in progress */}
                                                <span className='col-9 font20_a lineracolor text-center align-self-center'>{searchingLocation ? "Searching For your location" : "SCAN ME"}</span>
                                            </a>
                                        ) : (
                                            <div className="dropdown dropdown-sm">
                                                <a className="dropdown-item greyText d-flex" data-bs-toggle="offcanvas" data-bs-target="#profileModal" aria-controls="profileModal">

                                                    <div className="col-9 text-start d-flex flex-column">
                                                        <span className='font18'>{profileDetails?.name && profileDetails.name.charAt(0).toUpperCase() + profileDetails.name.slice(1)}</span>
                                                        <span className='font18'>{profileDetails?.mobile}</span>
                                                    </div>
                                                    <div className="col-3">
                                                        <img src="./images/user.svg" alt="" width={40} />
                                                    </div>

                                                </a>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </Navbare>



            <div className="offcanvas offcanvas-end  offcanvasbg" tabIndex="-1" id="profileModal" aria-labelledby="profileModalLabel">
                <div className="offcanvas-header ps-5">
                    <div className="d-flex flex-grow-1">
                        <div className="col-2 align-self-center">
                            <img src="./images/user.svg" alt="" width={40} />
                        </div>
                        <div className="col-10 text-start">
                            <div className="row">
                                <span className='font18'>{profileDetails?.name && profileDetails.name.charAt(0).toUpperCase() + profileDetails.name.slice(1)}</span>
                            </div>
                            <div className="row">
                                <span className='font18'>{profileDetails?.mobile}</span>
                            </div>
                        </div>
                    </div>
                    <a type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 17l5-5l-5-5" />
                            </svg>
                        </span>
                    </a>


                </div>
                <div className="offcanvas-body">
                    <Profile />
                </div>
            </div>



            {
                loggedIn && (
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <Login />
                                </div>
                                <div class="modal-footer"></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Navbar
