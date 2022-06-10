import { useState } from 'react';
import {FormButton} from "../components/Buttons"
import styled from '@emotion/styled'
import {MiddleWrap} from "../components/Containers"


export const Form = ({}) =>
{
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
      });

      const [response, setResponse] = useState({
        message:'',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();

        console.log("hiiii")

        if(toSend.name==="" || toSend.email==="" || toSend.message==="")
        {
          setResponse({message:'Please fill out all fields!'})
        }
        else 
        {
          if(toSend.email.includes('@'))
          {
            setResponse({message:'Sent!'})
            setToSend({
                name:'',
                email:'',
                message:''
              })
          }
          else
          {
            setResponse({message:'Please enter a valid email address'})
          }
        }
      };

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
      
    return(

       <StyledForm onSubmit={onSubmit}>
       <MiddleWrap>
            <StyledInput type="text" name="name" placeholder="Your name" value={toSend.name} onChange={handleChange} required/><br/>
            <StyledInput type="email" name="email" placeholder="Email address" value={toSend.email} onChange={handleChange} required/><br/>
            <StyledTextArea name="message" value={toSend.message} placeholder="Message" onChange={handleChange} required/>
            <StyledLabel>{response.message}</StyledLabel><br/>
            <FormButton type="submit">Talk to a Sales Rep</FormButton>           
       </MiddleWrap>
       </StyledForm>        
    );
}



export const StyledForm = styled.form`
  margin-bottom: 30px;
  width:90%;
`


export const StyledLabel = styled.label`
    font-size: 13px;
    font-family: ${props=>props.theme.fonts.body};
    font-weight:bold;
    text-transform:uppercase;
    color: black;
    margin-bottom: 10px;
`

export const StyledInput = styled.input`
    font-size: ${props=>props.theme.psizes.desktop};
    font-family: ${props=>props.theme.fonts.body};
    color: #757575;
    margin-bottom: 10px;
    border-radius: 10px;
    height:40px;
    width:100%;
    border: 1px solid #CCCCCC;
    padding: 8px 18px 8px 18px;

    @media ${props => props.theme.breakpoints.mobile} {
    width:100%;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width:100%;
  }

`

export const StyledTextArea = styled.textarea`
    font-size: ${props=>props.theme.psizes.desktop};
    font-family: ${props=>props.theme.fonts.body};
    color: #757575;
    border-radius: 10px;
    height:70px;
    margin-bottom:15px;
    width:100%;
    border: 1px solid #CCCCCC;
    padding: 8px 18px 8px 18px;

    
    @media ${props => props.theme.breakpoints.mobile} {
        width:100%;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width:100%;
  }
`