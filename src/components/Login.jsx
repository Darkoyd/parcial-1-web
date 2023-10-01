import React, { useState } from "react"
import { login } from "../api/AuthService"
import { useNavigate } from "react-router-dom"
import { FormattedMessage } from "react-intl"

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
        <div className="flex flex-col align-middle content-center self-center w-2/3">
            <div className="font-bold pb-2">
                <FormattedMessage id='logIn' />
            </div>
            <div className="flex flex-col border-2 bg-[#e0bbbb] bg-opacity-20 grow">
                <form className="self-center flex flex-col">
                    <label className='py-2 font-bold'>
                        <FormattedMessage id='username' />
                    </label>

                    <input className='py-2' type="text" placeholder='' value={user} onChange={handleUserFormChange} />

                    <label className='pt-5 font-bold'>
                        <FormattedMessage id='pass' />
                    </label>

                    <input className='py-2' type="password" pĺaceholder='' value={pass} onChange={handlePassFormChange} />

                    <div className="flex flex-row gap-4 align-middle place-content-center py-2">
                        <button onClick={handleSubmitClick} className="bg-green-600 text-white py-2 px-6 hover:cursor-pointer"><FormattedMessage id='enter' /></button>
                        <button onClick={handleCancelClick} className="bg-red-600 text-white py-2 px-6 hover:cursor-pointer"><FormattedMessage id='cancel' /></button>
                    </div>
                    {error && (<div className="text-red-600 font-bold">
                        <FormattedMessage id='authError' />
                    </div>)}
                </form>

            </div>

        </div>
    )
}

export default Login