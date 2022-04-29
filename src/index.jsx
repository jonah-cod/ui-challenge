import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/login';
import Signup from './components/signup'
import SetupAccount from './pages/setupAccount';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Dashboard from './pages/dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/setupaccount' element={<SetupAccount/>}/>
          </Route>
        </Routes>
      </Router>
    </Provider>
    
  </React.StrictMode>
);
