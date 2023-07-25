import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './features/profile/Profile';
import Login from './features/login/Login';
import Register from './features/register/Register';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            <Route path="/profile" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


