import React from 'react';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';
import logo from "../supplies/Kindwork-K-Logo-2C-40-40.png";

function Navbar({ clicked, handleClick }) {
  return (
    <>
      <NavContainer className="nav-bar">
        <img src={logo} alt="KindWork Logo"></img>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a onClick={handleClick} href="#">
            Home
          </a>
          <a onClick={handleClick} href="#">
            About
          </a>
          <a onClick={handleClick} href="#">
            Contact
          </a>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}



export default Navbar

const NavContainer = styled.nav`
  height: 12vh;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.373);
  padding: .4rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    height: 100px;
    width: auto;
  }
  img:hover{
    cursor: pointer;
  }
  a{
    color: #rgba(0, 0, 0, 0.603);
    text-decoration: none;
    margin-right: 3rem;
    font-weight: 500;
  }
  a:hover {
    border-bottom: 1.5px solid rgb(0, 0, 0);
    color: #000;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: #000;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: #000;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burger{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`