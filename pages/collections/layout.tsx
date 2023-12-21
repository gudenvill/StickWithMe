import React from 'react';
import Navbar from '@/components/nav-bar'; // Adjust the import path as needed

type LayoutProps = {
    children: React.ReactNode;
}; 

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            {/* You can also add a common footer or other components here */}
        </>
    );
};

export default Layout;