import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import styled from 'styled-components';
import HashLoader from '../Layouts/Loader';
import { AddBalance } from '../utils/Constants';

const Container = styled.div`

  .form-control::placeholder, .form-select{
    color: var(--grey5Normal);
  }

  .rechargebtnsuccess{
    background-image: linear-gradient(133deg, #F71D00 , #BC041B);
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
    width: 208px;
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

  .dthservicetext{
    color: var(--grey3Normal);
  }


  @media screen and (max-width: 1020px) and (min-width: 992px){
    .paddingofsidecols{
      padding-left: 28px !important;
    }

    .paddingofcols{
      padding-left: 28px !important;
    }

    .rowpadding{
      padding-top: 23px !important;
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

  @media screen and (max-width: 767px) and (min-width: 7px){
    .containerpadding{
      padding-left: 25px !important;
      padding-right: 25px !important;
    }
  }

  .offcanvasbg{
    background-color: var(--greyBackgroundColor);
  }

`;

const AddRecharge = () => {

    const token = localStorage.getItem("pay999-token");
    const [Amount, setAmount] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [orderId, setorderId] = useState('');

    const profileDetails = JSON.parse(localStorage.getItem("profileDetails"));





    const Add_Money = async () => {
        setShowLoader(true)
        try {
            const formData = new FormData();
            formData.append("api_token", token);
            formData.append("amount", Amount);
            const response = await AddBalance(formData);
            // console.log(response, "response")
            if (response?.status === 200) {
                toast(response?.data?.message)
                setShowLoader(false);
                setorderId(response?.data?.order_id);
                if(response?.data?.order_id) {
                  handlePayment();
                }
            }
        } catch (err) {
            console.log(err)
        }
    };





    const handlePayment = () => {
        const options = {
            key: 'rzp_live_nsFyy3Fy2ou4fQ', // Replace with your Razorpay Key ID
            amount: Amount, // Amount in paise (e.g., 50000 paise = INR 500.00)
            currency: 'INR',
            name:  "PAY999",
            description: 'hello sir',
            image: 'https://example.com/your_logo', // Optional: add your logo URL
            order_id : orderId,
            handler: function (response) {
                // console.log(response);
                alert(`Payment ID: ${response.razorpay_payment_id}`);
                alert(`Order ID: ${response.razorpay_order_id}`);
                alert(`Signature: ${response.razorpay_signature}`);
            },
            prefill: {
              name : profileDetails?.name,
              email : profileDetails?.email,
              contact : "9000090000" 
          },
            notes: {
                address: 'Razorpay Corporate Office'
            },
            theme: {
                color: '#F37254'
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <Container>
            {showLoader && <HashLoader />}
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <div className='text text-center mb-3' style={{ width: "40rem" }}>
                                        <div>
                                            <h1>My Wallet</h1>
                                        </div>
                                        <div>
                                            <span><b>0.00</b></span>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label"><b>Top-up Wallet</b></label>
                                        <input type="email" class="form-control" onChange={(e) => setAmount(e.target.value)} id="exampleFormControlInput1" placeholder="Enter Amount" />
                                    </div>
                                    <div className='mb-3'>
                                        <span>Recommended</span>
                                    </div>
                                    <div className='d-flex gap-2 mb-3'>
                                        <div>
                                            <button type="button" class="btn btn-outline-secondary" onClick={() => setAmount(100)}>100</button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-outline-secondary" onClick={() => setAmount(200)}>200</button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-outline-secondary" onClick={() => setAmount(500)}>500</button>
                                        </div>
                                        <div>
                                            <button type="button" class="btn btn-outline-secondary" onClick={() => setAmount(1000)}>1000</button>
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <button type="button" className=' col-12 btn rechargebtnsuccess font18 text-white' onClick={Add_Money}>Proceed to Recharge</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AddRecharge
