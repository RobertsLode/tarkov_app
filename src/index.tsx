import React from 'react';
import { BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import WelcomePage from './components/welcome page/welcomePage';
import Page404 from './components/404/404';
import NavBar from './components/navBar/navBar';
import generalBackground from './images/948567.png';
import Test from './components/test/test';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      {/* <img 
      src={generalBackground}
       alt="generalBackground"
       className='general--background' /> */}
        <NavBar/>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='welcome' element={<WelcomePage />} />
          <Route path='test' element={<Test />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
