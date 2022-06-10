//All text components. Heading 1,2,3 also paragraph,accent and listing text
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

//H1 Component. "Dark variant is black text, light is white text"
export const H1 = ({children,variant,style}) =>
{
    return(
        <H1Styled variant={variant} style={style}>{children}</H1Styled>
    )
}

//H2 Component.
export const H2 = ({children,variant,align,style}) =>
{
    return(
        <H2Styled variant={variant} style={style} align={align}>{children}</H2Styled>
    )
}

//H3 Component.
export const H3 = ({children,variant,style}) =>
{
    return(
        <H3Styled variant={variant} style={style}>{children}</H3Styled>
    )
}

//Paragraph text Component.
export const P = ({children,variant,align,style}) =>
{
    return(
        <PStyled variant={variant} align={align} style={style}>{children}</PStyled>
    )
}

//Accent text Component. like "Topics", "What You Get"
export const Accent = ({children,align,variant}) =>
{
    return(
        <AccentStyled align={align} variant={variant} >{children}</AccentStyled>
    )
}

//List items with checkmark. "Light variant" is white checkmark + white text. Otherwise/Defaut is purple checkmark and black text
//Accepts an array of items 
export const ListItem = ({listitems,variant}) =>
{
    const listItems = listitems.map((item) => {

        if (variant==="light")
        {
            return(
                <div style={{display:'flex',width:'250px'}}>
                <FontAwesomeIcon icon={faCircleCheck} style={{color:'white',paddingTop:'16px',paddingRight:'8px'}}/> 
                <P align="left" variant="light">{item}</P>
                </div>
            )

        }
        else
        {

            return(
                <div style={{display:'flex',width:'200px'}}>
                <FontAwesomeIcon icon={faCircleCheck} style={{color:'#5538CD',paddingTop:'16px',paddingRight:'8px'}}/> 
                <P align="left">{item}</P>
                </div>
            )

        }

        }
    );

    return(
        <div>{listItems}</div>
    );
}


//Stylings 
const H1Styled = styled.h1`
    font-size:${props => props.theme.h1sizes.desktop};
    font-family:${props=>props.theme.fonts.body};
    font-weight:600;
    color:${props => props.variant==='light' ? "white": "black" };
    line-height:60.51px;
    margin:0px;
    text-align:center;
    @media ${props => props.theme.breakpoints.mobile} {
        font-size:${props => props.theme.h1sizes.mobile};
        line-height:40px;
        text-align:center;
  }

  @media ${props => props.theme.breakpoints.tablet} {
        font-size:${props => props.theme.h1sizes.mobile};
        line-height:40px;
        text-align:center;
  }
`
const H2Styled = styled.h2`
    font-size:${props => props.theme.h2sizes.desktop};
    font-family:${props=>props.theme.fonts.body};
    font-weight:600;
    color:${props => props.variant==='light' ? "white": "black" };
    line-height:48.41px;
    margin-bottom:10px;
    margin-top:0px;
    text-align:${props => props.align==='left' ? "left": "center" };

    @media ${props => props.theme.breakpoints.mobile} {
        font-size:${props => props.theme.h1sizes.mobile};
        line-height:34px;
        text-align:center;
  }

  @media ${props => props.theme.breakpoints.tablet} {
        font-size:${props => props.theme.h1sizes.mobile};
        line-height:34px;
        text-align:center;
  }
`
const H3Styled = styled.h3`
    font-size:${props => props.size ?  props.size: props.theme.h3sizes.desktop };
    font-family:${props=>props.theme.fonts.body};
    font-weight:600;
    color:${props => props.variant==='light' ? "white": "black" };
    line-height:36px;
    text-align:left;
    padding-bottom:0px;
    margin-bottom: 0px; 
    padding-bottom:0px;
    margin-bottom: 0px; ;

    @media ${props => props.theme.breakpoints.mobile} {
        font-size:${props => props.theme.h3sizes.mobile};
        line-height:25px;
        text-align:center;
  }

  @media ${props => props.theme.breakpoints.tablet} {
        font-size:${props => props.theme.h3sizes.mobile};
        line-height:25px;
        text-align:center;
  }
`
const PStyled = styled.p`
    font-size:${props => props.theme.psizes.desktop};
    font-family:${props=>props.theme.fonts.body};
    font-weight:400;
    color:${props => props.variant==='light' ? "white": "black" };
    line-height:28px;
    margin: 10px 0px 10px 0px ;
    text-align:${props => props.align==='left' ? "left": "center" };
    @media ${props => props.theme.breakpoints.mobile} {
        text-align:center;
  }

  @media ${props => props.theme.breakpoints.tablet} {
        
  }
`
const AccentStyled = styled.p`
font-size:${props => props.theme.miscsizes.accent };
font-family:${props=>props.theme.fonts.body};
font-weight:700;
color:${props => props.align==='altpurple' ? props.theme.colors.purple2 : props.theme.colors.purple };
line-height:18px;
text-align:${props => props.align==='left' ? "left": "center" };
@media ${props => props.theme.breakpoints.mobile} {
        text-align:center;
  }

  @media ${props => props.theme.breakpoints.tablet} {
        
  }

`


