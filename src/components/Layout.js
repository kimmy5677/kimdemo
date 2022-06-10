//Layout for page
import {Footer} from "../components/Footer"

//Layout allows footer to automatically added to pages 
function Layout({children}) {
    return (
        <div>
            {children}
        <Footer/>
        </div> 
    )
}

export default Layout