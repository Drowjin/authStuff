import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = () => {

    const Nav = useNavigate()

    const [dataForm, setDataForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleForm = async e => {
        e.preventDefault()
        try {
            // const res = await axios.post('http://localhost:8080/api/v1/register', dataForm)
            const res = await axios.post('https://authstuff.onrender.com/api/v1/register', dataForm)
            if (res.data.success === true) {
                toast.success('register successfully!')
                setDataForm({
                    username: "",
                    email: "",
                    password: ""
                })
                Nav('/')
            }else if (res.data.success === false) {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error('server error!')
        }
    }

    const handleChange = e => {
        const {id , value} = e.target
        setDataForm({
            ...dataForm,
            [id]: value 
        })
    }

  return (
    <div className='w-full bg-blue-400 h-[45rem] flex justify-center items-center' >
        <form onSubmit={e => handleForm(e)}>
            <div className='flex flex-col justify-center items-center' >
                <h1 className='mb-5 underline' >Register</h1>
                <label htmlFor="username">username:</label>
                <input type="text" id="username" onChange={e => handleChange(e)} placeholder='enter username' />
                <label htmlFor="email">email:</label>
                <input type="text" id="email" onChange={e => handleChange(e)} placeholder='enter email' />
                <label htmlFor="password">password:</label>
                <input type="password" id="password" onChange={e => handleChange(e)} placeholder='enter password' />
                <button type='submit' className='mt-4 bg-yellow-400 rounded-2xl px-4 py-1' >Register</button>
                <div>
                    already a user then<Link to={'/'}><span className='underline text-red-500' >Click Me.</span></Link>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register
