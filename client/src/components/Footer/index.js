import React from 'react';

export default function Footer(props) {
    return (
        <footer className='footer bg-dark p-3 text-light fixed-bottom'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        &copy; {props.year ? props.year : 'Edit CONFIG.js file'}{' '}
                        {props.name ? props.name : 'Edit CONFIG.js file'}
                    </div>
                </div>
            </div>
        </footer>
    );
}
