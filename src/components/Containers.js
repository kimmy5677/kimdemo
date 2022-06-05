//For all containers
import styled from '@emotion/styled'

export const MiddleWrap = ({children,marginLeftandRight}) =>
{
    return(
        <MiddleWrapStyled marginLeftandRight={marginLeftandRight}>
        {children}
        </MiddleWrapStyled>
    )

}

export const MiddleWrapStyled = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    align-items:center;
    margin: 0px ${props => props.marginLeftandRight} 0px ${props => props.marginLeftandRight};
` 