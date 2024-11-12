import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Swal from "sweetalert2";

const Container = styled.div`
    .boxshadow{
        border-radius: 10px;
        box-shadow: 3px 3px 3px 3px #eceff9;
    }

    .RsBtnSelected{
        background-image: linear-gradient(133deg, #F71D00 , #BC041B);
    }

    .creditCardOption{
        background-image: linear-gradient(1deg, #F71D00 , #BC041B);
    }

    .pay999imggProfile{
        height: 20px;
    }

    .font12{
        font-size: var(--fontSize_12);
    }


    .bgimg{
       background-image: url(./images/pay99bgImage.png);
       background-size: cover;
       background-repeat: no-repeat;
    }

    .CreditCardpadding{
        padding: 10% 5% 12% 5% !important;
    }

`;

const Profile = () => {


    const token = localStorage.getItem("pay999-token");
    const profileDetails = JSON.parse(localStorage.getItem("profileDetails"));


    const Logout = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do yo want to Logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then(async (result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("pay999-token")
                window.location.reload()
                toast.success("Logged out Successfully")
            }
        });
    }


    return (
        <>
            <Container>
                <div className="container-fluid p-0">
                    <div className='row ps-3 pe-3'>
                        <div className="bgimg ">
                            <div className="CreditCardpadding">
                                <div className="d-flex">
                                    <div className='flex-grow-1'><img src="./images/pay999_2nd.svg" alt="Pay999" className='pay999imggProfile' /></div>
                                    <div><span className='font11 font600Weight'>Main Wallet</span></div>
                                </div>
                                <div className="d-flex mt-3">
                                    <div><span className='font11'>Account Number</span></div>
                                </div>
                                <div className="d-flex">
                                    <div className='flex-grow-1'><span className='font14 font600Weight'>XXXX XXXX XX39</span></div>
                                    <div><span className='font18 font600Weight'>₹{profileDetails?.wallet_balance}</span></div>
                                </div>
                                <div className="d-flex mt-4">
                                    <div className='flex-grow-1'><Link to='/add_money' className='btn btn-sm creditCardOption font12 text-white'>Add Money</Link></div>
                                    <div><button className='btn btn-sm creditCardOption font12 text-white'>Withdraw</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card11 p-4">
                            <div className="bg-white boxshadow">
                                <p className='font18 font600Weight pt-3 ps-2'>Payment Settings</p>
                                <ul className='list-unstyled'>
                                    <li className='border-bottom p-2'>
                                        <div class="d-flex">
                                            <div class="p-1 flex-grow-1 d-flex">
                                                <div className='align-self-center me-2'><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm-5.99 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm2 2h2v2h-2z" /></svg></div>
                                                <div>
                                                    <div className="row"><span>QR codes</span></div>
                                                    <div className="row"><span>View your QR codes</span></div>
                                                </div>
                                            </div>
                                            <div class="p-2 align-self-center"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5" /></svg></div>
                                        </div>
                                    </li>
                                    <li className='border-bottom p-2'>
                                        <div class="d-flex">
                                            <div class="p-1 flex-grow-1 d-flex">
                                                <div className='align-self-center me-2'><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M8 17h1.85l.575-1.75h3.1L14.1 17H16l-3-8.45h-2zm2.9-3.2l1.1-3.3l1.075 3.3zM9 3V1h6v2zm3 19q-1.85 0-3.488-.712T5.65 19.35q-1.225-1.225-1.937-2.863T3 13q0-1.85.713-3.488T5.65 6.65q1.225-1.225 2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35q-1.225 1.225-2.863 1.938T12 22m0-2q2.9 0 4.95-2.05T19 13q0-2.9-2.05-4.95T12 6Q9.1 6 7.05 8.05T5 13q0 2.9 2.05 4.95T12 20m0-7" /></svg></div>
                                                <div>
                                                    <div className="row"><span>Transactions/History</span></div>
                                                    <div className="row"><span>Manage your Autopay settings</span></div>
                                                </div>
                                            </div>
                                            <div class="p-2 align-self-center"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5" /></svg></div>
                                        </div>
                                    </li>
                                    <li className='p-2'>
                                        <div class="d-flex">
                                            <div class="p-1 flex-grow-1 d-flex">
                                                <div className='align-self-center me-2'><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm-5.99 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm2 2h2v2h-2z" /></svg></div>
                                                <div>
                                                    <div className="row"><span>QR codes</span></div>
                                                    <div className="row"><span>View your QR codes</span></div>
                                                </div>
                                            </div>
                                            <div class="p-2 align-self-center"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5" /></svg></div>
                                        </div>
                                    </li>
                                    <li></li>
                                </ul>
                            </div>

                        </div>
                        <div className="card11 ps-4 pe-4">
                            <div className="bg-white boxshadow">
                                <ul className='list-unstyled'>
                                    <li className='border-bottom'>
                                        <div class="d-flex">
                                            <div class="p-1 flex-grow-1 d-flex">
                                                <div className='align-self-center me-2'><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z" /></svg></div>
                                                <div>
                                                    <div className="row"><span>About Pay999</span></div>
                                                    <div className="row pe-0"><span>Privacy policy, Terms & About Pay999</span></div>
                                                </div>
                                            </div>
                                            <div class="pe-1 align-self-center"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5" /></svg></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <p className='pt-2'><button className='col-12 btn btn-sm RsBtnSelected font18 text-white' onClick={Logout}>Log Out</button></p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Profile