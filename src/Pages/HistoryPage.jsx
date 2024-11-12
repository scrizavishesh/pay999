import React, { useEffect, useState } from 'react'
import HashLoader from '../Layouts/Loader'
import { checkHistory } from '../utils/Constants'
import ReactPaginate from 'react-js-pagination';
import styled from 'styled-components';
import Navbar2 from '../Layouts/Navbar2';
import Profile from '../Modals/Profile';
import Footer from '../Layouts/Footer';


const Container = styled.div`
  
  .gretTText{
    color: var(--greyTableData);
  }
  .successTText{
    color: var(--greenTableData);
  }

  .pink2ndRow{
    background-color: var(--pinkBg);
  }

  .rechargebtnsuccess{
    background-image: linear-gradient(133deg, #F71D00 , #BC041B);
  }

  .form-control::placeholder, .form-select::placeholder{
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
  }

  .white6thRow, .white7thRow{
    background-color: var(--greyDivBg);
  }

  .greeyy3boxes{
    width: fit-content;
    border-radius: 150px 10px;
    background-color: var(--greyBoxBg);
    box-shadow: 4px 4px 14px 0px var(--greyBoxeShadow);
  }
  
  .greycirclediv{
    margin-left: -15%;
    margin-top: -12%;
  }

  .imgpay999{
    height: 40px;
    width: fit-content;
  }

  .card1{
    border-radius: 10px;
  }

`;






const HistoryPage = () => {

  const token = localStorage.getItem("pay999-token");
  const profileDetails = JSON.parse(localStorage.getItem("profileDetails"));

  const [historyAllTransation, sethistoryAllTransation] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [current_page, setPageNo] = useState(1);

  useEffect(() => {
    historySection(current_page);
  }, [current_page])

  const historySection = async (pageNo) => {
    const formData = new FormData();
    formData.append("api_token", token);
    const requestedData = {
      per_page: 10,
      current_page: pageNo,
    };

    // console.log(current_page, "current")

    setShowLoader(true)
    try {
      const response = await checkHistory(requestedData, formData);
      // console.log(response, "History");
      if (response?.status === 200) {
        sethistoryAllTransation(response?.data?.reports);
        setTotalItemsCount(response?.data?.total);
        setShowLoader(false)
      }
    } catch (err) {
      console.log(err);
      setShowLoader(false);
    }
  };

  const handlePageChange = (current_page) => {
    setPageNo(current_page);
    historySection(current_page);
  };


  return (
    <>
      {showLoader && <HashLoader />}
      <Container className=' bg-white'>
        <div className='container-fluid'>
          <Navbar2 />
          <div className='row table-responsive-lg table-responsive-md table-responsive-sm' style={{ height: '81vh' }}>
            <table class="table table-sm">
              <thead className='table-secondary'>
                <tr>
                  <th className='font16 font500Weight'></th>
                  <th className='font16 font500Weight'>Name</th>
                  <th className='font16 font500Weight'>Number</th>
                  <th className='font16 font500Weight'>Date & time</th>
                  <th className='font16 font500Weight'>Transaction Amt.</th>
                  <th className='font16 font500Weight'>Transaction ID</th>
                  <th className='font16 font500Weight'>Transaction Status</th>
                </tr>
              </thead>
              <tbody>
                {historyAllTransation?.length !== 0 ? (
                  historyAllTransation?.map((history) => {
                    return (
                      <tr>
                        <td className='ps-3'><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 37 37" fill="none">
                          <circle cx="18.5" cy="18.5" r="18.5" fill="#D9D9D9" />
                        </svg></td>
                        <td className='font500Weight pt-2'>{history?.user}</td>
                        <td className='font500Weight gretTText pt-2'>{history?.number}</td>
                        <td className='font500Weight historytabletext pt-2'>{history?.created_at}</td>
                        <td className='font500Weight gretTText pt-2'>₹{history?.amount}</td>
                        <td className='font500Weight successTText pt-2'>{history?.txnid}</td>
                        <td className='font500Weight gretTText pt-2' style={history?.status === "Failure" ? { color: "#F71D00" } : { color: "#07A603" }}>{history?.status}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td style={{ textAlign: "center" }} colSpan={6}>
                      No data found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {historyAllTransation?.length !== 0 && (
              <PaginationContainer>
                <ReactPaginate
                  activePage={current_page}
                  itemsCountPerPage={10} // Set your items per page
                  totalItemsCount={totalItemsCount} // Set your total items count
                  pageRangeDisplayed={5}
                  onChange={(e) => handlePageChange(e)}
                  prevPageText="Previous"
                  nextPageText="Next"
                  firstPageText="First"
                  lastPageText="Last"
                  innerClass="pagination"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeLinkClass="active"
                  disabledClass="disabled"
                  itemClassLast="last-page"
                  itemClassFirst="first-page"
                  linkClassFirst="first-link"
                  linkClassLast="last-link"
                />
              </PaginationContainer>
            )}
          </div>
        </div>
      </Container>

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
      <Footer />
    </>
  )
}

export default HistoryPage