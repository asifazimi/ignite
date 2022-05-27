import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.svg";
// Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo"></img>
        <h2>Ignite</h2>
      </Logo>
      <form className="search">
        <input value={textInput} type="text" onChange={inputHandler} />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 2rem 5rem 1rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.3em;
    padding: 0.3rem;
    border: none;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    margin-top: 1rem;
    border-radius: 0.2rem;
  }

  button {
    font-size: 1.3em;
    border: none;
    padding: 0.3rem 1rem;
    cursor: pointer;
    background-color: #ff7676;
    color: #fff;
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

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
