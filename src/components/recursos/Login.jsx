import React from 'react'
import fotousu from '../img/fotousu.png'

function Login(){
  return(

    
<section  className='login'>  
<div className='fotousuario'>
<img src={fotousu} />
  </div> 
  <div>
     <div>
      <div>
        <input
        className='input'
        placeholder= 'Usuario' type=''/>

      </div>
      <div>
        <input
        className='input'
        placeholder= 'Contraseña' type='password' />
      </div>
      <div className='check' >
        <div>
          <input type="checkbox" />
          <label>Recordar usuario</label>
        </div>
        <div>
        <input type="checkbox" />
          <label>Olvido contraseña</label>
        </div>
        </div>
        <input 
      className="buttonlogin"
      type="submit" 
      value="Login"/>
      </div>
  </div> 
  </section>
  )
}

export default Login