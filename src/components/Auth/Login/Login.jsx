import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { login } from '../../../features/auth/authSlice'

import '../../../styles/main.scss';

const Login = () => {

  const navigate = useNavigate();

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

  const onSubmit = (e) => {
      e.preventDefault()
      dispatch(login(formData))
      navigate('/main/home', {
        replace: true
    })
  }

  return (
    <main className='login'>
      <div className='login_image'>
        <div className='login_message card animate__animated animate__backInLeft'>
          <h3>El espacio donde las personas conectan</h3>
          <p>¿No estas todavia registrad@? ¡Registrate!</p>
          <button>Crea una cuenta</button>
        </div>
      </div>
    <form onSubmit={onSubmit} className='login_form'>
      <div className="login_form-message card animate__animated animate__fadeInDown">
        <div className="login_form-logo">
            <div className='logo'><span></span></div>
            <h1>Connecta2</h1>
        </div>
            <h3>Bienvenid@ a Connecta2! Logueate</h3>
            <input type="email" name="email" value={email} onChange={onChange} placeholder={'Email'}/>
            <input type="password" name="password" value={password} onChange={onChange} placeholder={'Contraseña'}/>
            <p>¿Olvidaste la contraseña?</p>
            <button type="submit">Login</button>
            {/* <div>{message.message}</div> */}
        </div>
    </form>
    </main>

  )
}

export default Login