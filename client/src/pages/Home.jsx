import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContextProvider } from '../components/UserContext'
import toast from 'react-hot-toast'

const Home = () => {

    const Nav = useNavigate()
    const userObj = useContext(UserContextProvider);

    const handleLogOut = async () => {
        try {
            const res = await axios.get('http://localhost:8080/api/v1/logout')
            if (res.data.success === true) {
                userObj.handleUser()
                Nav('/')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <div>
      <button onClick={() => handleLogOut()} >logout</button>
    </div>
  )
}

export default Home
