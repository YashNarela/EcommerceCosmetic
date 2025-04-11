import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'boxicons/css/boxicons.min.css';
import toast, { Toaster } from 'react-hot-toast';

import { Provider } from 'react-redux'
import LoginContext from './Pages/LoginContext.jsx';
import store from './redux/store/store.js'


import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(

  <Provider store={store} >


    <LoginContext>
      <App />
      <Toaster />

    </LoginContext>
  </Provider>

)
