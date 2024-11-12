import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Header from '../Layouts/Header';
import Login from '../Modals/Login';
import toast from 'react-hot-toast';
import { findNumber, providerLis, providerListWithout, serviceLists } from '../utils/Constants';
import { Link, useNavigate } from "react-router-dom";
import PayPopUp from '../Modals/PayPopUp';
import Footer from '../Layouts/Footer';
import Profile from '../Modals/Profile';
import HashLoader from '../Layouts/Loader';
import Navbar from '../Layouts/Navbar';

const Container = styled.div`
  
  .indiaMostText{
    text-shadow: 4px 4px #e0dddd
  }

  .pink2ndRow{
    background-color: var(--pinkBg);
  }

  .rechargebtnsuccess{
    background-image: linear-gradient(133deg, #F71D00 , #BC041B);
  }

  .form-control::placeholder{
    color: var(--grey5Normal);
  }

  .form-control, .form-select{
    border-radius: 0px ;
    box-shadow: none;
    border-color: #E4E7EA;
  }

  .form-check-input{
    box-shadow: none;
  }

  .form-check-input:checked{
    background-color: var(--darkred_FontColor);
    border-color: var(--darkred_FontColor);
  }

  .greyBox{
    border-radius: 10px;
    background-color: var(--greyBoxBg);
  }

  .greyBox:hover{
    transform: scale(1.05);
    box-shadow: 3px 3px 3px 3px #eceff9;
  }

  .widthcircle{
    position: relative;
    width: 99px;
    height: 99px;
  }

  .whiteCircleimng{
    position: absolute;
    /* top: 10px; */
  }

  .greeyy2boxes{
    background-color: var(--greyBoxBg);
    border-radius: 5px;
    width: fit-content;
    height: fit-content;
    box-shadow:  4px 4px 4px 0px #f0f0f0;
  }

  .white6thRow, .white7thRow{
    background-color: var(--greyDivBg);
  }

  .greeyy3boxes{
    width: fit-content;
    border-radius: 120px 10px;
    background-color: var(--greyBoxBg);
    box-shadow: 4px 4px 14px 0px var(--greyBoxeShadow);
  }
  
  .greycirclediv{
    width: fit-content;
    height: fit-content;
    margin-left: -15%;
    margin-top: -12%;
  }

  .greycircle{
    width: 110px;
    height: 110px;
    background-color: #D9D9D9;
    border-radius: 50%;
  }

  .imgpay999{
    height: 40px;
    width: fit-content;
  }

  .card1{
    border-radius: 10px;
  }
  .modal-footer{
    padding: 5px !important;
    background-color: #F71D00;
    border-top: 10px solid #BC041B;
  }

  .image{
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
    object-fit: contain;
}

`;

// const Navbare = styled.div`
//     height: 100%;
//     background-color: #fff;

//     .scanmebox{
//         cursor: pointer;
//         height: 43px;
//         width: 180px;
//         box-shadow:  0px 0px 9px 9px #f6f6f6;
//     }

//     .reddiv{
//         height: 43px;
//         width: 45px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background-image: linear-gradient(133deg, #F71D00 , #BC041B);
//     }

//     .lineracolor{
//         background: -webkit-linear-gradient(310deg,#F71D00, #BC041B);
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//     }


//     @media screen and (max-width: 1290px) and (min-width: 1121px) {
//         .scanmebox {
//             height: 40px;
//             width: 175px;
//         }

//         .reddiv{
//             height: 40px;
//             width: 40px;
//         }
//     }


//     @media screen and (max-width: 1120px) and (min-width: 1072px) {
//         .scanmebox {
//             height: 30px;
//             width: 155px;
//         }

//         .reddiv{
//             height: 30px;
//             width: 30px;
//         }

//         .scannerLogo{
//             width: 1.2rem;
//         }
//     }

//     @media screen and (max-width: 1071px) and (min-width: 969px) {
//         .scanmebox {
//             height: 30px;
//             width: 135px;
//         }

//         .reddiv{
//             height: 30px;
//             width: 30px;
//         }

//         .scannerLogo{
//             width: 1.2rem;
//         }
//     }

//     @media screen and (max-width: 968px) and (min-width: 3px) {
//       .scanmebox {
//         height: 28px;
//         width: 115px;
//       }

//       .reddiv{
//         height: 28px;
//         width: 28px;
//       }

//       .scannerLogo{
//         width: 1.2rem;
//       }

//       .nav-item  mt-2{
//         align-self: end !important;
//       }
//     }


// `;


const HomePage = () => {

  const navigate = useNavigate();

  const [serviceList, setServiceList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const token = localStorage.getItem("pay999-token");
  // const profileDetails = JSON.parse(localStorage.getItem("profileDetails"));

  const handleDataFromChild = (data) => {
    setShowLoader(data);
  };



  const openModal = () => {
    if (number !== "" && amount !== "" && token !== "") {
      setIsModalOpen(true);
    } else {
      window.location.replace('https://play.google.com/store/apps/details?id=com.pay999');

    }
  }

  const handlePopupClose = () => {
    setIsModalOpen(false);
  };

  // const closeModal = () => setIsModalOpen(false);

  const [providerList, setProviderList] = useState([]);

  useEffect(() => {
    providerListSection();
  }, [])

  // Sign Up UseState
  const [number, setNumber] = useState("");
  const [numbeValidError, setNumberValidError] = useState(false);
  const [numberIsRequiredError, setNumberIsRequiredlError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [timerID, setTimerID] = useState(null);

  const [providerName, setProviderName] = useState('');
  // console.log(providerName);

  const [providerID, setProviderID] = useState('');

  const [amount, setAmount] = useState("")
  const [amountValidError, setAmountValidError] = useState(false);
  const [amountIsRequiredError, setAmountIsRequiredlError] = useState(false);


  // Handle Email
  const handleNumber = (value) => {
    clearTimeout(timerID);
    const id = setTimeout(() => numberFind(value), 2000);
    setTimerID(id);
    setNumber(value);
    const rex = /^[6-9]\d{9}$/;
    if (value === "") {
      setNumberValidError(false);
      setNumberIsRequiredlError(true);
    } else if (rex.test(value) === false) {
      setNumberValidError(true);
      setNumberIsRequiredlError(false);
    } else {
      setNumberValidError(false);
      setNumberIsRequiredlError(false);
    }
  };

  // Handle Email
  const handleAmount = (value) => {
    setAmount(value);
    const rex = /^[1-9][0-9]{1,4}$/;
    if (value === "") {
      setAmountValidError(false);
      setAmountIsRequiredlError(true);
    } else if (rex.test(value) === false) {
      setAmountValidError(true);
      setAmountIsRequiredlError(false);
    } else {
      setAmountValidError(false);
      setAmountIsRequiredlError(false);
    }
  };

  const numberFind = async (value) => {
    if (number === "" || !number) {
      setNumberIsRequiredlError(true);
    }

    if ((number !== "")) {
      const formData = new FormData();
      formData.append("number", value);
      formData.append("api_token", token);
      try {
        const response = await findNumber(formData);
        // console.log(response, "find number");
        if (response?.status === 200) {
          toast.success(response?.data?.message);
          setProviderName(response?.data?.data[0]?.provider_name);
          setProviderID(response?.data?.data[0]?.provider_id)
        }
      } catch (err) {
        console.log(err)
      }
    }

  };

  const providerListSection = async () => {
    const formData = new FormData();
    setShowLoader(true);
    try {
      const response = await providerListWithout(formData);
      // console.log(response, "provider List withOut Auth");
      if (response?.status === 200) {
        setProviderList(response?.data?.data);
        setShowLoader(false)
      }
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    service();
  }, []);

  const service = async () => {
    setShowLoader(true)
    if ((token !== "")) {
      const formData = new FormData();
      formData.append("api_token", token);
      try {
        const response = await serviceLists(formData);
        // console.log(response, "Service List");
        setServiceList(response?.data?.data);
        setShowLoader(false)
      } catch (err) {
        console.log(err)
        setShowLoader(false)
      }
    }
  };

  const onService = (id, name) => {
    // setServiceId(id)
    if (id === 1 || id === 3) {
      navigate(`/mobilerecharge/${id}/${name}`)
    } else {
      navigate(`/otherServices/${id}/${name}`)
    }
  }




  const handleLogin = () => {
    if (navigator.geolocation) {
      setShowLoader(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setShowLoader(false);
          toast.success('Location granted!');
          setLoggedIn(true);
          const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
          modal.show();
        },
        (error) => {
          toast.error(error.message);
          setShowLoader(false);
        }
      );
    } else {
      toast.error('Geolocation is not supported by this browser.');
      setShowLoader(false);
    }
  };






  return (
    <>
      {showLoader && <HashLoader />}
      <Container>
        <div className="container-fluid">
          <Header />
          <Navbar sendDataToParent={handleDataFromChild} />
          <div className="row pink2ndRow">
            <div className="col-md-1 col-sm-1 col-1"></div>
            <div className="col-md-10 col-sm-10 col-10">
              <div className="row pt-5 pb-5 pink2nd1stRow">
                <div className="col-lg-7 col-sm-12 align-self-center">
                  <div className="row">
                    <span className='font65 font900Weight upperCase fontLineHeight75 indiaMostText'><span className='darkBlueFont'>India's Most-</span><span className='darkRedFont'>loved Payments App</span></span><br />
                  </div>
                  <div className="row me-2 pe-5 pt-3 pink2nd1st1stRow">
                    <span className='textBlueFont font20_d upperCase'>Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</span>
                  </div>
                  <div className="row pt-3 gap-2">
                    <Link to="https://play.google.com/store/apps/details?id=com.pay999" className="col-lg-3 col-md-4 col-sm-4 col-4 googleappstrorepadding pe-0"><img src="./images/googlePlay.svg" alt="" className='img-fluid' /></Link>
                    <div className="col-lg-3 col-md-4 col-sm-4 col-4 googleappstrorepadding ps-0"><img src="./images/AppStore.svg" alt="" className='img-fluid' /></div>
                  </div>
                </div>
                <div className='col-lg-5 col-md-12 col-sm-12 col-12 bg-white text-center p-5 rounded pink2nd2ndRow'>
                  <div className='text-center'>
                    <span className='font17a upperCase'>Mobile Recharge or Bill Payment</span>
                    <div className='d-flex justify-content-center p-3 pink2nd2ndRowdiv'>
                    </div>
                    <div className='row mt-2'>
                      <div className='col-md-6'>
                        <input className="form-control form-control-sm font16" type="text" placeholder="Enter Mobile Number" aria-label=".form-control-sm example" value={number} onChange={(e) => handleNumber(e.target.value)} maxLength="10" />
                        {numberIsRequiredError && (
                          <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                            Number is required
                          </div>
                        )}
                        {numbeValidError && (
                          <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                            Please enter valid Number
                          </div>
                        )}
                      </div>
                      <div className='col-md-6 formcolsInput'>
                        <select onChange={(e) => setProviderName(e.target.value)} className="form-select form-select-sm font16" aria-label=".form-select-sm example">
                          <option selected>{providerName === "" ? "Open this select menu" : providerName}</option>
                          {providerList?.length !== 0 ? (
                            providerList?.slice(0, 5)?.map((provider) => {
                              return (
                                <option value={provider?.provider_name}>{provider?.provider_name}</option>

                              );
                            })
                          ) : (
                            <tr>
                              <td style={{ textAlign: "center" }} colSpan={6}>
                                No data found
                              </td>
                            </tr>
                          )}
                        </select>
                      </div>
                    </div>
                    <div className='row mt-3 formcolsInput'>
                      <div className='col-md-6 formcolsInput'>
                        <input className="form-control form-control-sm font16" type="text" placeholder="Enter Amount" aria-label=".form-control-sm example" maxLength="4" value={amount} onChange={(e) => handleAmount(e.target.value)} />
                        {amountIsRequiredError && (
                          <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                            Amount is required
                          </div>
                        )}
                        {amountValidError && (
                          <div className='text-start p-2' style={{ color: "red", fontSize: "x-small" }}>
                            Please enter valid amount
                          </div>
                        )}
                      </div>
                    </div>
                    <p className='text-center mt-4'>
                      <button onClick={openModal} type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        Proceed to Recharge
                      </button>
                      <PayPopUp isOpen={isModalOpen} number={number} amount={amount} providerID={providerID} serviceId={"1"} handleClose={handlePopupClose} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1 col-sm-1 col-1"></div>
          </div>
          <div className="row white3rdRow p-5">
            <div className="row text-center row3Headings">
              <p className='why999'><span className='upperCase font20_d font400Weight darkRedFont'>Why PAY999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED)</span></p>
              <p className='why999text'><span className='upperCase font35 font800Weight'>Recharge & Pay Bills on <span className='darkRedFont'>Pay</span><span className='darkBlueFont'>999</span>.</span></p>
              <span className='textBlueFont upperCase font17a'>Connect your money to your friends & family from anywhere, anytime regardless any delay. Lorem ipsum Nullana integer sagittis, eleifend. met, aliquere.</span>
            </div>
          </div>
          <div className="row white4thRow pt-5 pb-5">
            <div className="col-md-1 col-sm-1 col-1"></div>
            <div className="col-md-10 col-sm-10 col-10">
              <div className="row">
                {serviceList?.length !== 0 ? (
                  serviceList?.map((service) => {
                    return (
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className=' text-decoration-none text-black' onClick={() => onService(service?.service_id, service?.service_name)}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <img src={service?.service_image} className="image" alt="...." />
                              </div>
                            </div>
                            <span className='font20_b' >{service?.service_name}</span>
                          </a>
                        </div>
                      </div>
                    );

                  })
                ) : (
                  <>
                    <div className="row">
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                                  <path fill="url(#paint0_linear_1098_2482)" d="M17 19V5H7v14zm0-18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3c0-1.11.89-2 2-2zM9 7h6v2H9zm0 4h4v2H9z" />
                                  <linearGradient id="paint0_linear_1098_2482" x1="24.9993" y1="4.16602" x2="24.9993" y2="43.7494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC041B" />
                                    <stop offset="1" stop-color="#F71D00" />
                                  </linearGradient>
                                </svg>
                              </div>
                            </div>
                            <span className='font20_b' >Mobile Recharge</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <img src="./images/fastag.svg" alt="" />
                              </div>
                            </div>
                            <span className='font20_b'>FASTag Recharge</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
                                  <path fill="none" stroke="url(#paint0_linear_1098_2482)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 384v-24c0-29 31.54-56.43 52-76c28.84-27.57 44-64.61 44-108c0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108c20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256" />
                                  <path fill="none" stroke="url(#paint0_linear_1098_2482)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M294 240s-21.51 16-38 16s-38-16-38-16" />
                                  <linearGradient id="paint0_linear_1098_2482" x1="24.9993" y1="4.16602" x2="24.9993" y2="43.7494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC041B" />
                                    <stop offset="1" stop-color="#F71D00" />
                                  </linearGradient>
                                </svg>
                              </div>
                            </div>
                            <span className='font20_b'>Electricity Bills</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 20 20">
                                  <g fill="url(#paint0_linear_1098_2482)">
                                    <path fill-rule="evenodd" d="M16 3.5H4a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-13 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clip-rule="evenodd" />
                                    <path d="M2.5 6.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 2 8V7a.5.5 0 0 1 .5-.5" />
                                    <path fill-rule="evenodd" d="M6 9.5H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-1 2v-1h1v1z" clip-rule="evenodd" />
                                  </g>
                                  <linearGradient id="paint0_linear_1098_2482" x1="24.9993" y1="4.16602" x2="24.9993" y2="43.7494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC041B" />
                                    <stop offset="1" stop-color="#F71D00" />
                                  </linearGradient>
                                </svg>
                              </div>
                            </div>
                            <span className='font20_b'>Credit Card Bills</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                                  <path fill="url(#paint0_linear_1098_2482)" d="M7 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10.5 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m2.5 6v-.5a2.5 2.5 0 0 0-5 0v.5h-2v-.5a4.5 4.5 0 1 1 9 0v.5zm-10 0v-4a3 3 0 1 0-6 0v4H2v-4a5 5 0 0 1 10 0v4z" />
                                  <linearGradient id="paint0_linear_1098_2482" x1="24.9993" y1="4.16602" x2="24.9993" y2="43.7494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC041B" />
                                    <stop offset="1" stop-color="#F71D00" />
                                  </linearGradient>
                                </svg>
                              </div>
                            </div>
                            <span className='font20_b'>Rent Payment</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 2048 2048">
                                  <path fill="url(#paint0_linear_1098_2482)" d="M1582 1065q41 72 61 150t21 161v103l-640 321l-640-321q0-60 1-112t9-101t24-98t48-103L256 960v587q29 10 52 28t41 42t26 52t9 59v320H0v-320q0-30 9-58t26-53t40-42t53-28V896L0 832l1024-512l1024 512zM256 1728q0-26-19-45t-45-19q-26 0-45 19t-19 45v192h128zm30-896l738 369l738-369l-738-369zm1250 568q0-77-15-143t-53-135l-444 222l-444-222q-33 58-50 122t-18 132v24l512 256z" />
                                  <linearGradient id="paint0_linear_1098_2482" x1="24.9993" y1="4.16602" x2="24.9993" y2="43.7494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC041B" />
                                    <stop offset="1" stop-color="#F71D00" />
                                  </linearGradient>
                                </svg>
                              </div>
                            </div>
                            <span className='font20_b'>Education Fees</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                                  <path fill="url(#paint0_linear_1098_2482)" d="M17 19V5H7v14zm0-18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3c0-1.11.89-2 2-2zM9 7h6v2H9zm0 4h4v2H9z" />
                                  <linearGradient id="paint0_linear_1098_2482" x1="24.9993" y1="4.16602" x2="24.9993" y2="43.7494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC041B" />
                                    <stop offset="1" stop-color="#F71D00" />
                                  </linearGradient>
                                </svg>
                              </div>
                            </div>
                            <span className='font20_b' >Mobile Recharge</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <img src="./images/fastag.svg" alt="" />
                              </div>
                            </div>
                            <span className='font20_b'>FASTag Recharge</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
                                  <path fill="none" stroke="url(#paint0_linear_1098_2482)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 384v-24c0-29 31.54-56.43 52-76c28.84-27.57 44-64.61 44-108c0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108c20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256" />
                                  <path fill="none" stroke="url(#paint0_linear_1098_2482)" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M294 240s-21.51 16-38 16s-38-16-38-16" />
                                  <linearGradient id="paint0_linear_1098_2482" x1="24.9993" y1="4.16602" x2="24.9993" y2="43.7494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC041B" />
                                    <stop offset="1" stop-color="#F71D00" />
                                  </linearGradient>
                                </svg>
                              </div>
                            </div>
                            <span className='font20_b'>Electricity Bills</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 20 20">
                                  <g fill="url(#paint0_linear_1098_2482)">
                                    <path fill-rule="evenodd" d="M16 3.5H4a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-13 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" clip-rule="evenodd" />
                                    <path d="M2.5 6.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 2 8V7a.5.5 0 0 1 .5-.5" />
                                    <path fill-rule="evenodd" d="M6 9.5H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-1 2v-1h1v1z" clip-rule="evenodd" />
                                  </g>
                                  <linearGradient id="paint0_linear_1098_2482" x1="24.9993" y1="4.16602" x2="24.9993" y2="43.7494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC041B" />
                                    <stop offset="1" stop-color="#F71D00" />
                                  </linearGradient>
                                </svg>
                              </div>
                            </div>
                            <span className='font20_b'>Credit Card Bills</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                                  <path fill="url(#paint0_linear_1098_2482)" d="M7 9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10.5 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m2.5 6v-.5a2.5 2.5 0 0 0-5 0v.5h-2v-.5a4.5 4.5 0 1 1 9 0v.5zm-10 0v-4a3 3 0 1 0-6 0v4H2v-4a5 5 0 0 1 10 0v4z" />
                                  <linearGradient id="paint0_linear_1098_2482" x1="24.9993" y1="4.16602" x2="24.9993" y2="43.7494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC041B" />
                                    <stop offset="1" stop-color="#F71D00" />
                                  </linearGradient>
                                </svg>
                              </div>
                            </div>
                            <span className='font20_b'>Rent Payment</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-2">
                        <div className="greyBox text-center p-4">
                          <a className='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLogin}>
                            <div className='d-flex justify-content-center mb-4'>
                              <div className="rounded-circle bg-white widthcircle"></div>
                              <div className='whiteCircleimng align-self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 2048 2048">
                                  <path fill="url(#paint0_linear_1098_2482)" d="M1582 1065q41 72 61 150t21 161v103l-640 321l-640-321q0-60 1-112t9-101t24-98t48-103L256 960v587q29 10 52 28t41 42t26 52t9 59v320H0v-320q0-30 9-58t26-53t40-42t53-28V896L0 832l1024-512l1024 512zM256 1728q0-26-19-45t-45-19q-26 0-45 19t-19 45v192h128zm30-896l738 369l738-369l-738-369zm1250 568q0-77-15-143t-53-135l-444 222l-444-222q-33 58-50 122t-18 132v24l512 256z" />
                                  <linearGradient id="paint0_linear_1098_2482" x1="24.9993" y1="4.16602" x2="24.9993" y2="43.7494" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BC041B" />
                                    <stop offset="1" stop-color="#F71D00" />
                                  </linearGradient>
                                </svg>
                              </div>
                            </div>
                            <span className='font20_b'>Education Fees</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="col-md-1 col-sm-1 col-1"></div>
          </div>
          <div className="row white5thRow">
            <div className="col-md-1 col-sm-1 col-1"></div>
            <div className="col-md-11 col-sm-11 col-11">
              <div className="row">
                <div className="col-lg-7 col-md-11 col-sm-11 col-11 align-self-center">
                  <p className='font20_a darkdarkRedFont'>Security Features</p>
                  <p className='font35 upperCase font600Weight'>Advanced Encryption & Authentication</p>
                  <p className='font19 textBlueFont'>Security Features" is a heading that is commonly used to categorize information or discuss various security-related aspects of a product, service, or technology.In the context of a fintech app or virtual wallet, the "Security Features" section would typically cover the measures and practices that the app employs to protect users' sensitive financial and personal information.</p>
                  <p className='font17a upperCase font600Weight'>Here are some common security features that might be included under this heading:</p>
                  <div className="d-flex flex-wrap">
                    <div className="greeyy2boxes p-3 me-3 mb-3">
                      <div className="textbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="black" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" />
                        </svg> <span className='font18 font400Weight'>Encryption</span>
                      </div>
                    </div>
                    <div className="greeyy2boxes p-3 me-3 mb-3">
                      <div className="textbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="black" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" />
                        </svg> <span className='font18 font400Weight'>Two-Factor Authentication (2FA)</span>
                      </div>
                    </div>
                    <div className="greeyy2boxes p-3 me-3 mb-3">
                      <div className="textbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="black" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" />
                        </svg> <span className='font18 font400Weight'>Biometric Authentication</span>
                      </div>
                    </div>
                    <div className="greeyy2boxes p-3 me-3 mb-3">
                      <div className="textbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="black" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" />
                        </svg> <span className='font18 font400Weight'>Device Authentication</span>
                      </div>
                    </div>
                    <div className="greeyy2boxes p-3 me-3 mb-3">
                      <div className="textbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="black" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" />
                        </svg> <span className='font18 font400Weight'>Secure PIN or Passcode</span>
                      </div>
                    </div>
                    <div className="greeyy2boxes p-3 me-3 mb-3">
                      <div className="textbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="black" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" />
                        </svg> <span className='font18 font400Weight'>Remote Lock/Wipe</span>
                      </div>
                    </div>
                    <div className="greeyy2boxes p-3 me-3 mb-3">
                      <div className="textbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="black" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" />
                        </svg> <span className='font18 font400Weight'>Regular Updates</span>
                      </div>
                    </div>
                    <div className="greeyy2boxes p-3 me-3 mb-3">
                      <div className="textbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="black" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" />
                        </svg> <span className='font18 font400Weight'>Secure Data Storage</span>
                      </div>
                    </div>
                    <div className="greeyy2boxes p-3 me-3 mb-3">
                      <div className="textbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="black" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" />
                        </svg> <span className='font18 font400Weight'>Compliance with Regulations</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 col-12"><img src="./images/Girl.svg" alt="" className='img-fluid' /></div>
              </div>
            </div>
          </div>
          <div className="row white6thRow p-5 justify-content-center">
            <div className="row text-center row6Headings">
              <p><span className='upperCase font20_a font400Weight darkRedFont'>Working Process</span></p>
              <p><span className='upperCase font35 font800Weight'>Open An Account In Easy 4 Steps</span></p>
              <span className='textBlueFont upperCase font17'>Connect your money to your friends & family from anywhere, anytime regardless any delay. Lorem ipsum Nullana integer sagittis, eleifend. met, aliquere.</span>
            </div>
            <div className="row white4thRow pt-5 pb-5">
              <div className="col-lg-1 col-mg-12 col-sm-1 col-12"></div>
              <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12 p-3">
                    <div className="greeyy3boxes p-4">
                      <p className='greycirclediv'>
                        <img className='greycircle' src="./mdi--account.svg" alt="" />
                      </p>
                      <p className='font20_c font500Weight fontLineHeight30 mb-2'>1. Open Account</p>
                      <span className='font16_a textBlueFont font400Weight fontLineHeight26'>Welcome to our platform! Begin your journey by opening an account with us. It's quick, and secure.</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12 p-3">
                    <div className="greeyy3boxes p-4">
                      <p className='greycirclediv'>
                        <img className='greycircle' src="./bitcoin-icons--verify-filled.svg" alt="" />
                      </p>
                      <p className='font20_c font500Weight fontLineHeight30 mb-2'>2. Verify Identity</p>
                      <span className='font16_a textBlueFont font400Weight fontLineHeight26'>To ensure security and compliance, we need to verify your identity. Complete this step to access all features.</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12 p-3">
                    <div className="greeyy3boxes p-4">
                      <p className='greycirclediv'>
                        <img className='greycircle' src="./grommet-icons--connectivity.svg" alt="" />
                      </p>
                      <p className='font20_c font500Weight fontLineHeight30 mb-2'>3. Connect Your Account</p>
                      <span className='font16_a textBlueFont font400Weight fontLineHeight26'>Link your accounts effortlessly to streamline your experience. Connect your bank or other accounts in just a few clicks.</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12 p-3">
                    <div className="greeyy3boxes p-4">
                      <p className='greycirclediv'>
                        <img className='greycircle' src="./material-symbols--send-money.svg" alt="" />
                      </p>
                      <p className='font20_c font500Weight fontLineHeight30 mb-2'>4. Send Money</p>
                      <span className='font16_a textBlueFont font400Weight fontLineHeight26'>Ready to send money? It's as easy as a few clicks. Transfer funds securely to friends, family, or businesses.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-12 col-sm-1 col-12"></div>
            </div>
          </div>
          <div className="row white7thRow">
            <div className="col-md-1 col-sm-1 col-1"></div>
            <div className="col-md-10 col-sm-10 col-10">
              <div className="row d-flex">
                <div className="col-lg-6 col-md-12 col-sm-12 p-5 d-flex align-items-stretch">
                  <div className="card1 bg-white flex-grow-1 d-flex flex-column">
                    <div className="row p-5 flex-grow-1">
                      <img src="./images/pay999_2nd.svg" alt="" className='img-fluid imgpay999' />
                      <p className='font35 font500Weight mb-3'>Revolutionizing Financial Transactions with Innovative Solutions</p>
                      <p className='font20_a font400Weight textBlueFont'>At Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED), we revolutionize fintech with cutting-edge technology that streamlines transactions and enhances user experience. Our platform ensures fast, secure, and user-friendly financial solutions, making your financial management effortless and efficient.</p>
                    </div>
                    <div className="row mt-auto"><img src="./images/handwithcard.svg" alt="" /></div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 p-5 d-flex align-items-stretch">
                  <div className="card1 bg-white flex-grow-1 d-flex flex-column">
                    <div className="row p-5 flex-grow-1">
                      <img src="./images/pay999_2nd.svg" alt="" className='img-fluid imgpay999' />
                      <p className='font35 font500Weight mb-3'>Unlimited Cashback Every time</p>
                      <p className='font20_a font400Weight textBlueFont'>At Pay999, we reward your loyalty with our Unlimited Cashback program. Every recharge or transaction earns you cashback, with no limits on your savings. Enjoy seamless mobile services and smartly manage your expenses with Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED).</p>
                    </div>
                    <div className="row mt-auto"><img src="./images/girlwithPhone.svg" alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1 col-sm-1 col-1"></div>
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
        <Footer />
      </Container>



    </>
  )
}

export default HomePage
