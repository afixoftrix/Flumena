import React from "react";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";
import styled from "styled-components";

const Navigation = styled.div`
  position: relative;
`;

const NavigationBar = () => (
  <Navigation>
    <Navbar />
    <NavMenu />
  </Navigation>
);

export default NavigationBar;
