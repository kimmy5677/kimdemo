//All buttons including transparent button, white button, purple button. 
import styled from '@emotion/styled'

export const Buttons = ({children,type,href,margin}) =>
{
    return(
        <StyledButton type={type} href={href} margin={margin}>{children}</StyledButton>
    )

}

const StyledButton = styled.a`
    background:${props => props.type==='clear' ? "none":"white" };
    color:${props => props.type==='clear' ? "white": props.theme.colors.purple };
    border:1px solid white;
    padding: 12px 31px;
    min-width:150px;
    text-align:center;
    border-radius:5px;
    font-family:${props=>props.theme.fonts.body};
    font-weight:600;
    font-size:${props=>props.theme.miscsizes.buttons};
    transition: all 0.3s linear;
    margin:${props=>props.margin};
    &:hover{
        background:${props => props.type==='clear' ? "white":"none" };
        color:${props => props.type==='clear' ?  props.theme.colors.purple : "white" };   
    }
`