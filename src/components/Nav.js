import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo"></img>
        <h2>Ignite</h2>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 2rem 5rem 1rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5em;
    padding: 0.3rem;
    border: none;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    margin-top: 1rem;
  }

  button {
    font-size: 1.5em;
    border: none;
    padding: 0.3rem 1rem;
    cursor: pointer;
    background-color: #ff7676;
    color: #fff;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 1.7rem;
    height: 1.7rem;
  }

  h2 {
    padding: 0;
    font-size: 1.7em;
  }
`;

export default Nav;
