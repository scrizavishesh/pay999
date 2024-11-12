import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src="./images/error.svg" alt="error" width="600px" />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: #F71D00;
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow:  rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: #F71D00;
    font-size: 1.8rem;
  }
`;

export default Error;