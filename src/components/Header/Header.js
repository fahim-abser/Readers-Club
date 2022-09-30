import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-position'>
            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
            <h2>Readers Club</h2>
        </div>
    );
};

export default Header;