import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    const path = location.pathname;
    return (
        <div className='header clearfix'>
            <h1 className='pull-xs-left'>
                React Gallery
            </h1>
            <Link
                to={path === '/admin' ? '/' : '/admin'}
                className='pull-xs-right'>
                {path === '/admin' ? 'Gallery' : 'Administrator'}
            </Link>
        </div>
    );
}

export default Header;