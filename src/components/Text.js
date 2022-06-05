//All text components. Heading 1,2,3 also paragraph and accent text
import styled from '@emotion/styled'

export const H1 = ({children,variant}) =>
{
    return(
        <H1Styled variant={variant}>{children}</H1Styled>
    )
}

export const H2 = ({children,variant}) =>
{
    return(
        <H2Styled variant={variant}>{children}</H2Styled>
    )
}

export const H3 = ({children,variant}) =>
{
    return(
        <H3Styled variant={variant}>{children}</H3Styled>
    )
}

export const P = ({children,variant,align}) =>
{
    return(
        <PStyled variant={variant} align={align}>{children}</PStyled>
    )
}
const H1Styled = styled.h1`
    font-size:${props => props.theme.h1sizes.desktop};
    font-family:${props=>props.theme.fonts.body};
    font-weight:600;
    color:${props => props.variant==='light' ? "white": "black" };
    line-height:60.51px;
    margin:0px;
    text-align:center;
`
const H2Styled = styled.h2`
    font-size:${props => props.theme.h2sizes.desktop};
    font-family:${props=>props.theme.fonts.body};
    font-weight:600;
    color:${props => props.variant==='light' ? "white": "black" };
    line-height:48.41px;
    margin:0px;
    text-align:center;
`

const H3Styled = styled.h3`
    font-size:${props => props.theme.h3sizes.desktop};
    font-family:${props=>props.theme.fonts.body};
    font-weight:600;
    color:${props => props.variant==='light' ? "white": "black" };
    line-height:36px;
    text-align:left;
`

const PStyled = styled.p`
    font-size:${props => props.theme.psizes.desktop};
    font-family:${props=>props.theme.fonts.body};
    font-weight:400;
    color:${props => props.variant==='light' ? "white": "black" };
    line-height:28px;
    text-align:${props => props.align==='left' ? "left": "center" };
`
const Accent = styled.p`
font-size:${props => props.theme.miscsizes.accent};
font-family:${props=>props.theme.fonts.body};
font-weight:700;
color:${props =>  props.theme.colours.purple};
line-height:18px;
text-align:${props => props.align==='left' ? "left": "center" };
`