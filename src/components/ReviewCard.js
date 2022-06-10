//For Reviews card. Contains all review card components
import styled from '@emotion/styled'
import {P,Accent} from "../components/Text"

//Review card accepts review and name
export const ReviewCard = ({name,review}) =>
{
    return(
        <StyledCard>
            <P align="left">{review}</P>
            <Accent variant="atlpurple" align="left" style={{fontSize:"16px"}}>{name}</Accent>       
        </StyledCard>
    )
}

//Styling for card 
const StyledCard = styled.div`
    padding:30px 30px 30px 30px;
    margin:20px 12px 12px 12px;
    background-color: ${props => props.theme.colors.lightpurple} ;
    border-radius:10px;
    width:25%;
    @media ${props => props.theme.breakpoints.mobile} {
        width:100%;
        padding:10px 20px 10px 20px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
        width:100%;
        padding:10px 20px 10px 20px;
  }

`
