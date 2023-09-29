import React, { useState, useEffect } from "react"
import { login } from "../api/AuthService"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(false)

    const nav = useNavigate()

    const handleUserFormChange = (event) => {
        setUser(event.target.value)
    }
    const handlePassFormChange = (event) => {
        setPass(event.target.value)
    }

    const handleSubmitClick = async (event) => {
        event.preventDefault()
        const authCall = await login({
            login: user,
            password: pass
        })


        authCall.data ? handleNavigate() : setError(true)

    }

    const handleNavigate = () => {
        nav('/coffee')
    }

    const handleCancelClick = () => {
        setPass('')
        setUser('')
    }

    return (
        <div className="flex flex-col">
            <div>
                Inicio de sesión
            </div>
            <div className="flex flex-col">
                <form>
                    <label>
                        Nombre de usuario
                    </label>
                    <br />
                    <input type="text" placeholder='' value={user} onChange={handleUserFormChange} />
                    <br />
                    <label>
                        Contraseña
                    </label>
                    <br />
                    <input type="password" pĺaceholder='' value={pass} onChange={handlePassFormChange} />
                    <br />
                    <div className="flex flex-row gap-4">
                        <button onClick={handleSubmitClick} className="bg-green-600 text-white p-2">Ingresar</button>
                        <button onClick={handleCancelClick} className="bg-red-600 text-white p-2">Cancelar</button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Login