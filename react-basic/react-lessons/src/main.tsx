import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Styles from './styles/Styles.js';
import  './styles/styles.css';
import ReactHooks from './pages/ReactHooks';
import ReactRedux from './pages/ReactRedux';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './pages/Home/index.js';
import Posts from './pages/Posts/index.js';
import Repositories from './pages/Repositories/index.js';
import Location from './pages/Location/index.js';
import Pomodoro from './pages/Pomodoro/index.js';
import AnimesPosts from './components/AnimesPosts/index.js';
import Header from './components/Header/index.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
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
          <Route path='/react-redux' element={<ReactRedux />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)