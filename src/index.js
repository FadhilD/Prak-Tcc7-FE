// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';
// import "bulma/css/bulma.css"


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// import { BrowserRouter } from 'react-router-dom';
// import './index.css'; // opsional, kalau pakai Tailwind

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import "bulma/css/bulma.css"
import './index.css'; // opsional, kalau pakai Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
