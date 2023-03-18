import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './modules/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './modules/Header';
import Posts from './modules/Posts';
import Styles from './styles/Styles';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Styles/>
      <Header/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
