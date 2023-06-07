import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import router from './router/index.jsx'
import App from './App.jsx'
import axios from 'axios'
import './index.css'
axios.defaults.baseURL="http://localhost:4000"
axios.defaults.withCredentials="true"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    
  </React.StrictMode>,
)
