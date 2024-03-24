import React from 'react';
import { Link } from 'react-router-dom';
import Productpage from './Productpage';

const Header = () => {
    return (
        <header style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            {/* Company logo */}
            <div className="logo">
                <Link to="/">
                    <img src="/images/logo.png" alt="Logo" style={{ width: '100px' }} /> {/* Adjust width as needed */}
                </Link>
            </div>
            {/* Company name */}
            <div className="company-name" style={{ position: 'absolute', top: 0, right: 0 }}>
                <p>Company Name</p>
            </div>
            {/* Navigation links */}
            <nav style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Link to="/" style={{ flex: '1 1 auto', textAlign: 'left' }}>Home</Link>
                    <Link to="/Productpage" style={{ flex: '1 1 auto', textAlign: 'center' }}>Products</Link>
                    <Link to="/login" style={{ flex: '1 1 auto', textAlign: 'right' }}>Login</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
