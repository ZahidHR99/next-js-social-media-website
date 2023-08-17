import React from 'react';
import NavBar from './Shared/NavBar';
import Footer from './Shared/Footer';

const RootLayout = ({children}) => {
    return (
        <div>
           <NavBar/>
           <div>
                {children}
           </div>
           <Footer/>
        </div>
    );
};

export default RootLayout;
