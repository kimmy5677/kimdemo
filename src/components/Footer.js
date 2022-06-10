//Footer component
import {Links} from "../components/Buttons"
import {Maindiv,RowWrap}  from "../components/Containers"
import {P} from "../components/Text"
import {NavbarContainer} from "../components/Navbar"

export const Footer = () =>
{
    return(
        <Maindiv width="90%" style={{marginTop:"40px"}}>
            <NavbarContainer>
            <RowWrap style={{gap:"10px"}}>
                <Links href="/">About</Links>
                <Links href="/">Privacy Policy</Links>
                <Links href="/">Terms of Use</Links>
                <Links href="/">Contact Us</Links>
            </RowWrap>

            <RowWrap>
                <P style={{fontSize:"14px"}}>© 2022 Research. All rights reserved.</P>
            </RowWrap>

        </NavbarContainer>       
        
        
        </Maindiv>

    )
}