//All Burgr components

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Links,NavEnd} from "../components/Navbar"
import Logo from "../images/Frame.png"
import styled from '@emotion/styled'

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

const BurgerContainer = styled.div`
    div{
    display:flex;
    flex-direction:column;
    gap:20px;
    }
`
