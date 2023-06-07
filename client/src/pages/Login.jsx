import { useState } from "react"
import '../assets/loginPage.css'
import axios from 'axios'

export default function Login(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function handleLoginSubmit(ev){
        ev.preventDefault()
        await axios.post('/login',{
            email,
            password
        })
        console.log()
    }

    return(
        <div className="loginSection">
            <div className="loginSection__title">
                <h1>Login</h1>
            </div>
            <form className="loginSection__form" onSubmit={handleLoginSubmit}>
                <div className="loginSection__form__input">
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Email"></input>
                </div>
                <div className="loginSection__form__input">
                    <input type="text" onChange={e => setPassword(e.target.value)} value={password} placeholder="Password"></input>
                </div>
                <div className="loginSection__form__input">
                    <button>Login</button>
                </div>
            </form>
        </div>

        
    )
}