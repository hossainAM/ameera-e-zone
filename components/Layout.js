import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
    return (
        <div className='md:px-56'>
            <NavBar/>
            {children}
        </div>
    );
};

export default Layout;