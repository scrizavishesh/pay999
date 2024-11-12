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


const Carrer = () => {


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
          <div className="row pink2ndRow">
            <div class="col-md-1 col-sm-1 col-1"></div>
            <div class="col-md-10 col-sm-10 col-10">
              <div class="container mt-5">
                <h1 class="font22 uppercase font600">Contact Us</h1>
                <p class="font16">
                  If you have any questions about our refund policy, please contact us at <a href="mailto:admin@finconnect24.com">admin@finconnect24.com</a>. Our customer support team is available to assist you and address any concerns you may have.
                </p>

                <div class="section">
                  <h2 class="font22 uppercase font600">Refund Policy</h2>
                  <p class="font16">
                    At Pay 999, we are committed to providing our customers with the best possible experience. If you are not entirely satisfied with your purchase, we're here to help.
                  </p>
                </div>

                <div class="section">
                  <h3 class="font22 uppercase font600">Refund Eligibility</h3>
                  <ul>
                    <li class="font16">You must request a refund within 15 days of the original purchase.</li>
                    <li class="font16">The product or service must be unused and in the same condition as you received it.</li>
                    <li class="font16">You must provide proof of purchase, such as a receipt or order confirmation.</li>
                  </ul>
                </div>

                <div class="section">
                  <h3 class="font22 uppercase font600">Refund Process</h3>
                  <p class="font16">
                    To request a refund, please contact our customer support team at <a href="mailto:admin@finconnect24.com">admin@finconnect24.com</a>. Our team will guide you through the refund process and may ask for additional information to process your request.
                  </p>
                  <p class="font16">
                    Once your refund request is approved, we will initiate a refund to your original method of payment. The time it takes for the refund to reflect in your account may vary depending on your bank or payment provider.
                  </p>
                </div>

                <div class="section">
                  <h3 class="font22 uppercase font600">Non-Refundable Items</h3>
                  <p class="font16">
                    Certain products or services may not be eligible for refunds. These include:
                  </p>
                  <ul>
                    <li class="font16">Subscription fees or recurring charges.</li>
                    <li class="font16">Downloadable digital products once they have been accessed or downloaded.</li>
                    <li class="font16">Services that have already been provided or used.</li>
                  </ul>
                </div>

                <div class="section">
                  <h3 class="font22 uppercase font600">Changes to This Policy</h3>
                  <p class="font16">
                    We reserve the right to modify or update this refund policy at any time. Any changes will be effective immediately upon posting on our website. We encourage you to review this policy periodically for any updates.
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

export default Carrer
