//All BORGOR components. Stylings for borgor menu in index.css
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Links,NavEnd} from "../components/Navbar"
import Logo from "../images/Frame.png"
import styled from '@emotion/styled'

//Burger menu
export const Burger = ({props}) => {
  return (
    <Menu>
    <BurgerContainer>
        <img src={Logo} style={{paddingBottom:'30px'}}/>
        <Links/>
        <div style={{paddingBottom:'20px'}} />
        <NavEnd/>  
    </BurgerContainer>

    </Menu>
  );
};

//Container styling
const BurgerContainer = styled.div`
    div{
    display:flex;
    flex-direction:column;
    gap:20px;
    }
`
