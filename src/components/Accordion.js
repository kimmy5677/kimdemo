//All Accordion Components.

import styled from '@emotion/styled'
import {H1,H2,H3,P,Accent,ListItem} from "../components/Text"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import Minus from "../images/minus-circle.svg"
import Plus from "../images/plus-circle.svg"


//Accordion. Accepts object contaning FAQs. Returns full list of FAQs
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

//A single accordion item. Accepts FAQ title and answer and return a single accordion item
const AccordionSingle = ({title,answer}) =>
{
    const [isActive, setIsActive] = useState(false);
    return(
        <AccordionItem>
        <AccordionTitle onClick={()=>setIsActive(!isActive)}>
            <H3 style={{textAlign:'left'}}>{title}</H3>
            {isActive ? <img src={Minus} style={{paddingTop:"18px"}}/> : <img src={Plus} style={{paddingTop:"18px"}}/>  }
        </AccordionTitle>
        <AccordionContent>
            {isActive ?  <P style={{textAlign:'left'}} align="left">{answer}</P> : ""  }
        </AccordionContent>   
    </AccordionItem>
    )
}

//Stylings for accordion components 

const AccordionItem = styled.div`
    border: 1px solid #e3e5e8;
    border-radius:10px;
    width:100%;
    padding: 0px 20px 20px 20px;
    margin-top:5px;
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
    width:80%;
    @media ${props => props.theme.breakpoints.mobile} {
    width:100%;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width:100%;

  }
`