import React ,{useState,useEffect}from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import {useHistory} from 'react-router'
import axios from 'axios'
function LoginForm(props) {

    const [email, setEmail] = useState('');
    const[password,setPassword]=useState();
    const[token,setToken]=useState(false)
    const[err,setError]=useState('')
    const history=useHistory();

    useEffect(() => {
         axios.post("https://git.heroku.com/quiet-dusk-57801.git/main",{Email:email,password:password}).then(res=>{
                          setToken(res.data)
                        //   console.log("====>",res.data)

         })
    })
    
    const submit=(e)=>{
        e.preventDefault();
        localStorage.setItem("token",token)
        console.log(token)
        if(token!==false){
          //  console.log(props.history)
          history.push({
              pathname:'/main',
              state:{"data":token}
          })
          
         }
         else{
             setError("No Such user")
         }
        
       
    }
    const addEmail=(e)=>{
         setEmail(e.target.value)
    }
    const addPassword=(e)=>{
            setPassword(e.target.value)
    }
    return (
        <div className="form">
            <div className="card card-style">
                <div className="card-header">
                    <h3 className="card-title">Login</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={submit} method="POST">
                      <div className="form-group">
                          <label   htmlFor="exampleInputEmail1">Email </label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="Email" onChange={addEmail}/>
                      </div>
                      <div class="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={addPassword}/>
                      </div>
                         
                         <button type="submit" class="btn btn-outline-success">Login</button>
                      </form>
                      {/* <p className="alert alert-danger">{err}</p> */}
                      <div id={err.length>0 ? err : null} >{err}</div>
                </div>
            </div>
            
        </div>
    )
}

export default LoginForm
