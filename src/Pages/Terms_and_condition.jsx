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


const Terms_and_condition = () => {


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
                            <h2>Terms and condition</h2>
                        </div>
                    </div>
                        <div class="col-md-1 col-sm-1 col-1"></div>
                        <div class="col-md-10 col-sm-10 col-10">
                            <div class="container mt-5">
                                <h1 class="font22 uppercase font600">Terms and Conditions</h1>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">1. Introduction</h2>
                                    <p class="font16">
                                        Welcome to Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED). These Terms and Conditions ("Terms") govern your use of our website, mobile applications, and other online products and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                                    </p>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">2. Use of Services</h2>
                                    <h3 class="font18 uppercase font600">Eligibility</h3>
                                    <p class="font16">
                                        You must be at least [minimum age] years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement.
                                    </p>
                                    <h3 class="font18 uppercase font600">Account Registration</h3>
                                    <p class="font16">
                                        To access certain features of our Services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
                                    </p>
                                    <h3 class="font18 uppercase font600">Prohibited Conduct</h3>
                                    <ul>
                                        <li class="font16">Use the Services for any illegal purpose or in violation of any local, state, national, or international law;</li>
                                        <li class="font16">Harass, threaten, demean, embarrass, or otherwise harm any other user of our Services;</li>
                                        <li class="font16">Violate, misappropriate, or infringe the rights of Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED), our users, or others, including privacy, publicity, intellectual property, or other proprietary rights;</li>
                                        <li class="font16">Interfere with or disrupt the Services, servers, or networks connected to the Services;</li>
                                        <li class="font16">Use any robot, spider, crawler, scraper, or other automated means or interface not provided by us to access the Services or to extract data;</li>
                                        <li class="font16">Reverse engineer any aspect of the Services or do anything that might discover source code or bypass measures employed to prevent or limit access to any area, content, or code of the Services.</li>
                                    </ul>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">3. Content</h2>
                                    <h3 class="font18 uppercase font600">Your Content</h3>
                                    <p class="font16">
                                        You may post, upload, or otherwise contribute content to the Services ("Your Content"). You retain all rights in and are solely responsible for Your Content. By making Your Content available through the Services, you grant to Pay9999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED) a non-exclusive, transferable, sub-licensable, worldwide, royalty-free license to use, copy, modify, create derivative works based upon, distribute, publicly display, and publicly perform Your Content in connection with operating and providing the Services.
                                    </p>
                                    <h3 class="font18 uppercase font600">Pay999 Content</h3>
                                    <p class="font16">
                                        The Services and its contents, including all text, graphics, images, information, and other material, are owned by Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED) or our licensors and are protected by copyright, trademark, and other laws. You may not use, copy, modify, create derivative works based upon, distribute, publicly display, or publicly perform any Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED) content without our prior written consent.
                                    </p>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">4. Payment and Refunds</h2>
                                    <h3 class="font18 uppercase font600">Fees</h3>
                                    <p class="font16">
                                        Some features of our Services may require you to pay fees. All fees are non-refundable except as required by law.
                                    </p>
                                    <h3 class="font18 uppercase font600">Payment Information</h3>
                                    <p class="font16">
                                        You agree to provide accurate and complete payment information and authorize us to charge all fees incurred through your account.
                                    </p>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">5. Termination</h2>
                                    <p class="font16">
                                        We may terminate or suspend your access to all or part of the Services, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
                                    </p>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">6. Disclaimers and Limitation of Liability</h2>
                                    <h3 class="font18 uppercase font600">Disclaimers</h3>
                                    <p class="font16">
                                        The Services are provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content available on or through the Services or the content of any websites linked to the Services.
                                    </p>
                                    <h3 class="font18 uppercase font600">Limitation of Liability</h3>
                                    <p class="font16">
                                        To the maximum extent permitted by law, Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED) shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                                    </p>
                                    <ul>
                                        <li class="font16">Your use of or inability to use the Services;</li>
                                        <li class="font16">Any unauthorized access to or use of our servers and/or any personal information stored therein;</li>
                                        <li class="font16">Any interruption or cessation of transmission to or from the Services;</li>
                                        <li class="font16">Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Services by any third party;</li>
                                        <li class="font16">Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Services.</li>
                                    </ul>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">7. Governing Law and Dispute Resolution</h2>
                                    <p class="font16">
                                        These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles. Any disputes arising out of or in connection with these Terms or the Services shall be resolved exclusively through arbitration in [Your Country/State].
                                    </p>
                                </div>

                                <div class="section">
                                    <h2 class="font22 uppercase font600">8. Changes to Terms</h2>
                                    <p class="font16">
                                        We may modify these Terms at any time. If we make material changes, we will notify you by updating the date at the top of the Terms and, in some cases, we may provide additional notice (such as adding a statement to our homepage or sending you a notification). By continuing to use the Services after the changes come into effect, you agree to be bound by the revised Terms.
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

export default Terms_and_condition


