import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <Link className='navbar-brand' to={'/'}>
                {props.title
                    ? props.title
                    : 'Edit CONFIG.js file for the title'}
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarBurgerButton'
                aria-controls='navbarBurgerButton'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon' />
            </button>

            <div className='collapse navbar-collapse' id='navbarBurgerButton'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-link'>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-link'>
                            Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/'} className='nav-link'>
                            Portfolio
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
