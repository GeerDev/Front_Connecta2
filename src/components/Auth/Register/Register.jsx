import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from "react-router-dom";
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
    <div className="container_register">
        <form onSubmit={onSubmit} className='container_form'>
          <div className="register_form card animate__animated animate__backInLeft">
              <div className="login_form-logo">
                  <div className='logo'><span></span></div>
                  <h1>Connecta2</h1>
              </div>
              <h3>Unos pequeños pasos para registrarte</h3>
              <input type="text" name="name" value={name} onChange={onChange} placeholder={'Nombre'}/>
              <input type="email" name="email" value={email} onChange={onChange} placeholder={'Email'}/>
              <input type="password" name="password" value={password} onChange={onChange} placeholder={'Contraseña'}/>
              <button type="submit">Registrate</button>
          </div>
        </form>
        <div className='register_image'>
          <div className='register_message card animate__animated animate__fadeInDown'>
            <h3>El espacio donde las personas conectan</h3>
            <p>¡Ya tengo una cuenta creada!</p>
            <Link to="/login">
            <button>Logueate</button>
            </Link>
          </div>
        </div>
    </div>

  )
}

export default Register