import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast'
import { UserContextProvider } from '../components/UserContext';

const Login = () => {

  const userObj = useContext(UserContextProvider);

    const Nav = useNavigate()

    const [dataForm, setDataForm] = useState({
        multFields: "",
        password: ""
    });

    const handleForm = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/api/v1/login', dataForm)
            if (res.data.success === true) {
                userObj.handleUser()
                toast.success(res.data.message)
                Nav('/home')
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error('server side error')
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
                <h1 className='mb-5 underline' >Login</h1>
                <label htmlFor="multFields">username or email :</label>
                <input type="text" id="multFields" onChange={e => handleChange(e)} placeholder='enter username' />
                <label htmlFor="password">password:</label>
                <input type="password" id="password" onChange={e => handleChange(e)} placeholder='enter password' />
                <button type='submit' className='mt-4 bg-yellow-400 rounded-2xl px-4 py-1' >Login</button>
                <div>
                    not user then <Link to={'/register'}><span className='underline text-red-500' >Click Me.</span></Link>
                </div>

            </div>
        </form>
    </div>
  )
}

export default Login
