import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {register} from '../../../features/auth/authSlice'

import '../../../styles/main.scss';

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      name:'',
      email:'',
      password:''
  })

  const dispatch = useDispatch()

  const {name,email,password} = formData
  const onChange = (e)=>{
      setFormData((prevState)=> ({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
  }
  const onSubmit = (e) => {
      e.preventDefault()
      dispatch(register(formData))
      navigate('/login', {
        replace: true
    })
  }
  
  return (
    <form onSubmit={onSubmit}>
          <input type="text" name="name" value={name} onChange={onChange} />
          <input type="email" name="email" value={email} onChange={onChange}/>
          <input type="password" name="password" value={password} onChange={onChange}/>
          <button type="submit">Register</button>
    </form>
  )
}

export default Register