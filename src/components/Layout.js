import React from 'react'
import {Footer} from "../components/Footer"

function Layout({children}) {
    return (
        <div>
            {children}
        <Footer/>
        </div> 
    )
}

export default Layout