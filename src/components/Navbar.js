//Contains all Navigation Components (desktop) including Navbar wrapper
import styled from '@emotion/styled'
import Logo from "../images/Frame.png"
import {Buttons} from "../components/Buttons"

//Navbar present on desktop mode 
export const Navbar = (props) =>
{
    return(
        <NavbarContainer>      
            <img src={Logo}/>
            <Links/>
            <NavEnd/>
        </NavbarContainer>
    )
}

//Container for Navbar
export const NavbarContainer = styled.div`
    width:100%;
    height:40px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    box-sizing: border-box;
    padding:10px;
    justify-content:space-between;
`

//First set of Links on Navbar 
export const Links = () =>
{
    return(
        <div>
            <NavLink href="/">Topics</NavLink>
            <NavLink href="/">Features</NavLink>
            <NavLink href="/">Review</NavLink>
            <NavLink href="/">FAQ</NavLink>
        </div>
    )

}

//Second set if links on Navbar
export const NavEnd = () =>
{
    return(
        <div>
        <NavLink href="/">Login</NavLink>
        <Buttons variant="clear">Get Access</Buttons>
        </div>
    )
}

//NavLinks styling
export const NavLink = styled.a`
font-size:${props => props.theme.miscsizes.nav};
font-family:${props => props.theme.fonts.body};
font-weight:600px;
background:none;
padding: 0px 20px;
color:white;
display: inline-block;
transform: scale(1);
transition:all 0.3s linear;

text-decoration:none;
&:hover{
    transform: scale(1.2);
}
`



