import React from 'react';
import styled from 'styled-components';


const MenuContainer = styled.div`
  width: 280px;
  position: absolute;
  left: ${props => props.show ?  "0" : "-280"}px;

`;

const MenuItem = styled.div` 
  :hover { background: #f5f5f5;}
`;

const NavMenu = ({ show, items, onClick }) => (
  <MenuContainer show={show}>
    <MenuItem>Home</MenuItem>
    <MenuItem>Search Location</MenuItem>
    <MenuItem>Search Activities</MenuItem>
    <MenuItem>About</MenuItem>
  </MenuContainer>
);

export default NavMenu;
