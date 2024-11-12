import React from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";

const Navbar = styled.div`
    height: 100%;
    background-color: #fff ;

  .dropdown-toggle::after{
        margin-left: 1.25em;
        margin-top: 1em;
    }

    .dropdown-toggle:active{
        border: none;
    }

`;

const Navbar2 = () => {

    const profileDetails = JSON.parse(localStorage.getItem("profileDetails"));

    return (
        <>
            <Navbar className='bg-white ps-3 navBorder'>
                <div className="row w-100">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid p-0">
                            <Link to="/">
                                <div className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 130 42" fill="none">
                                        <path d="M43.1153 22.8663C43.1153 24.6943 42.2094 25.6075 40.3976 25.6059H33.1968V36.25H28.75V6.875H40.4074C42.2191 6.875 43.125 7.77539 43.125 9.57619L43.1153 22.8663ZM38.632 21.8348V10.6461H33.1968V21.8348H38.632Z" fill="#1A1A1A" />
                                        <path d="M60.6252 36.25H56.3639L55.4998 30.6817H50.1162L49.2546 36.25H45.0002V36.1757L50.5764 6.875H55.096L60.6252 36.25ZM54.8941 26.9056L52.7998 13.6701L50.6867 26.9056H54.8941Z" fill="#1A1A1A" />
                                        <path d="M78.125 7.0477L74.188 19.3173C73.7019 20.531 73.049 22.5772 72.2291 25.4556V36.25H67.7599V25.4556C67.537 24.4059 67.2456 23.3715 66.8874 22.3589C66.2167 20.491 65.8554 19.4772 65.8035 19.3173L61.8859 7.04291C61.8714 7.03092 61.8714 6.97335 61.8859 6.875H66.467L70.0249 19.6363L73.5609 6.875H78.125V7.0477Z" fill="#1A1A1A" />
                                        <path d="M94.375 33.5656C94.375 35.3552 93.5276 36.25 91.833 36.25H83.301C81.591 36.25 80.7351 35.3552 80.7336 33.5656V27.3283H84.8933V32.4716H90.1737V23.6316H83.1393C81.4646 23.6316 80.6265 22.752 80.625 20.9927V9.57619C80.625 7.77539 81.4631 6.875 83.1393 6.875H91.7821C93.5061 6.875 94.368 7.77539 94.368 9.57619L94.375 33.5656ZM90.1807 19.9204V10.6461H84.7731V19.9204H90.1807Z" fill="#1A1A1A" />
                                        <path d="M112.498 33.5656C112.498 35.3552 111.611 36.25 109.838 36.25H100.922C99.1299 36.25 98.2346 35.3552 98.2362 33.5656V27.3283H102.588V32.4716H108.112V23.6316H100.753C99.001 23.6316 98.125 22.752 98.125 20.9927V9.57619C98.125 7.77539 99.001 6.875 100.753 6.875H109.795C111.598 6.875 112.5 7.77539 112.5 9.57619L112.498 33.5656ZM108.11 19.9204V10.6461H102.455V19.9204H108.11Z" fill="#1A1A1A" />
                                        <path d="M129.99 33.5656C129.99 35.3552 129.104 36.25 127.331 36.25H118.424C116.632 36.25 115.737 35.3552 115.739 33.5656V27.3283H120.09V32.4716H125.61V23.6316H118.255C116.5 23.6316 115.623 22.752 115.625 20.9927V9.57619C115.625 7.77539 116.502 6.875 118.255 6.875H127.295C129.098 6.875 130 7.77539 130 9.57619L129.99 33.5656ZM125.601 19.9204V10.6461H119.947V19.9204H125.601Z" fill="#1A1A1A" />
                                        <path d="M9.08951 0.131373L20.7701 6.85634C20.9173 6.94209 21.0393 7.06574 21.1235 7.21466C21.2078 7.36357 21.2515 7.53242 21.2499 7.70393V21.5801C21.2498 21.7499 21.2054 21.9168 21.1211 22.0638C21.0369 22.2109 20.9159 22.333 20.7701 22.418L13.7099 26.7261C13.5635 26.8192 13.3948 26.8705 13.2218 26.8747C13.0487 26.8789 12.8778 26.8358 12.7271 26.7499C12.5764 26.664 12.4515 26.5386 12.3656 26.3869C12.2798 26.2352 12.2361 26.0629 12.2393 25.8882V13.9276C12.24 13.7569 12.196 13.5891 12.1118 13.4411C12.0275 13.2931 11.906 13.1702 11.7596 13.0849L0.48435 6.39139C0.337241 6.30673 0.214945 6.18427 0.129877 6.03647C0.0448081 5.88867 0 5.72079 0 5.54985C0 5.37891 0.0448081 5.21103 0.129877 5.06323C0.214945 4.91543 0.337241 4.79298 0.48435 4.70833L8.10831 0.141069C8.25586 0.0504768 8.4249 0.0017512 8.59759 4.63366e-05C8.77028 -0.00165853 8.94024 0.0437111 9.08951 0.131373Z" fill="url(#paint0_linear_455_367)" />
                                        <path d="M10.6248 15.3536V40.2714C10.6279 40.4445 10.583 40.6152 10.4951 40.7655C10.4071 40.9158 10.2792 41.0402 10.125 41.1254C9.97077 41.2106 9.79587 41.2536 9.61874 41.2497C9.4416 41.2459 9.26883 41.1954 9.1186 41.1036L1.11724 36.4227C0.967367 36.3381 0.842937 36.2164 0.756518 36.0699C0.670099 35.9234 0.624746 35.7571 0.625001 35.588V20.0394C0.624746 19.8702 0.670099 19.704 0.756518 19.5575C0.842937 19.4109 0.967367 19.2893 1.11724 19.2047L9.1186 14.5213C9.26883 14.4295 9.4416 14.3791 9.61874 14.3752C9.79587 14.3714 9.97077 14.4144 10.125 14.4996C10.2792 14.5848 10.4071 14.7091 10.4951 14.8594C10.583 15.0098 10.6279 15.1805 10.6248 15.3536Z" fill="url(#paint1_linear_455_367)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_455_367" x1="0.0165521" y1="13.436" x2="21.2595" y2="13.436" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F71D00" />
                                                <stop offset="1" stopColor="#BC041B" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_455_367" x1="0.632385" y1="27.8113" x2="10.6248" y2="27.8113" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F71D00" />
                                                <stop offset="1" stopColor="#BC041B" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item  mt-2 align-self-center">
                                        <a className='me-3 ms-3 font18 text-decoration-none text-black align-self-center' href="">Credit Scores Monitoring </a>
                                    </li>
                                    <li className="nav-item  mt-2 align-self-center">
                                        <a className='me-3 ms-3 font18 text-decoration-none text-black align-self-center' href="">Account Alerts</a>
                                    </li>
                                    <li className="nav-item  mt-2 align-self-center">
                                        <Link to="/paymenthistory" className='me-3 ms-3 font18 text-decoration-none text-black align-self-center' >Transaction History</Link>
                                    </li>
                                    <li className="nav-item  mt-2 align-self-center">
                                        <Link className='me-3 ms-3 font18 text-decoration-none text-black align-self-center' to="/contact">Contact</Link>
                                    </li>
                                    <li className="nav-item  mt-2 align-self-center"><input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /></li>
                                    <li className="nav-item  mt-2 align-self-center">
                                        <div className="p-2">
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
                                        </div>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </nav>
                </div>

                
            </Navbar>
        </>
    )
}

export default Navbar2
