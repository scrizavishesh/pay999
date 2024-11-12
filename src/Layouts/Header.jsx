import React from 'react'
import styled from 'styled-components';

const Headere = styled.div`
    /* height: 10vh; */
    background-color: #F8F8FB;

    .smallScreenCall{
      display: none !important;
    }

    .largeScreenCall{
      display: block !important;
    }

    @media screen and (max-width: 498px) and (min-width: 3px) {
      .textofhelpSupport{
        display: none !important;
      }
    }
    @media screen and (max-width: 399px) and (min-width: 3px) {
      .smallScreenCall{
        display: block !important;
      }
      
      .largeScreenCall{
        display: none !important;
      }
    }
`;

const Header = () => {
  return (
    <>
      <Headere className='row'>
        <div className="row">
          <div className="col-md-1 col-sm-1 col-1"></div>
          <div className="col-md-10 col-sm-10 col-10">
            <div className="row pt-3 pb-3 bigscreenHeader">
              <div className="col-lg-4 col-md-8 col-sm-8 col-8 align-self-center">
                <div className="row largeScreenCall">
                  {/* <span className='font15 font500Weight'>Call: <span className='grey1Font'>+1-541-754-3010</span></span> */}
                  <span className='ms-2 font15 font500Weight'>Mail: <span className='grey1Font'><a className='text-decoration-none' href="mailto:admin@finconnect24.com">admin@finconnect24.com</a></span></span>
                </div>
                <div className="row smallScreenCall">
                  <span className='font15 font500Weight'>Call:</span>
                  <span className='ms-2 font15 font500Weight'>Mail:</span>
                </div>
              </div>
              <div className="col-lg-4 text-center headermidline font15 font400Weight align-self-center">
                <span className='grey1Font'>We have special offers every day. </span><span className='red1Font'> Find your offer ☺️</span>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4 font15 font400Weight grey1Font align-self-center text-end">
                <div className="row ">
                  <div className="col-lg-4 col-md-2"></div>
                  <div className="col-lg-4 col-md-5 col-sm-6 col-6 text-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="#A4ADB6" d="M5 20q-.825 0-1.412-.587T3 18v-7q0-1.85.713-3.488T5.65 4.65q1.225-1.225 2.863-1.937T12 2q1.85 0 3.488.713T18.35 4.65q1.225 1.225 1.938 2.863T21 11v10q0 .825-.587 1.413T19 23h-6q-.425 0-.712-.288T12 22q0-.425.288-.712T13 21h6v-1h-2q-.825 0-1.412-.587T15 18v-4q0-.825.588-1.412T17 12h2v-1q0-2.9-2.05-4.95T12 4Q9.1 4 7.05 6.05T5 11v1h2q.825 0 1.413.588T9 14v4q0 .825-.587 1.413T7 20z" />
                      </svg>
                      <span className='ms-1 textofhelpSupport'>Support</span>
                    </span>
                  </div>
                  <div className="col-lg-4 col-md-5 col-sm-6 col-6 text-center">
                    <span className=' text-end'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 256 256">
                        <path fill="#A4ADB6" d="M140 180a12 12 0 1 1-12-12a12 12 0 0 1 12 12M128 72c-22.06 0-40 16.15-40 36v4a8 8 0 0 0 16 0v-4c0-11 10.77-20 24-20s24 9 24 20s-10.77 20-24 20a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-.72c18.24-3.35 32-17.9 32-35.28c0-19.85-17.94-36-40-36m104 56A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" />
                      </svg>
                      <span className='ms-1 textofhelpSupport'>Help</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row smallscreenHeader"></div>
          </div>
          <div className="col-md-1 col-sm-11 col-1 p-0"></div>
        </div>
      </Headere>
    </>
  )
}

export default Header
