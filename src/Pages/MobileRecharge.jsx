import Navbar2 from '../Layouts/Navbar2';
import Profile from '../Modals/Profile';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { findNumber, providerLis } from '../utils/Constants';
import toast from 'react-hot-toast';
import PayPopUp from '../Modals/PayPopUp';
import HashLoader from '../Layouts/Loader';
import Footer from '../Layouts/Footer';

const Container = styled.div`

  .activeTab{
    border-bottom: 4px solid var(--darkred_FontColor);
  }

  .navTabs{
    cursor: pointer;
  }

  .activeTableTab{
    color: #000;
  }

  .inActiveTableTab{
    color: var(--grey5Normal);
  }

  .RsBtnSelected{
    background-image: linear-gradient(133deg, #F71D00 , #BC041B);
  }

  .RsBtn{
    color: #F71D00 !important;
    border: 2px solid #F71D00;
  }

  .form-control::placeholder, .form-select{
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

  .greeyy2boxes{
    background-color: var(--greyBoxBg);
    border-radius: 5px;
    width: fit-content;
    height: fit-content;
  }

  .greydivssection{
    background-color: var(--greyBackgroundColor);
    border: 1px solid var(--greyBorderColor);
  }

  .textbox{
    height: fit-content;
    border-radius: 5px;
  }

  .greyBoxGreyText{
    color: var(--grey8Normal);
  }

  .bordebottoomm{
    border-bottom: 2px solid var(--TableCellBorderColor);
  }
  .bordebottomm{
    border-bottom: 1px solid var(--TableCellBorderColor);
    height: 46px;
  }

  .redbordebottomm{
    width: fit-content;
    border-bottom: 4px solid var(--darkred_FontColor);
  }

  .formInputColor{
    color: var(--grey1Normal);
  }


  @media screen and (max-width: 767px) and (min-width: 7px){
    .containerpadding{
      padding-left: 25px !important;
      padding-right: 25px !important;
    }
  }

  @media screen and (max-width: 991px) and (min-width: 576px){
    .paddingofsidecols{
      padding-left: 12px !important;
      padding-top: 22px !important;
    }

    .paddingofcols{
      padding-left: 32px !important;
    }

    .rowpadding{
      padding-top: 25px !important;
    }
  }

  @media screen and (max-width: 575px) and (min-width: 6px){
    .paddingofsidecols{
      padding-left: 12px !important;
      padding-top: 22px !important;
    }

    .paddingofcols{
      padding-left: 12px !important;
      padding-top: 22px !important;
    }

    .rowpadding{
      padding-top: 25px !important;
    }
  }

  .anchorlinks{
    white-space: nowrap;
    overflow: auto;
  }

  .anchorlinks::-webkit-scrollbar {
    display: none;
  }

  .anchorlinks .span{
    display: inline-block;
  }

`;


const MobileRecharge = () => {

  const profileDetails = JSON.parse(localStorage.getItem("profileDetails"));

  const [BrowsePlan, setBrowsePlan] = useState(true);
  const [Recants, setRecants] = useState(false);
  const [PromoCodes, setPromoCodes] = useState(false);
  const [Popular, setPopular] = useState(true);


  const { id, name } = useParams();

  const token = localStorage.getItem("pay999-token");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const [providerList, setProviderList] = useState([]);

  useEffect(() => {
    providerListSection();
  }, [])

  // Sign Up UseState
  const [number, setNumber] = useState("");
  const [numbeValidError, setNumberValidError] = useState(false);
  const [numberIsRequiredError, setNumberIsRequiredlError] = useState(false);

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

  const openModal = () => {
    if ((number !== "", amount !== "")) {
      setIsModalOpen(true);
      // setNumber('');
      // setProviderName('');
      // setAmount('');
    }

  }

  const handlePopupClose = () => {
    setIsModalOpen(false);
  };

  const numberFind = async (value) => {
    setShowLoader(true);
    if (number === "" || !number) {
      setNumberIsRequiredlError(true);
      setShowLoader(false);
    } else {
      setShowLoader(true);

    }

    if ((number !== "")) {
      const formData = new FormData();
      formData.append("number", value);
      formData.append("api_token", token);
      try {
        const response = await findNumber(formData);
        if (response?.status === 200) {
          toast.success(response?.data?.message);
          setProviderName(response?.data?.data[0]?.provider_name);
          setProviderID(response?.data?.data[0]?.provider_id)
          setShowLoader(false)
        }
      } catch (err) {
        console.log(err)
      }
    }

  };

  const providerListSection = async () => {
    const formData = new FormData();
    formData.append("api_token", token);
    formData.append("service_id", id);
    setShowLoader(true)
    try {
      const response = await providerLis(formData);
      // console.log(response, "provider List");
      if (response?.status === 200) {
        setProviderList(response?.data?.data);
        setShowLoader(false)
      }
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      
      <Container className=' bg-white'>
        <div className='container-fluid ps-5 pe-5 containerpadding'>
          <Navbar2 />
          {showLoader && <HashLoader />}
          <div className='row p-3'>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="row pb-4">
                <div className="col-md-4 col-sm-6 col-12">
                  <div className="row greydivssection p-4">
                    <p className='font18 font600Weight p-0'>{name} Recharge</p>
                    <form className='p-0 pt-4'>
                      <div className='mb-2'>
                        <label htmlFor="mobileNumInput" className="form-label formInputColor font15">Mobile Number</label>
                        <input type="text" className="form-control" id="mobileNumInput" value={number} onChange={(e) => handleNumber(e.target.value)} maxLength="10" />
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
                      <div className='mb-2'>
                        <label htmlFor="OperatorInput" className="form-label formInputColor font15">Operator</label>
                        <select onChange={(e) => setProviderName(e.target.value)} className="form-select font16" aria-label=".form-select-sm example">
                          <option selected>{providerName === "" ? "Open this select menu" : providerName}</option>
                          {providerList?.length !== 0 ? (
                            providerList?.map((provider) => {
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
                      <div className='mb-2'>
                        <label htmlFor="AmountInput" className="form-label formInputColor font15">Amount</label>
                        <input type="number" className="form-control" id="AmountInput" maxLength="4" value={amount} onChange={(e) => handleAmount(e.target.value)} />
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
                    </form>
                    <p className='text-center mt-4'>
                      <button onClick={openModal} type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        Proceed to Recharge
                      </button>
                      <PayPopUp isOpen={isModalOpen} number={number} amount={amount} providerID={providerID} serviceId={"1"} handleClose={handlePopupClose} />
                    </p>
                  </div>
                </div>
                <div className="col-md-8 col-sm-6 col-12 ps-5 paddingofcols">
                  <div className="row greydivssection">
                    <div className="container-fluid">
                      <div className="row ps-2 pe-2 border-bottom">
                        <ul className="nav nav-underline">
                          <li className="nav-item navTabs pt-2">
                            <span className={` ps-2 pe-2 ${BrowsePlan ? 'activeTab' : ''}`} onClick={() => { setBrowsePlan(true); setRecants(false); setPromoCodes(false) }}>Browse Plan</span>
                          </li>
                          <li className="nav-item navTabs pt-2">
                            <span className={` ps-2 pe-2 ${Recants ? 'activeTab' : ''}`} onClick={() => { setBrowsePlan(false); setRecants(true); setPromoCodes(false) }}>Recants</span>
                          </li>
                          <li className="nav-item navTabs pt-2">
                            <span className={` ps-2 pe-2 ${PromoCodes ? 'activeTab' : ''}`} onClick={() => { setBrowsePlan(false); setRecants(false); setPromoCodes(true) }}>Promo Codes</span>
                          </li>
                        </ul>
                      </div>
                      <div className="row">
                        {BrowsePlan
                          ?
                          <>
                            <div className="p-0 border-bottom">
                              <p className='p-3 m-0 font20_a border-bottom'>Browse Plans of Jio - Delhi NCR</p>
                              <div className='anchorlinks pt-2 pb-2 bg-white'>
                                <span className='font15 ps-3'>Popular</span>
                                <span className='font15 inActiveTableTab ps-3'>Smart Phone</span>
                                <span className='font15 inActiveTableTab ps-3'>Data Add on</span>
                                <span className='font15 inActiveTableTab ps-3'>Cricket Packs</span>
                                <span className='font15 inActiveTableTab ps-3'>Special Offer</span>
                                <span className='font15 inActiveTableTab ps-3'>JioPhone</span>
                                <span className='font15 inActiveTableTab ps-3'>JioBharat</span>
                                <span className='font15 inActiveTableTab ps-3'>Annual Plans</span>
                                <span className='font15 inActiveTableTab ps-3'>Entertainment</span>
                              </div>
                              {Popular
                                ?
                                <>
                                  <div className='greydivssection overflow-scroll'>
                                    <table className="w-100 table table-striped table-responsive-lg table-responsive-md table-responsive-sm">
                                      <thead>
                                        <tr>
                                          <th><span className='font14 font400Weight'>Circle</span></th>
                                          <th><span className='font14 font400Weight'>Plan type</span></th>
                                          <th><span className='font14 font400Weight'>Data</span></th>
                                          <th><span className='font14 font400Weight'>Validity</span></th>
                                          <th><span className='font14 font400Weight'>Description</span></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td><span className='font14 font400Weight'>Delhi NCR</span></td>
                                          <td><span className='font14 font400Weight'>Recharge</span></td>
                                          <td><span className='font14 font400Weight'>1 GB</span></td>
                                          <td><span className='font14 font400Weight'>Existing Plan</span></td>
                                          <td className='d-flex'><span className='font14 font400Weight align-self-center flex-grow-1'>Data: 1GB | For users with an active validity plan</span> <span className='text-end'><button className='btn btn-sm RsBtnSelected font15 text-white'>Rs.15</button></span></td>
                                        </tr>
                                        <tr>
                                          <td><span className='font14 font400Weight'>Delhi NCR</span></td>
                                          <td><span className='font14 font400Weight'>Recharge</span></td>
                                          <td><span className='font14 font400Weight'>1 GB</span></td>
                                          <td><span className='font14 font400Weight'>Existing Plan</span></td>
                                          <td className='d-flex'><span className='font14 font400Weight align-self-center flex-grow-1'>Data: 1GB | For users with an active validity plan</span> <span className='text-end'><button className='btn btn-sm RsBtn font15 text-white'>Rs.15</button></span></td>
                                        </tr>
                                        <tr>
                                          <td><span className='font14 font400Weight'>Delhi NCR</span></td>
                                          <td><span className='font14 font400Weight'>Recharge</span></td>
                                          <td><span className='font14 font400Weight'>1 GB</span></td>
                                          <td><span className='font14 font400Weight'>Existing Plan</span></td>
                                          <td className='d-flex'><span className='font14 font400Weight align-self-center flex-grow-1'>Data: 1GB | For users with an active validity plan</span> <span className='text-end'><button className='btn btn-sm RsBtn font15 text-white'>Rs.15</button></span></td>
                                        </tr>
                                        <tr>
                                          <td><span className='font14 font400Weight'>Delhi NCR</span></td>
                                          <td><span className='font14 font400Weight'>Recharge</span></td>
                                          <td><span className='font14 font400Weight'>1 GB</span></td>
                                          <td><span className='font14 font400Weight'>Existing Plan</span></td>
                                          <td className='d-flex'><span className='font14 font400Weight align-self-center flex-grow-1'>Data: 1GB | For users with an active validity plan</span> <span className='text-end'><button className='btn btn-sm RsBtn font15 text-white'>Rs.15</button></span></td>
                                        </tr>
                                        <tr>
                                          <td><span className='font14 font400Weight'>Delhi NCR</span></td>
                                          <td><span className='font14 font400Weight'>Recharge</span></td>
                                          <td><span className='font14 font400Weight'>1 GB</span></td>
                                          <td><span className='font14 font400Weight'>Existing Plan</span></td>
                                          <td className='d-flex'><span className='font14 font400Weight align-self-center flex-grow-1'>Data: 1GB | For users with an active validity plan</span> <span className='text-end'><button className='btn btn-sm RsBtn font15 text-white'>Rs.15</button></span></td>
                                        </tr>
                                        <tr>
                                          <td><span className='font14 font400Weight'>Delhi NCR</span></td>
                                          <td><span className='font14 font400Weight'>Recharge</span></td>
                                          <td><span className='font14 font400Weight'>1 GB</span></td>
                                          <td><span className='font14 font400Weight'>Existing Plan</span></td>
                                          <td className='d-flex'><span className='font14 font400Weight align-self-center flex-grow-1'>Data: 1GB | For users with an active validity plan</span> <span className='text-end'><button className='btn btn-sm RsBtn font15 text-white'>Rs.15</button></span></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </>
                                : ''
                              }
                            </div>
                          </>
                          :
                          ''
                        }
                        {Recants
                          ?
                          <>
                            Reacts
                          </>
                          :
                          ''
                        }
                        {PromoCodes
                          ?
                          <>
                            Promo
                          </>
                          :
                          ''
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row greydivssection p-4">
                <p className='font18 p-0 font400Weight'>Jio Recharge Plans :</p>
                <div className="d-flex flex-wrap p-0">
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio Popular Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio Smart Phone Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio Data Add on Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio Cricket Packs Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio Special Offer Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio JioPhone Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio JioBharat Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio Annual Plans Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio Entertainment Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio Top Up Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio ISD Recharge Plans</span>
                  </div>
                  <div className="bg-white textbox p-2 me-3 mb-3">
                    <span className='font16 greyBoxGreyText'>Jio International Roaming Recharge Plans</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ps-5 paddingofsidecols">
              <div className="row greydivssection table-responsive-lg table-responsive-md table-responsive-sm">
                <table className="table-sm">
                  <tbody>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="none" stroke="#BC041B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.5 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9.5M11 4h2m-1 13v.01M15 19l2 2l4-4" />
                        </svg>
                      </td>
                      <td><a className='darkdarkRedFont font18 text-start font700Weight text-decoration-none' href="">Mobile Recharge</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32">
                          <path fill="black" d="M16.5 4.5v2c4.984 0 9 4.016 9 9h2c0-6.063-4.938-11-11-11m0 4v2c2.773 0 5 2.227 5 5h2c0-3.855-3.145-7-7-7m-8.594.094l-.687.687c-4.27 4.27-4.27 11.23 0 15.5s11.23 4.27 15.5 0l.687-.687l-.687-.719l-5.5-5.5C18.242 17.562 19 16.629 19 15.5c0-1.379-1.121-2.5-2.5-2.5c-1.129 0-2.063.758-2.375 1.781l-5.5-5.5zm.157 2.969l12.374 12.374c-3.519 2.793-8.554 2.696-11.812-.562c-3.258-3.258-3.355-8.293-.563-11.813z" />
                        </svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/dthRecharge">DTH Recharge</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <path fill="black" d="M18 4v16H6V8.8L10.8 4zm0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9.5 19h-2v-2h2zm7 0h-2v-2h2zm-7-4h-2v-4h2zm3.5 4h-2v-4h2zm0-6h-2v-2h2zm3.5 2h-2v-4h2z" />
                        </svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Post-paid Bill</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                          <g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M20 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4 1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11" />
                            <path d="M12 8H6v3h6zm0 6v.01M9 14v.01M6 14v.01M12 17v.01M9 17v.01M6 17v.01" />
                          </g>
                        </svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Landline & Bill Payment</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
                          <g fill="black">
                            <path d="m25 12l-6 9h4v6l6-9h-4z" />
                            <path fillRule="evenodd" d="M37.91 19.273a13.567 13.567 0 0 1-2.983 7.015C33.965 27.464 31.52 30.82 31 33H17c-.52-2.182-2.968-5.539-3.93-6.715a13.568 13.568 0 0 1-2.98-7.017a13.47 13.47 0 0 1 1.292-7.494a13.814 13.814 0 0 1 5.166-5.67A14.215 14.215 0 0 1 24.002 4c2.638 0 5.222.73 7.454 2.107a13.813 13.813 0 0 1 5.164 5.671a13.47 13.47 0 0 1 1.29 7.495M29.583 31H18.416c-.426-.983-.995-1.968-1.525-2.805a34.85 34.85 0 0 0-2.272-3.175a11.568 11.568 0 0 1-2.542-5.983a11.469 11.469 0 0 1 1.1-6.382a11.814 11.814 0 0 1 4.42-4.848A12.215 12.215 0 0 1 24.002 6c2.27 0 4.49.629 6.405 1.81a11.813 11.813 0 0 1 4.418 4.848a11.469 11.469 0 0 1 1.098 6.383a11.568 11.568 0 0 1-2.544 5.981a34.413 34.413 0 0 0-2.271 3.175c-.53.837-1.098 1.82-1.524 2.803" clipRule="evenodd" />
                            <path d="M17 36a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1" />
                            <path fillRule="evenodd" d="M17 39h14v3a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2zm2 2h10v1H19z" clipRule="evenodd" />
                          </g>
                        </svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Electricity Bill Payment</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
                          <path fill="black" d="M305.3 67.89L73 150.4V199h46v-32.7l191.6-72.54zM369.5 169L119 252.5V217H73v222h61.1c-2.5-34.5 8.2-65.6 26.3-92.2c20-29.2 48.5-53.3 78.6-72.7c30-19.4 61.6-34 87.8-43.9c13.1-4.9 24.9-8.7 34.5-11.2c9.7-2.6 16.8-4 22.7-4h55v-46zm46.5 85.2c-4 5.2-9.4 12.3-14.5 20.4c-10.4 16.1-18.8 36.1-17.2 46.1c1.1 7.3 5.7 16.3 11.9 22.9c6.2 6.6 13.6 10.5 19.8 10.5c6.1 0 13.5-3.9 19.7-10.5c6.2-6.6 10.8-15.6 11.9-22.9c1.6-10-6.8-30-17.1-46.1c-5.2-8.1-10.5-15.2-14.5-20.4M41 457v30h138.5l-10-30z" />
                        </svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Water Bill Payment</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M16 9v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9c0-1.86 1.27-3.43 3-3.87V4H9V2h6v2h-2v1.13c1.73.44 3 2.01 3 3.87" /></svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">LPG Gas Bill</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 2048 2048"><path fill="black" d="M768 1920h128v128H0V0h1024v384H768v920l1085-542l185 371l-1270 635zm0-296l256-128v-176l-256 128zm384-192l256-128v-176l-256 128zm643-498l-259 130v176l330-165zM640 1280V640H384v640zM128 256h768V128H128zm512 1664v-512H256V512h384V384H128v1536z" /></svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Fastag</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none"><rect width="38" height="28" x="5" y="14" stroke="black" strokeWidth="4" rx="2" /><path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m24 14l14-8m-15 8L10 6m25 14v6" /><rect width="4" height="4" x="33" y="32" fill="black" rx="2" /></g></svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Cable TV Recharge</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><rect width="416" height="288" x="48" y="144" fill="none" stroke="black" strokeLinejoin="round" strokeWidth="32" rx="48" ry="48" /><path fill="none" stroke="black" strokeLinejoin="round" strokeWidth="32" d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49" /><path fill="black" d="M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32" /></svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Insurance</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 104v56h56a56 56 0 1 0-56-56Zm0 0v56h-56a56 56 0 1 1 56-56Z" /><rect width="384" height="112" x="64" y="160" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="32" ry="32" /><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M416 272v144a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V272m160-112v304" /></svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Piped Gas</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M8.71 14.29a1.002 1.002 0 0 0-1.09-.21a.9.9 0 0 0-.54.54a1 1 0 1 0 1.84 0a1.147 1.147 0 0 0-.21-.33m8 0a1.047 1.047 0 0 0-1.42 0a1.147 1.147 0 0 0-.21.33a.99.99 0 0 0 .21 1.09a1.147 1.147 0 0 0 .33.21a.941.941 0 0 0 .76 0a1.16 1.16 0 0 0 .33-.21a.99.99 0 0 0 .21-1.09a1.147 1.147 0 0 0-.21-.33m2.6 4.605a4.97 4.97 0 0 0 1.784-4.817l-1.5-8A5 5 0 0 0 14.68 2H9.319a5 5 0 0 0-4.913 4.078l-1.5 8a4.97 4.97 0 0 0 1.785 4.817l-1.398 1.398a1 1 0 1 0 1.414 1.414l1.87-1.87A5.006 5.006 0 0 0 7.818 20h8.362a5.006 5.006 0 0 0 1.243-.162l1.869 1.869a1 1 0 0 0 1.414-1.414ZM6.37 6.447A3.002 3.002 0 0 1 9.32 4h5.362a3.002 3.002 0 0 1 2.948 2.447l.347 1.85a7.955 7.955 0 0 1-11.952 0Zm12.117 10.469A2.99 2.99 0 0 1 16.181 18H7.819a3 3 0 0 1-2.948-3.553l.711-3.792a9.954 9.954 0 0 0 12.836 0l.71 3.792a2.99 2.99 0 0 1-.64 2.469" /></svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Metro Card Recharge</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92M14.05 2a9 9 0 0 1 8 7.94m-8-3.94A5 5 0 0 1 18 10" /></svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Subscription</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92M14.05 2a9 9 0 0 1 8 7.94m-8-3.94A5 5 0 0 1 18 10" /></svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Housing Society</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="black" d="M17 4c.763 0 1.394.434 1.856.89c.481.473.922 1.109 1.314 1.81c.787 1.406 1.472 3.243 1.925 5.058c.45 1.801.699 3.682.54 5.161C22.475 18.404 21.71 20 20 20c-1.476 0-2.652-.76-3.614-1.531l-.351-.289l-.492-.415l-.444-.368C14.08 16.572 13.175 16 12 16c-1.175 0-2.08.572-3.099 1.397l-.444.368l-.492.415l-.35.289C6.651 19.24 5.475 20 4 20c-1.711 0-2.476-1.596-2.635-3.081c-.158-1.48.09-3.36.54-5.161c.453-1.815 1.138-3.652 1.925-5.059c.392-.7.833-1.336 1.314-1.81C5.606 4.434 6.237 4 7 4c.515 0 1.018.123 1.513.27l.592.181c.099.03.197.06.295.087c.865.248 1.75.462 2.6.462c.85 0 1.735-.214 2.6-.462l.885-.267C15.983 4.124 16.49 4 17 4m0 2c-.383 0-.783.116-1.171.243l-.458.151a7.268 7.268 0 0 1-.221.068c-.885.252-2 .538-3.15.538s-2.265-.286-3.15-.538l-.22-.068l-.459-.151C7.783 6.115 7.383 6 7 6c-.418.078-.793.585-1.076 1.055l-.158.275l-.19.346c-.682 1.218-1.31 2.88-1.73 4.567c-.395 1.576-.587 3.086-.514 4.21l.026.293l.02.176l.03.208c.069.401.218.87.592.87c.812 0 1.49-.404 2.333-1.074l.403-.328l.76-.636l.344-.28C8.904 14.839 10.235 14 12 14c1.765 0 3.096.84 4.16 1.682l.345.28l.76.636l.402.328C18.51 17.596 19.187 18 20 18c.34 0 .494-.387.571-.759l.038-.218l.037-.317c.123-1.146-.067-2.765-.491-4.463c-.386-1.546-.946-3.072-1.562-4.254l-.359-.66l-.158-.273C17.793 6.585 17.418 6.078 17 6M8.5 8a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m7 0a1 1 0 0 1 .993.883L16.5 9v.5h.5a1 1 0 0 1 .117 1.993L17 11.5h-.5v.5a1 1 0 0 1-1.993.117L14.5 12v-.5H14a1 1 0 0 1-.117-1.993L14 9.5h.5V9a1 1 0 0 1 1-1m-7 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1" /></g></svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Loan Pay</a></td>
                    </tr>
                    <tr className='bordebottomm'>
                      <td className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16q2.075 0 3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21zm1-9q.425 0 .713-.288T13 11V5q0-.425-.288-.712T12 4q-.425 0-.712.288T11 5v6q0 .425.288.713T12 12" /></svg>
                      </td>
                      <td><a className='font18 text-black text-decoration-none' href="/">Broadband</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* ********************************************************************************************************************* */}
        {/* PROFILE  */}
        {/* ********************************************************************************************************************* */}

        <div className="offcanvas offcanvas-end  offcanvasbg" tabIndex="-1" id="profileModal" aria-labelledby="profileModalLabel">
          <div className="offcanvas-header">
            <div className="d-flex flex-grow-1">
              <div className="col-2 align-self-center"><img src="./images/user.svg" alt="" width={40} /></div>
              <div className="col-10 text-start">
                <div className="row">
                  <span className='font18'>{profileDetails?.name && profileDetails.name.charAt(0).toUpperCase() + profileDetails.name.slice(1)}</span>
                </div>
                <div className="row"><span className='font18'>+91 {profileDetails?.mobile}</span></div>
              </div>
            </div>
            <a type="button" data-bs-dismiss="offcanvas" aria-label="Close">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 17l5-5l-5-5" /></svg></span>
            </a>

          </div>
          <div className="offcanvas-body">
            <Profile />
          </div>
        </div>


        {/* ********************************************************************************************************************* */}
        {/* PROFILE  */}
        {/* ********************************************************************************************************************* */}

        <Footer />
      </Container>
    </>
  )
}

export default MobileRecharge



// .paddingofcols{
//   padding: 0% !important
// }