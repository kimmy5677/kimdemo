//For all containers
import styled from '@emotion/styled'

export const MiddleWrap = ({children,width,align,style}) =>
{
    return(
        <MiddleWrapStyled thewidth={width} align={align} style={style}>
        {children}
        </MiddleWrapStyled>
    )

}

export const RowWrap = ({children,width,align,style}) =>
{
    return(
        <RowWrapStyled thewidth={width} align={align} style={style}> 
        {children}
        </RowWrapStyled>
    )

}


export const DivWithBackground = styled.div`
    margin:20px;
    padding-top:40px;
    padding-bottom:40px;

    border-radius:10px;

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
    width:90%;
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
export const Divider = styled.div`
  height: 1.5px;
  background-color: #e8eaed;
  width:90%;
  margin-left:auto;
  margin-right:auto;
  margin-top:90px;
  margin-bottom:70px;
  @media ${props => props.theme.breakpoints.mobile} {
    margin-top:30px;
  margin-bottom:30px;
 
  }

  @media ${props => props.theme.breakpoints.tablet} {
    width:90%;
    margin-top:30px;
  margin-bottom:30px;

  }

`
