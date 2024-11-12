import React from 'react'
import styled from 'styled-components';
import Main from '../Main/Main';
import Footer from '../Layouts/Footer';

const Container = styled.div`
    background-color: #fff;
`;


const MainLayout = () => {
  return (
    <>
        <Container>
          <Main style={{overflow: 'scroll'}}/>
        </Container>
    </>
  )
}

export default MainLayout