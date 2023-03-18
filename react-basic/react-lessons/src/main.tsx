import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './modules/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './modules/Header';
import Posts from './modules/Posts';
import Styles from './styles/Styles';
import Repositories from './modules/Repositories';
import Location from './modules/Location';
import AnimesPosts from './modules/AnimesPosts';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Styles/>
      <Header/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/repo' element={<Repositories />} />
        <Route path='/location' element={<Location />} />
        <Route path='/animes' element={<AnimesPosts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
