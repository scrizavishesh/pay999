import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { checkBalance, payNowBills, rechargeNow } from '../utils/Constants';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import HashLoader from '../Layouts/Loader';
import { Modal } from 'react-bootstrap';


const StyledModal = styled(Modal)`
  .submitbtn {
padding: 0.9375rem 8rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.3125rem;
border: 1px solid #B6C5DB;
background: linear-gradient(180deg, #BC041B 0%, #F71D00 100%);
}

.payment {
color: #000;
font-family: Inter;
font-size: 1.5rem;
font-weight: 700;
}

.date{
color: #928484;
font-family: Inter;
font-size: 1.0625rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`;

const Popup = ({ isOpen, number, amount, providerID, ProviderOptions, serviceId, handleClose }) => {




    // const PayPopUp = () => {

    // const id = serviceId;
    // console.log(serviceId, "service Id")


    // if (!isOpen) {
    //     return null;
    // }

    const [showLoader, setShowLoader] = useState(false)

    const [balance, setBalance] = useState("");
    const [receiptShow, setReceiptShow] = useState(false);
    const [rechargeSuccessData, setRechargeSuccessData] = useState("")

    // const navigate = useNavigate();
    const token = localStorage.getItem("pay999-token");

    const recharge = async () => {
        if (number === "" || !number) {
            setNumberIsRequiredlError(true);
        }
        if (amount === "" || !amount) {
            setAmountIsRequiredlError(true);
        }
        setShowLoader(true);
        if ((number !== "", amount !== "")) {
            const formData = new FormData();
            formData.append("number", number);
            formData.append("api_token", token);
            formData.append("amount", amount);
            formData.append("provider_id", providerID);
            formData.append("payment_type", 1);
            formData.append("latitude", "12");
            formData.append("longitude", "12");
            try {
                const response = await rechargeNow(formData);
                // console.log(response, "recharge now");
                if (response?.status === 200) {
                    toast.success(response?.data?.message);
                    setRechargeSuccessData(response?.data?.transaction_details)
                    // closeModal();
                    setReceiptShow(true);
                    setShowLoader(false);
                }
            } catch (err) {
                console.log(err)
            }
        }
    };


    const pay_Now = async () => {
        const formData = new FormData();
        formData.append("api_token", token);
        formData.append("provider_id", providerID);
        ProviderOptions?.map((item) => {
            formData.append(`${item?.name}`, item?.value);
        });
        formData.append("amount", amount);
        formData.append("payment_type", 1);
        formData.append("latitude", "1.11");
        formData.append("longitude", "1.11");
        try {
            const response = await payNowBills(formData);
            // console.log(response, "Bill Verify");
            if (response?.status === 200) {
                // setBillData(response?.data)
                // setDataHide(true);
            }
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        check_balance()
    }, [])


    const check_balance = async () => {
        const formData = new FormData();
        formData.append("api_token", token);
        try {
            const response = await checkBalance(formData);
            // console.log(response, "Check Balnace");
            if (response?.status === 200) {
                setBalance(response?.data?.profileDetails?.wallet_balance)
            }
        } catch (err) {
            console.log(err)
        }
    };


    const onService = (id) => {
        if (id === "1" || id === "3") {
            recharge();
        } else {
            pay_Now();
        }
    }


    return (
        <StyledModal show={isOpen} onHide={handleClose}>
            <Modal.Body>
                {
                    showLoader ? <HashLoader /> : <div className="modal-dialog">
                        {
                            !receiptShow ? <div className="modal-content">
                                <div className="modal-header d-flex justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="42" viewBox="0 0 130 42" fill="none">
                                        <path d="M43.1158 23.2414C43.1158 25.0694 42.2099 25.9825 40.3981 25.9809H33.1973V36.625H28.7505V7.25004H40.4078C42.2196 7.25004 43.1255 8.15043 43.1255 9.95123L43.1158 23.2414ZM38.6325 22.2098V11.0212H33.1973V22.2098H38.6325Z" fill="#1A1A1A" />
                                        <path d="M60.6255 36.625H56.3641L55.5001 31.0567H50.1165L49.2548 36.625H45.0005V36.5508L50.5766 7.25004H55.0963L60.6255 36.625ZM54.8944 27.2806L52.8001 14.0451L50.687 27.2806H54.8944Z" fill="#1A1A1A" />
                                        <path d="M78.1245 7.42274L74.1875 19.6923C73.7014 20.9061 73.0485 22.9522 72.2287 25.8307V36.625H67.7594V25.8307C67.5366 24.7809 67.2451 23.7465 66.8869 22.7339C66.2162 20.8661 65.8549 19.8522 65.803 19.6923L61.8854 7.41795C61.8709 7.40596 61.8709 7.34839 61.8854 7.25004H66.4665L70.0244 20.0113L73.5605 7.25004H78.1245V7.42274Z" fill="#1A1A1A" />
                                        <path d="M94.3745 33.9406C94.3745 35.7302 93.5272 36.625 91.8325 36.625H83.3006C81.5905 36.625 80.7347 35.7302 80.7331 33.9406V27.7034H84.8928V32.8467H90.1732V24.0066H83.1388C81.4641 24.0066 80.6261 23.127 80.6245 21.3678V9.95123C80.6245 8.15043 81.4626 7.25004 83.1388 7.25004H91.7816C93.5056 7.25004 94.3676 8.15043 94.3676 9.95123L94.3745 33.9406ZM90.1802 20.2955V11.0212H84.7726V20.2955H90.1802Z" fill="#1A1A1A" />
                                        <path d="M112.498 33.9406C112.498 35.7302 111.611 36.625 109.838 36.625H100.922C99.1299 36.625 98.2346 35.7302 98.2362 33.9406V27.7034H102.588V32.8467H108.112V24.0066H100.753C99.001 24.0066 98.125 23.127 98.125 21.3678V9.95123C98.125 8.15043 99.001 7.25004 100.753 7.25004H109.795C111.598 7.25004 112.5 8.15043 112.5 9.95123L112.498 33.9406ZM108.11 20.2955V11.0212H102.455V20.2955H108.11Z" fill="#1A1A1A" />
                                        <path d="M129.99 33.9406C129.99 35.7302 129.104 36.625 127.331 36.625H118.424C116.632 36.625 115.737 35.7302 115.739 33.9406V27.7034H120.09V32.8467H125.61V24.0066H118.255C116.5 24.0066 115.623 23.127 115.625 21.3678V9.95123C115.625 8.15043 116.502 7.25004 118.255 7.25004H127.295C129.098 7.25004 130 8.15043 130 9.95123L129.99 33.9406ZM125.601 20.2955V11.0212H119.947V20.2955H125.601Z" fill="#1A1A1A" />
                                        <path d="M9.08952 0.506373L20.7702 7.23135C20.9173 7.3171 21.0393 7.44075 21.1236 7.58966C21.2079 7.73858 21.2515 7.90743 21.25 8.07893V21.9551C21.2498 22.125 21.2054 22.2918 21.1212 22.4389C21.037 22.5859 20.9159 22.7081 20.7702 22.793L13.7099 27.1011C13.5635 27.1942 13.3948 27.2455 13.2218 27.2497C13.0487 27.2539 12.8778 27.2108 12.7271 27.1249C12.5764 27.039 12.4515 26.9136 12.3656 26.7619C12.2798 26.6102 12.2361 26.4379 12.2394 26.2632V14.3026C12.24 14.1319 12.196 13.9641 12.1118 13.8161C12.0275 13.6681 11.906 13.5452 11.7596 13.4599L0.484351 6.76639C0.337241 6.68174 0.214945 6.55928 0.129877 6.41148C0.0448081 6.26368 0 6.09579 0 5.92485C0 5.75392 0.0448081 5.58603 0.129877 5.43823C0.214945 5.29043 0.337241 5.16799 0.484351 5.08333L8.10832 0.516069C8.25587 0.425477 8.42491 0.376751 8.5976 0.375046C8.77029 0.373341 8.94025 0.418711 9.08952 0.506373Z" fill="url(#paint0_linear_1075_408)" />
                                        <path d="M10.6249 15.7285V40.6463C10.6279 40.8194 10.583 40.9901 10.4951 41.1404C10.4071 41.2907 10.2792 41.4151 10.125 41.5003C9.97078 41.5855 9.79588 41.6285 9.61874 41.6246C9.44161 41.6208 9.26883 41.5703 9.1186 41.4785L1.11724 36.7976C0.967368 36.713 0.842937 36.5913 0.756518 36.4448C0.6701 36.2982 0.624746 36.132 0.625001 35.9629V20.4142C0.624746 20.2451 0.6701 20.0789 0.756518 19.9324C0.842937 19.7858 0.967368 19.6641 1.11724 19.5796L9.1186 14.8962C9.26883 14.8044 9.44161 14.7539 9.61874 14.7501C9.79588 14.7463 9.97078 14.7892 10.125 14.8745C10.2792 14.9597 10.4071 15.084 10.4951 15.2343C10.583 15.3846 10.6279 15.5553 10.6249 15.7285Z" fill="url(#paint1_linear_1075_408)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_1075_408" x1="0.0165521" y1="13.811" x2="21.2596" y2="13.811" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F71D00" />
                                                <stop offset="1" stopColor="#BC041B" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1075_408" x1="0.632385" y1="28.1862" x2="10.6249" y2="28.1862" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#F71D00" />
                                                <stop offset="1" stopColor="#BC041B" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="modal-body p-4">
                                    <div className='text'>

                                    </div>
                                    <div className='d-flex justify-content-between mt-3'>
                                        <h6 className='fw-bold'>Pay Via Wallet</h6>
                                        <h6 className='fw-bold'>₹{amount}</h6 >
                                    </div>

                                    <hr />
                                    <div className='d-flex gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_1075_401)">
                                                <mask id="mask0_1075_401" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-1" y="-1" width="22" height="22">
                                                    <path d="M9.99984 18.3333C11.0944 18.3347 12.1784 18.1198 13.1897 17.701C14.2009 17.2821 15.1194 16.6675 15.8923 15.8925C16.6673 15.1195 17.2819 14.2011 17.7008 13.1898C18.1197 12.1786 18.3346 11.0946 18.3332 10C18.3346 8.90544 18.1197 7.82141 17.7008 6.81018C17.2819 5.79894 16.6673 4.88046 15.8923 4.1075C15.1194 3.33251 14.2009 2.71791 13.1897 2.29903C12.1784 1.88015 11.0944 1.66525 9.99984 1.66666C8.90529 1.66527 7.82125 1.88019 6.81002 2.29906C5.79879 2.71794 4.88031 3.33253 4.10734 4.1075C3.33237 4.88046 2.71779 5.79894 2.29891 6.81018C1.88003 7.82141 1.66512 8.90544 1.66651 10C1.66509 11.0946 1.88 12.1786 2.29888 13.1898C2.71776 14.2011 3.33236 15.1195 4.10734 15.8925C4.88031 16.6675 5.79879 17.2821 6.81002 17.7009C7.82125 18.1198 8.90529 18.3347 9.99984 18.3333Z" fill="white" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                                    <path d="M6.6665 10L9.1665 12.5L14.1665 7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </mask>
                                                <g mask="url(#mask0_1075_401)">
                                                    <path d="M0 0H20V20H0V0Z" fill="#BC041B" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1075_401">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <h6>Pay999 Balance</h6>
                                    </div>
                                    <div className='mt-2'>
                                        Available Balance ₹{balance}
                                    </div>
                                    <hr />
                                    <div className='d-flex justify-content-center'>
                                        <button onClick={(e) => onService(serviceId)} type="button" className="btn btn-danger submitbtn">Pay ₹{amount} </button>

                                    </div>

                                </div>
                            </div>
                                :
                                <div className="modal-content">
                                    <div className="modal-header d-flex justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="28" viewBox="0 0 87 28" fill="none">
                                            <path d="M39.1962 14.3003C39.1962 15.3061 38.6978 15.8085 37.701 15.8077H33.7391V21.664H31.2925V5.50195H37.7063C38.7032 5.50195 39.2016 5.99735 39.2016 6.98814L39.1962 14.3003ZM36.7296 13.7328V7.57682H33.7391V13.7328H36.7296Z" fill="#1A1A1A" />
                                            <path d="M48.83 21.664H46.4854L46.01 18.6003H43.048L42.5739 21.664H40.2332V21.6231L43.3011 5.50195H45.7878L48.83 21.664ZM45.6767 16.5227L44.5245 9.24058L43.3619 16.5227H45.6767Z" fill="#1A1A1A" />
                                            <path d="M58.4585 5.59697L56.2924 12.3477C56.025 13.0155 55.6657 14.1413 55.2147 15.725V21.664H52.7557V15.725C52.6331 15.1474 52.4727 14.5783 52.2756 14.0211C51.9066 12.9935 51.7078 12.4356 51.6793 12.3477L49.5238 5.59434C49.5158 5.58774 49.5158 5.55606 49.5238 5.50195H52.0443L54.0019 12.5232L55.9474 5.50195H58.4585V5.59697Z" fill="#1A1A1A" />
                                            <path d="M67.3992 20.1871C67.3992 21.1717 66.933 21.664 66.0006 21.664H61.3063C60.3655 21.664 59.8946 21.1717 59.8937 20.1871V16.7553H62.1824V19.5852H65.0877V14.7214H61.2173C60.296 14.7214 59.8348 14.2374 59.834 13.2695V6.98814C59.834 5.99735 60.2951 5.50195 61.2173 5.50195H65.9726C66.9211 5.50195 67.3954 5.99735 67.3954 6.98814L67.3992 20.1871ZM65.0915 12.6795V7.57682H62.1163V12.6795H65.0915Z" fill="#1A1A1A" />
                                            <path d="M77.3702 20.1871C77.3702 21.1717 76.8824 21.664 75.907 21.664H71.0014C70.0153 21.664 69.5227 21.1717 69.5236 20.1871V16.7553H71.9179V19.5852H74.9573V14.7214H70.9083C69.9444 14.7214 69.4624 14.2374 69.4624 13.2695V6.98814C69.4624 5.99735 69.9444 5.50195 70.9083 5.50195H75.883C76.8753 5.50195 77.3715 5.99735 77.3715 6.98814L77.3702 20.1871ZM74.9559 12.6795V7.57682H71.8447V12.6795H74.9559Z" fill="#1A1A1A" />
                                            <path d="M86.9946 20.1871C86.9946 21.1717 86.507 21.664 85.5317 21.664H80.6309C79.645 21.664 79.1524 21.1717 79.1533 20.1871V16.7553H81.5472V19.5852H84.5848V14.7214H80.5378C79.5723 14.7214 79.0899 14.2374 79.0908 13.2695V6.98814C79.0908 5.99735 79.5731 5.50195 80.5378 5.50195H85.5117C86.5039 5.50195 86.9999 5.99735 86.9999 6.98814L86.9946 20.1871ZM84.5794 12.6795V7.57682H81.4687V12.6795H84.5794Z" fill="#1A1A1A" />
                                            <path d="M27.166 13.583C27.166 6.08132 21.0847 0 13.583 0C6.08132 0 0 6.08132 0 13.583C0 21.0847 6.08132 27.166 13.583 27.166C21.0847 27.166 27.166 21.0847 27.166 13.583Z" fill="url(#paint0_linear_889_50)" />
                                            <path d="M12.6578 1.88249L19.2235 5.6258C19.3064 5.67366 19.3751 5.74273 19.4225 5.82591C19.4699 5.90909 19.4942 6.00338 19.4932 6.09911V13.8258C19.4935 13.9195 19.4695 14.0117 19.4233 14.0932C19.3772 14.1748 19.3107 14.243 19.2302 14.291L15.2684 16.6899C15.1862 16.7416 15.0915 16.7702 14.9944 16.7726C14.8973 16.775 14.8013 16.7511 14.7166 16.7034C14.6319 16.6558 14.5617 16.5861 14.5133 16.5019C14.465 16.4176 14.4403 16.3218 14.4418 16.2247V9.56329C14.4422 9.46825 14.4175 9.37479 14.3701 9.29239C14.3228 9.20998 14.2545 9.14156 14.1721 9.09403L7.8344 5.36825C7.7501 5.3216 7.67982 5.25323 7.63088 5.17023C7.58195 5.08723 7.55615 4.99264 7.55615 4.89629C7.55615 4.79994 7.58195 4.70534 7.63088 4.62235C7.67982 4.53935 7.7501 4.47097 7.8344 4.42433L12.1198 1.88114C12.2018 1.83425 12.2946 1.8097 12.389 1.80994C12.4834 1.81017 12.5761 1.83519 12.6578 1.88249Z" fill="white" />
                                            <path d="M13.4469 10.4182V24.3869C13.4486 24.484 13.424 24.5797 13.3758 24.6639C13.3276 24.7482 13.2576 24.8179 13.1731 24.8657C13.0886 24.9134 12.9928 24.9375 12.8957 24.9354C12.7987 24.9332 12.704 24.9049 12.6217 24.8535L8.23783 22.2294C8.15592 22.1821 8.08789 22.1141 8.04055 22.0322C7.99321 21.9503 7.96824 21.8574 7.96814 21.7628V13.045C7.968 12.9502 7.99286 12.857 8.0402 12.7749C8.08755 12.6927 8.15572 12.6245 8.23783 12.5771L12.6217 9.95166C12.704 9.9002 12.7987 9.87191 12.8957 9.86976C12.9928 9.86761 13.0886 9.8917 13.1731 9.93948C13.2576 9.98725 13.3276 10.0569 13.3758 10.1412C13.424 10.2255 13.4486 10.3212 13.4469 10.4182Z" fill="white" />
                                            <defs>
                                                <linearGradient id="paint0_linear_889_50" x1="0" y1="13.583" x2="27.1674" y2="13.583" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#F71D00" />
                                                    <stop offset="1" stopColor="#BC041B" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div>

                                        <div className='d-flex justify-content-center mt-4'>
                                            {rechargeSuccessData?.status === "failure" ? <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                <path d="M24 24L32 32M32 32L40 40M32 32L24 40M32 32L40 24M32 56C28.8483 56 25.7274 55.3792 22.8156 54.1731C19.9038 52.967 17.258 51.1992 15.0294 48.9706C12.8008 46.742 11.033 44.0962 9.82689 41.1844C8.62078 38.2726 8 35.1517 8 32C8 28.8483 8.62078 25.7274 9.82689 22.8156C11.033 19.9038 12.8008 17.258 15.0294 15.0294C17.258 12.8008 19.9038 11.033 22.8156 9.82689C25.7274 8.62078 28.8483 8 32 8C38.3652 8 44.4697 10.5286 48.9706 15.0294C53.4714 19.5303 56 25.6348 56 32C56 38.3652 53.4714 44.4697 48.9706 48.9706C44.4697 53.4714 38.3652 56 32 56Z" stroke="#FF2244" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                <path d="M27.3147 43.5039L16 32.1866L19.7707 28.4159L27.3147 35.9573L42.3973 20.8719L46.1707 24.6453L27.3147 43.4986V43.5039Z" fill="#00B400" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66663 32C2.66663 15.8 15.8 2.66663 32 2.66663C48.2 2.66663 61.3333 15.8 61.3333 32C61.3333 48.2 48.2 61.3333 32 61.3333C15.8 61.3333 2.66663 48.2 2.66663 32ZM32 56C28.8482 56 25.7274 55.3792 22.8156 54.1731C19.9037 52.967 17.258 51.1991 15.0294 48.9705C12.8008 46.7419 11.033 44.0962 9.82685 41.1844C8.62074 38.2725 7.99996 35.1517 7.99996 32C7.99996 28.8482 8.62074 25.7274 9.82685 22.8156C11.033 19.9037 12.8008 17.258 15.0294 15.0294C17.258 12.8008 19.9037 11.033 22.8156 9.82685C25.7274 8.62074 28.8482 7.99996 32 7.99996C38.3652 7.99996 44.4696 10.5285 48.9705 15.0294C53.4714 19.5303 56 25.6348 56 32C56 38.3652 53.4714 44.4696 48.9705 48.9705C44.4696 53.4714 38.3652 56 32 56Z" fill="#00B400" />
                                            </svg>}
                                        </div>
                                        <div className='justify-content-center mt-3 '>
                                            <h6 className='payment'>Payment</h6>
                                            <h6 className='payment'>{rechargeSuccessData?.status}</h6>
                                        </div>
                                        <div className='d-flex justify-content-center mt-3 '>
                                            <h6><span>Order No.</span>{rechargeSuccessData?.operator_ref}</h6>
                                        </div>
                                        <div className='d-flex justify-content-center mt-3'>
                                            <p className='date'>{rechargeSuccessData?.date}</p>
                                        </div>
                                        <hr />
                                        <div className='mx-5 mt-2 mb-5'>
                                            <div className='d-flex justify-content-between'>
                                                <p className='date'>Amount</p>
                                                <h6>{rechargeSuccessData?.amount}</h6>
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <p className='date'>Payment Method</p>
                                                <h6>Pay999 Wallet</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                }
            </Modal.Body>
        </StyledModal>
    );
};

export default Popup;

