import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../../../features/auth/authSlice'

import './Login.css';

const Login = () => {

  const { message } = useSelector( (state) => state.auth )

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const {email,password} = formData
  
  const onChange = (e)=>{
      setFormData((prevState)=> ({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
  }

  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (message) {
  //     console.log(message);
  //   }
  // }, [message]);

  const onSubmit = (e) => {
      e.preventDefault()
      dispatch(login(formData))
  }

  return (
    <form onSubmit={onSubmit}>
          <input type="email" name="email" value={email} onChange={onChange}/>
          <input type="password" name="password" value={password} onChange={onChange}/>
          <button type="submit">Login</button>
          <div>{message.message}</div>
    </form>
  )
}

export default Login