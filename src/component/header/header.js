import React from 'react';
import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <a href='#' className='header__logo'>madappgang</a>
                <nav className='header__menu menu'>
                    <a href='#' className='menu__item'>Services</a>
                    <a href='#' className='menu__item'>Experience</a>
                    <a href='#' className='menu__item'>Foundation</a>
                    <a href='#' className='menu__item'>Team</a>
                    <a href='#' className='menu__item'>Blog</a>
                </nav>
                <a className='header__touchButton'>get in touch</a>
            </div>
        )
    }
}

export default Header;
