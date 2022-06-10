//Components relating to images 
import styled from '@emotion/styled'

//Wrap for logo images 
export const LogoWrap = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  justify-content:space-evenly;
  gap:8px;
`

//Logo images stylings
export const LogoImage = styled.img`
  height:15px;
  width:auto;
`

//Stylings for image
export const Image = styled.img`
   z-index: 100;
   margin-left: auto;
   margin-right: auto;
   margin-top: auto;
   margin-bottom: auto;
   object-fit: cover;
   border-radius: 5px;
   width: auto;
   height: auto;
   width:700px;
   @media ${props => props.theme.breakpoints.tablet} {
      height: 400px;
      width: auto;
    }

    @media ${props => props.theme.breakpoints.mobile} {
      height:250px;
      width: auto;
    }


`