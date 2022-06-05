import styled from '@emotion/styled'
import {Navbar} from "../components/Navbar"

export const Banner = ({backgroundimageurl,children}) =>
{
    return(
        <div>
        <StyledBanner backgroundimageurl={backgroundimageurl}>
            <Navbar/>
            {children}
        </StyledBanner>
        </div>
    )
}

const StyledBanner = styled.div`
    margin:20px;
    padding:40px;
    border-radius:10px;
    min-height:800px;
    background-size:cover !important;
    background-position:center;
    background-repeat:no-repeat;
    background:url('${props => props.backgroundimageurl}');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    flex-wrap:wrap;
    align-content:center;
`