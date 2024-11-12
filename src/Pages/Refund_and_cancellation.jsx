import React, { useState, useEffect } from 'react'
import Footer from '../Layouts/Footer'
import Header from '../Layouts/Header'
import Navbar from '../Layouts/Navbar'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HashLoader from '../Layouts/Loader';

const Container = styled.div`
  

  .pink2ndRow{
    background-color: var(--pinkBg);
  }

`;


const Refund_and_cancellation = () => {


    const [showLoader, setShowLoader] = useState(false);

    const handleDataFromChild = (data) => {
        setShowLoader(data);
    };


    return (
        <>
            {showLoader && <HashLoader />}
            <Container>
                <div className="container-fluid">
                    <Header />
                    <Navbar sendDataToParent={handleDataFromChild} />

                    <div class="row pink2ndRow">
                        <div className='mt-5'>
                            <div className='d-flex justify-content-center'>
                                <h2>Refund and cancellation</h2>
                            </div>
                        </div>
                        <div class="col-md-1 col-sm-1 col-1"></div>
                        <div class="col-md-10 col-sm-10 col-10">
                            <div class="container mt-5">
                                <div class="section">
                                    {/* <h2 class="font22 uppercase font600">Refund and Cancellation Policy</h2> */}
                                    <h3 class="font22 uppercase font600">Cancellation</h3>
                                    <ul>
                                        <li class="font18 uppercase font600">Subscription Services</li>
                                        <ul>
                                            <li class="font16">You may cancel your subscription at any time by logging into your account and following the cancellation procedures or by contacting our customer support.</li>
                                            <li class="font16">Upon cancellation, you will continue to have access to the subscription services until the end of your current billing period. No refunds will be provided for any unused portion of a subscription period.</li>
                                        </ul>
                                        <li class="font18 uppercase font600">One-Time Purchases</li>
                                        <ul>
                                            <li class="font16">For one-time purchases, cancellations are not permitted once the purchase has been completed.</li>
                                        </ul>
                                    </ul>

                                    <h3 class="font22 uppercase font600">Refunds</h3>
                                    <ul>
                                        <li class="font18 uppercase font600">Subscription Services</li>
                                        <ul>
                                            <li class="font16">Refunds for subscription services are generally not provided, except in the following circumstances:</li>
                                            <ul>
                                                <li class="font16">If you experience technical issues that prevent you from accessing the subscription services, and our technical support team is unable to resolve the issue within a reasonable timeframe.</li>
                                                <li class="font16">If there is an error in billing or an unauthorized charge, we will investigate and, if applicable, provide a refund.</li>
                                            </ul>
                                        </ul>
                                        <li class="font18 uppercase font600">One-Time Purchases</li>
                                        <ul>
                                            <li class="font16">Refunds for one-time purchases are generally not provided, except in the following circumstances:</li>
                                            <ul>
                                                <li class="font16">If you experience technical issues that prevent you from accessing the purchased content or service, and our technical support team is unable to resolve the issue within a reasonable timeframe.</li>
                                                <li class="font16">If there is an error in billing or an unauthorized charge, we will investigate and, if applicable, provide a refund.</li>
                                            </ul>
                                        </ul>
                                    </ul>

                                    <h3 class="font22 uppercase font600">How to Request a Refund</h3>
                                    <p class="font16">
                                        To request a refund, please contact our customer support team at [Your email address] with your order details and a description of the issue. We will review your request and, if applicable, process your refund within [number] business days.
                                    </p>

                                    <h3 class="font22 uppercase font600">Changes to Cancellation and Refund Policy</h3>
                                    <p class="font16">
                                        We may update our Cancellation and Refund Policy from time to time. If we make material changes, we will notify you by updating the date at the top of the policy and, in some cases, we may provide additional notice (such as adding a statement to our homepage or sending you a notification). By continuing to use the Services after the changes come into effect, you agree to be bound by the revised policy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <Footer />
                </div>
            </Container>
        </>

    )
}

export default Refund_and_cancellation



