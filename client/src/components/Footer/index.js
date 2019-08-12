import React from 'react';
import './style.css';

export default function Footer(props) {
  return (
    <footer className="footer bg-dark p-3 text-light fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <a
              href={props.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; {props.year ? props.year : 'Edit CONFIG.js file'}{' '}
              {props.name ? props.name : 'Edit CONFIG.js file'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
