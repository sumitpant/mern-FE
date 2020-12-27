import React from 'react'

import LoginForm from './LoginForm'
import './Login.css'
function Login() {
    return (
        <div className="login">
                {/* <img src={bg} alt ="background" height="594" width="100%"/>    */}
                <div className="bg-image">
                    
                    <div className="form-login">
                          <LoginForm/>
                    </div>   

                </div>    
                     
        </div>
    )
}

export default Login
