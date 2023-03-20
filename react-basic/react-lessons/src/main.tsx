import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './modules/Header';
import Home from './modules/Home';
import Posts from './modules/Posts';
import Styles from './styles/Styles.js';
import  './styles/styles.css';
import Repositories from './modules/Repositories';
import Location from './modules/Location';
import AnimesPosts from './modules/AnimesPosts';
import Pomodoro from './modules/Pomodoro';
import ReactHooks from './pages/ReactHooks';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Styles/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/repo' element={<Repositories />} />
        <Route path='/location' element={<Location />} />
        <Route path='/pomodoro' element={<Pomodoro cycles={4} pomodoroTime={1500} longRestTime={900} shortRestTime={300}/>} />
        <Route path='/animes' element={<AnimesPosts />} />
        <Route path='/react-hooks' element={<ReactHooks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
