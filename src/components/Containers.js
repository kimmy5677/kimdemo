//For all containers and wrappers 
import styled from '@emotion/styled'

//Container where items are mid-aligned and uses COLUMN flex direction.
export const MiddleWrap = ({children,width,align,style}) =>
{
    return(
        <MiddleWrapStyled thewidth={width} align={align} style={style}>
        {children}
        </MiddleWrapStyled>
    )

}

//Container where items are mid-aligned or left and uses ROW flex direction.
export const RowWrap = ({children,width,align,style}) =>
{
    return(
        <RowWrapStyled thewidth={width} align={align} style={style}> 
        {children}
        </RowWrapStyled>
    )

}

//Container styling for container with background image
export const DivWithBackground = styled.div`
    margin:20px;
    padding-top:40px;
    padding-bottom:40px;

    border-radius:10px;
    box-shadow: 2px 2px 20px #888888cc;
    background-size:cover !important;
    background-position:center;
    background-repeat:no-repeat;
    background:url('${props => props.backgroundimageurl}');
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    width:60%;
    justify-content:flex-start;
    align-content:center;
    align-items:center;
    box-sizing: border-box;
    @media ${props => props.theme.breakpoints.mobile} {
    width:100%;
    align-items:center; 
    padding-right:10px;
    padding-left:10px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
    width:100%;
    align-items:center; 
    padding-right:10px;
    padding-left:10px;
    } 
`

//Grey Divider
export const Divider = styled.div`
  height: 1.5px;
  background-color: #e8eaed;
  width:90%;
  margin-left:auto;
  margin-right:auto;
  margin-top:100px;
  margin-bottom:70px;
  @media ${props => props.theme.breakpoints.mobile} {
    margin-top:50px;
  margin-bottom:30px;
 
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width:90%;
    margin-top:50px;
  margin-bottom:30px;

  }

`

//Stylings
const MiddleWrapStyled = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:${props => props.align==='left' ? "flex-start": "center" };
    align-content:center;
    margin-right:auto;
    margin-left:auto;
    width:${props => props.thewidth};
    padding-right:${props => props.align==='left' ? "30px": "0px" };

    padding-left:0px;
    padding-bottom:20px;

    @media ${props => props.theme.breakpoints.mobile} {
    width:90%;
    align-items:center; 
    padding-right:0px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width:90%;
    align-items:center; 
    padding-right:0px;
  }

`

const RowWrapStyled = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    align-content:center;
    align-items:${props => props.align==='top' ? "flex-start": "center" };
    justify-content:center;
    
    @media ${props => props.theme.breakpoints.mobile} {
    width:90%;
    flex-direction:column;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width:90%;
    flex-direction:column;
  }

`

export const Maindiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    margin-right:auto;
    margin-left:auto;
    padding-top:50px;
    width:100%;
    box-sizing: border-box;
    align-content:center;
    @media ${props => props.theme.breakpoints.mobile} {
    width:90%;
    padding-left:10px;
    padding-right:10px;
 
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width:90%;
    padding-left:10px;
    padding-right:10px;

  }
`

