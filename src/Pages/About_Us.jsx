import React, { useState } from 'react';
import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';
import Navbar from '../Layouts/Navbar';
import styled from 'styled-components';
import HashLoader from '../Layouts/Loader';
import { Icon } from '@iconify/react';

const Container = styled.div`
  .pink2ndRow {
    background-color: var(--pinkBg);
  }
`;

const AboutUs = () => {
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
            <div className="col-md-1 col-sm-1 col-1"></div>
            <div className="col-md-10 col-sm-10 col-10">
              <section className="py-3 py-md-5">
                <div className="container">
                  <div className="mb-5">
                    <h3>About Us</h3>
                    <p>
                      Welcome to Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED
), your trusted partner in effortless and efficient mobile recharge solutions. At Pay999, we believe in simplifying the way you stay connected with your loved ones and manage your mobile services.
                    </p>
                  </div>
                  <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                    <div className="col-12 col-lg-6 col-xl-5">
                      <img className="img-fluid rounded" loading="lazy" src="/images/imageServer2.svg" alt="Pay999 Team" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7">
                      <div className="row justify-content-xl-center">
                        <div className="col-12 col-xl-11">
                          <h2 className="mb-3">Who Are We?</h2>
                          <p>
                            Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED) is a leading provider of innovative recharge software and applications, dedicated to offering seamless and secure recharge experiences for users across the globe. Our team of experienced professionals is committed to delivering top-notch technology that meets the ever-evolving needs of our customers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center mt-5">
                    <div className="col-12 col-lg-6 col-xl-7">
                      <div className="row justify-content-xl-center">
                        <div className="col-12 col-xl-11">
                          <h2 className="mb-3">Our Mission</h2>
                          <p>
                            Our mission is to empower individuals with the tools they need to manage their mobile services effortlessly. We aim to provide a user-friendly platform that ensures quick, reliable, and hassle-free recharges, making connectivity more accessible and convenient for everyone.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                      <img className="img-fluid rounded" loading="lazy" src="/images/imageServer1.svg" alt="Pay999 Mission" />
                    </div>
                  </div>
                  <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center mt-5">
                    <div className="col-12">
                      <div className="row justify-content-xl-center">
                        <div className="col-12 col-xl-11">
                          <h2 className="mb-3">What We Offer</h2>
                          <p>
                            Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED) is a leading provider of innovative recharge software and applications, dedicated to offering seamless and secure recharge experiences for users across the globe. Our team of experienced professionals is committed to delivering top-notch technology that meets the ever-evolving needs of our customers.
                          </p>
                          <div className="row gy-4 gy-md-0 gx-xxl-5">
                            <div className="col-12 col-md-6">
                              <div className="d-flex">
                                <div className="me-4 text-primary">
                                  <Icon icon="tabler:recharging" width="2rem" height="2rem" style={{ color: "#E91706" }} />
                                </div>
                                <div>
                                  <h2 className="h4 mb-3">Instant Recharge</h2>
                                  <p className="text-secondary mb-0">
                                    Our platform supports instant recharge for a wide range of mobile operators. With just a few clicks, you can top up your phone and stay connected without interruption.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="d-flex">
                                <div className="me-4 text-primary">
                                  <Icon icon="tdesign:undertake-transaction" width="2rem" height="2rem" style={{ color: "#E91706" }} />
                                </div>
                                <div>
                                  <h2 className="h4 mb-3">Secure Transactions</h2>
                                  <p className="text-secondary mb-0">
                                    We prioritize your security. Our advanced encryption technology ensures that your transactions are safe and your personal information is protected.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="d-flex">
                                <div className="me-4 text-primary">
                                  <Icon icon="nimbus:mobile" width="2rem" height="2rem" style={{ color: "#E91706" }} />
                                </div>
                                <div>
                                  <h2 className="h4 mb-3">User-Friendly Interface</h2>
                                  <p className="text-secondary mb-0">
                                    Designed with simplicity in mind, our application offers an intuitive interface that makes recharging easy for users of all ages.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="d-flex">
                                <div className="me-4 text-primary">
                                  <Icon icon="mdi:support" width="2rem" height="2rem" style={{ color: "#E91706" }} />
                                </div>
                                <div>
                                  <h2 className="h4 mb-3">24/7 Customer Support</h2>
                                  <p className="text-secondary mb-0">
                                    Our dedicated customer support team is available around the clock to assist you with any queries or issues you may encounter.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center mt-5">
                    <div className="col-12 col-lg-6 col-xl-5">
                      <img className="img-fluid rounded" loading="lazy" src="/images/imageServer.svg" alt="Pay999 Benefits" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7">
                      <div className="row justify-content-xl-center">
                        <div className="col-12 col-xl-11">
                          <h2 className="mb-3">Why Choose Us</h2>
                          <p>
                            At Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED
), we are passionate about technology and customer satisfaction. We constantly innovate to provide you with the best recharge solutions in the market. Whether you need to recharge your own phone or manage multiple accounts, our platform offers a convenient and reliable solution.
                          </p>
                          <p>
                            Join the thousands of satisfied customers who trust Pay999(FINCONNECT24 IT SOLUTION PRIVATE LIMITED
) for their mobile recharge needs. Stay connected, stay recharged, and experience the difference with us.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <Footer />
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
