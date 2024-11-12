import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components';
import HomePage from '../Pages/HomePage'
import HistoryPage from '../Pages/HistoryPage';
import MobileRecharge from '../Pages/MobileRecharge';
import DTHRecharge from '../Pages/DTHRecharge';
import PrivateRoutes from '../Hooks/authenticationPage';
import Error from '../Pages/Error';
import Carrer from '../Pages/Carrer';
import Privacy_Policy from '../Pages/Privacy_Policy';
import Terms_and_condition from '../Pages/Terms_and_condition';
import Refund_and_cancellation from '../Pages/Refund_and_cancellation';
import About_Us from '../Pages/About_Us';
import AddRecharge from '../Pages/AddRecharge';

const Container = styled.div`
  
`;

const Main = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path='/paymenthistory' element={<HistoryPage />} />
            <Route exact path='/mobileRecharge/:id/:name' element={<MobileRecharge />} />
            <Route exact path='/otherServices/:id/:name' element={<DTHRecharge />} />
          </Route>
          <Route exact path='contact' element={<Carrer />} />
          <Route exact path='privacy_policy' element={<Privacy_Policy />} />
          <Route exact path='terms_and_condition' element={<Terms_and_condition />} />
          <Route exact path='refund_and_cancellation' element={<Refund_and_cancellation />} />
          <Route exact path='about_us' element={<About_Us />} />
          <Route exact path='add_money' element={<AddRecharge />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </>
  )
}

export default Main