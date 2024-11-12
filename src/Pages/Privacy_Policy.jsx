


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


const Privacy_Policy = () => {


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
                            <h2>Privacy Policy</h2>
                        </div>
                    </div>
                        <div class="col-md-1 col-sm-1 col-1"></div>
                        <div class="col-md-10 col-sm-10 col-10">
                            <div class="container mt-5">
                                <h1 class="font22 uppercase font600">Introduction</h1>
                                <p class="font16">
                                    Welcome to Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED)! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you use our website, mobile applications, and other online products and services (collectively, the "Services").
                                </p>

                                <div class="section">
                                    <h3 class="font22 uppercase font600">Information We Collect</h3>
                                    <ul>
                                        <li class="font18 uppercase font600">Information You Provide to Us</li>
                                        <ul>
                                            <li class="font16"><strong>Account Information:</strong> When you create an account, we collect your name, email address, password, and other information you provide.</li>
                                            <li class="font16"><strong>Profile Information:</strong> You may choose to provide additional information for your profile, such as a profile picture, bio, and social media links.</li>
                                            <li class="font16"><strong>Payment Information:</strong> If you make a purchase, we collect payment information necessary to process your payment.</li>
                                            <li class="font16"><strong>Communications:</strong> We collect information when you communicate with us, such as when you send us emails or messages.</li>
                                        </ul>
                                        <li class="font18 uppercase font600">Information We Collect Automatically</li>
                                        <ul>
                                            <li class="font16"><strong>Usage Information:</strong> We collect information about your interactions with the Services, including the pages or content you view, your searches, and other actions.</li>
                                            <li class="font16"><strong>Device Information:</strong> We collect information about the devices you use to access the Services, including the hardware model, operating system, device identifiers, and mobile network information.</li>
                                            <li class="font16"><strong>Location Information:</strong> We may collect and process information about your location.</li>
                                        </ul>
                                        <li class="font18 uppercase font600">Information from Third Parties</li>
                                        <p class="font16">
                                            We may receive information about you from other sources, such as social media platforms, and combine it with information we collect through our Services.
                                        </p>
                                    </ul>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">How We Use Your Information</h2>
                                    <ul>
                                        <li class="font16">Provide, maintain, and improve our Services;</li>
                                        <li class="font16">Process transactions and send related information;</li>
                                        <li class="font16">Communicate with you, including responding to your comments and questions;</li>
                                        <li class="font16">Personalize and improve the Services and provide content or features that match user profiles or interests;</li>
                                        <li class="font16">Monitor and analyze trends, usage, and activities in connection with our Services;</li>
                                        <li class="font16">Detect, investigate, and prevent fraudulent transactions and other illegal activities;</li>
                                        <li class="font16">Comply with legal obligations.</li>
                                    </ul>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">Sharing Your Information</h2>
                                    <ul>
                                        <li class="font16"><strong>With your consent:</strong> We may share or disclose your information with your consent or at your direction.</li>
                                        <li class="font16"><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf.</li>
                                        <li class="font16"><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
                                        <li class="font16"><strong>Legal Requirements:</strong> We may disclose your information if we believe it is necessary to comply with a legal obligation or to protect the rights, property, or safety of Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED), our users, or others.</li>
                                    </ul>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">Security</h2>
                                    <p class="font16">
                                        We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                                    </p>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">Your Choices</h2>
                                    <ul>
                                        <li class="font16"><strong>Account Information:</strong> You may update, correct, or delete information about you at any time by logging into your account or contacting us.</li>
                                        <li class="font16"><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can choose to set your browser to remove or reject cookies, but this may affect your ability to use our Services.</li>
                                    </ul>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">Changes to this Privacy Policy</h2>
                                    <p class="font16">
                                        We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide additional notice (such as adding a statement to our homepage or sending you a notification).
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

export default Privacy_Policy

