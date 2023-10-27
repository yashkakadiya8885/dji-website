import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import './home.css'

const Signin = () => {
  const [togellogin,setToggellogin] = useState(true)
  return (
    <div>
      {togellogin  ? (
        <Login togellogin={togellogin} setToggellogin={setToggellogin} />
      ) :  (<Signup togellogin={togellogin} setToggellogin={setToggellogin} />
      )}
    </div>
  )
}

export default Signin