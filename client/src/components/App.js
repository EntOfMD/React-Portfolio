import React from 'react';

//components
import Navbar from './Navbar';

function App() {
    return (
        <div>
            <header>
                <Navbar />

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
