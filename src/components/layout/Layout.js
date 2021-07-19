import React from 'react';
import Navbar from '../shared/navbar/Navbar';


const Layout = (props) => {
    return(
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;