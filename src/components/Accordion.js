//All Accordion Components.

import styled from '@emotion/styled'
import {H1,H2,H3,P,Accent,ListItem} from "../components/Text"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';




export const Accordion = ({listitems}) =>
{
    const itemList = listitems.map(({title,answer}) => {

        return(
            <AccordionSingle title={title} answer={answer} />
        )

    }

    );


    return(
        <div style={{width:"100%",marginTop:"40px"}}>
        {itemList}
        </div>

    )

}


const AccordionSingle = ({title,answer}) =>
{
    const [isActive, setIsActive] = useState(false);
    return(
        <AccordionItem>
        <AccordionTitle onClick={()=>setIsActive(!isActive)}>
            <H3 style={{textAlign:'left'}}>{title}</H3>
            {isActive ? <FontAwesomeIcon icon={faMinus} style={{color:'#5538CD',paddingTop:'26px'}}/> :
            <FontAwesomeIcon icon={faPlus} style={{color:'#5538CD',paddingTop:'26px'}}/>  }
        </AccordionTitle>
        <AccordionContent>
            {isActive ?  <P style={{textAlign:'left'}} align="left">{answer}</P> : ""  }
        </AccordionContent>   
    </AccordionItem>

    )

}

const AccordionItem = styled.div`
    border: 1px solid #e3e5e8;
    border-radius:10px;
    width:100%;
    padding: 0px 20px 20px 20px;
    margin-top:20px;
    margin-bottom:20px;
    @media ${props => props.theme.breakpoints.mobile} {
    width:90%;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width:90%;

  }
`

const AccordionTitle = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    cursor: pointer;

`
const AccordionContent = styled.div`

`