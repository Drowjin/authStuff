import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContextProvider } from '../components/UserContext';


const PageNotFound = () => {

  const userObj = useContext(UserContextProvider);  

  return (
    <div className=' h-[850px] '>
        <div className=' bg-slate-600 text-white text-center h-full w-full justify-center items-center'>
        Page not found <Link to={  userObj.userToggle === true ? '/home' : '/'}><span className='underline text-red-500' >Go to {userObj.userToggle === true ? 'home' : 'login'} page.</span></Link>
        </div>
    </div>
  )
}

export default PageNotFound
