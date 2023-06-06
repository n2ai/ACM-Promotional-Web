import { useState } from 'react'
import axios from 'axios'
import './App.css'

axios.defaults.baseURL="http://localhost:4000/"
axios.defaults.withCredentials="true"

function App() {
  

  return (
    <div>
      This is app component
    </div>
  )
}

export default App
