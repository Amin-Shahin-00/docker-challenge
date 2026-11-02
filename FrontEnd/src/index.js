import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
        <h1>Success! The React Frontend is running!</h1>
        <p>Served by Nginx via a multi-stage Docker build.</p>
    </div>
);