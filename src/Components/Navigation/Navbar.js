import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #5a1b1b;
  display: flex;
  align-items: left;

  .inner-container {
    display: flex;

    .home-title {
      font-size: 18px;
      font-weight: 700;
      margin: auto;
    }
  }
`;

const HamburgerBtn = styled.div`
  width: 15px;

  /* Primary Hamburger Nav*/
  align-items: center;
  cursor: pointer;
  /* display: -webkit-box; */
  display: flex;
  height: 100%;
  margin-top: 1px;
  padding-right: 16px;
  position: relative;
  z-index: 2;

  .inner-lines {
    width: 15px;
  }

  .line {
    background-color: #5a1b1b;
    height: 2px;
    margin-bottom: 3px;
    transform: ${(props) =>
      props.open ? "translateY(4.8px) rotate(45deg)" : "rotate(0deg)"};
    transition-duration: 0.25s;
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
  .line:nth-child(1) {
    transform: ${(props) =>
      props.open ? "translateY(4.8px) rotate(45deg)" : "rotate(0deg)"};
  }
  .line:nth-child(2) {
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  .line:nth-child(3) {
    transform: ${(props) =>
      props.open ? "translateY(-5px) rotate(-45deg)" : "rotate(0deg)"};
  }
`;

const MenuBtn = ({ open, onClick }) => {
  return (
    <HamburgerBtn open={open} onClick={onClick} >
      <div class="inner-lines">
        <div class="line" />
        <div class="line" />
        <div class="line" />
      </div>
    </HamburgerBtn>
  );
};

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleMenuBtnClick = () => setNavIsOpen(!navIsOpen);

  return (
    <Container>
      <div className="inner-container">
        <MenuBtn open={navIsOpen} onClick={handleMenuBtnClick} />
        <div className="home-title">FLUMENA</div>
      </div>
    </Container>
  );
};

export default Navbar;
