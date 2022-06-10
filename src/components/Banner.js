//Contains all Banner components 
import styled from '@emotion/styled'
import {Navbar} from "../components/Navbar"
import {Burger} from "../components/BurgerMenu"
import React, { useState, useEffect } from 'react';

//Accepts banner background image and image. Adds menu as well
export const Banner = ({backgroundimageurl,children}) =>
{
     const [isMobileSize, setisMobileSize] = useState(
        window.matchMedia("(max-width: 932px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(max-width: 932px)")
        .addEventListener('change', e => setisMobileSize( e.matches ));
      }, []);

    return(
        <div>
        <StyledBanner backgroundimageurl={backgroundimageurl}>

            {isMobileSize && (<Burger/>)}
            {!isMobileSize && (<Navbar/>)}       
            {children}
        </StyledBanner>
        </div>
    )
}

//Stylings for Banner

const StyledBanner = styled.div`
    margin:20px;
    padding:40px;
    border-radius:10px;
    min-height:800px;
    background-size:cover !important;
    background-position:center;
    background-repeat:no-repeat;
    background:url('${props => props.backgroundimageurl}');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    flex-wrap:wrap;
    align-content:center;
    box-shadow: 3px 3px 20px #888888cc;
    @media ${props => props.theme.breakpoints.mobile} {
        min-height:500px;
    }

  @media ${props => props.theme.breakpoints.tablet} {
        min-height:500px;
    }

`