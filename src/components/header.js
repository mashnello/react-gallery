import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    const path = location.pathname;
    return (
        <div className='header clearfix'>
            <div className='container'>
                <h1 className='pull-xs-left'>
                    React Gallery
                </h1>
                <Link
                    to={path === '/react-gallery/admin' ? '/react-gallery/' : '/react-gallery/admin'}
                    className='pull-xs-right'>
                    {path === '/react-gallery/admin' ? 'Gallery' : 'Administrator'}
                </Link>
            </div>
        </div>
    );
}

export default Header;