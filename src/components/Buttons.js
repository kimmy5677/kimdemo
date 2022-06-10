//All buttons including transparent button, white button, submit form button. 
import styled from '@emotion/styled'

export const Buttons = ({children,variant,href,style}) =>
{
    return(
        <StyledButton variant={variant} href={href} style={style}>{children}</StyledButton>
    )

}


export const Links = styled.a`
    color:black;
    cursor:pointer;
    font-size:${props=>props.theme.miscsizes.linksize};
    font-family:${props=>props.theme.fonts.body};
    font-weight:400;
    text-decoration:none;
    &:hover{
        background:${props => props.variant==='clear' ? "white":"none" };
        color:${props => props.theme.colors.purple};   
    }
`

const StyledButton = styled.a`
    background:${props => props.variant==='clear' ? "none":"white" };
    color:${props => props.variant==='clear' ? "white": props.theme.colors.purple };
    border:1px solid white;
    padding: 12px 31px;
    min-width:150px;
    text-align:center;
    border-radius:5px;
    cursor:pointer;
    font-family:${props=>props.theme.fonts.body};
    font-weight:600;
    font-size:${props=>props.theme.miscsizes.buttons};
    transition: all 0.3s linear;
    &:hover{
        background:${props => props.variant==='clear' ? "white":"none" };
        color:${props => props.variant==='clear' ?  props.theme.colors.purple : "white" };   
    }
`

export const FormButton = styled.button`
    background:${props => props.theme.colors.purple };
    color:white;
    border:1px solid ${props => props.theme.colors.purple };
    padding: 12px 31px;
    min-width:150px;
    text-align:center;
    width:100%;
    cursor:pointer;
    border-radius:5px;
    font-family:${props=>props.theme.fonts.body};
    font-weight:600;
    font-size:${props=>props.theme.miscsizes.buttons};
    transition: all 0.3s linear;
    &:hover{
        background:none;
        color:${props => props.theme.colors.purple };   
    }


`