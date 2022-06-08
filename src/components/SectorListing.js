//Sector listing section. All sector listing elements 
import styled from '@emotion/styled'




export const SectorList = ({sectorslist,style,direction}) =>
{

    const sectorlist = sectorslist.map((item) => {

            return(
                <StyledParagraph>{item}</StyledParagraph>
            )

        }       
    );
    return(
        <StyledDiv style={style} direction={direction}>{sectorlist}</StyledDiv>
    )

}

const StyledParagraph = styled.p`
    background:${props => props.theme.colors.black2 };
    color:white;
    border:1px solid white;
    padding: 12px 31px;
    min-width:150px;
    width:230px;
    text-align:center;
    border-radius:5px;
    font-family:${props=>props.theme.fonts.body};
    font-weight:600;
    font-size:${props=>props.theme.miscsizes.buttons};
`

const StyledDiv = styled.div`
    display:flex;
    flex-direction:row;
    gap:20px;

    animation:  ${props => props.direction==="right" ? "rightmove 15s linear infinite" : "leftmove 15s linear infinite"};

    @keyframes rightmove {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-50.3%, 0);
    }
    }

    @keyframes leftmove {
    0% {
        transform: translate(-50.3%, 0);
    }
    100% {
        transform: translate(0, 0);
    }
    }

`

export const ScrollerDiv = styled.div`
    position:absolute; 
    top:0px; 
    left:0px; 
    overflow:hidden; 
    white-space: nowrap;


`