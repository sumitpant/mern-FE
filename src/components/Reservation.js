import React,{useState,useEffect} from 'react';
import './Reservation.css'
import axios from 'axios'
import Edit from '../images/edit.jpg';
import { useHistory } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Reservation(props) {
    
    // console.log(props.match.params.id.substr(1))
    const [list, setlist] = useState([]);
    const[count,setCount]=useState(0)
     let history=useHistory();
    if(localStorage.getItem("token")==false || localStorage.length==0){
      
      history.push("/");
  }
  const logout=()=>{
      localStorage.setItem("token",false);
      history.push("/")
  }
    
    const chng=(e)=>{
       
        setCount(e.target.value)

    }
    useEffect(() => {
        axios.get(`http://localhost:4000/fetch/${props.match.params.id.substr(1)}`).then(res=>{
            setlist(res.data);       
        
        })
     })
    return (
        <div className="container">
        <div className="nav">
               <h2>Logo</h2>
               {/* <ul>
                   <Link to="/Main"><li className="li-reserve">Main</li></Link>
               </ul> */}
               <ExitToAppIcon onClick={logout}/>
           </div>
           
           <div className="formDiv">
             <div className="card">
                 <div className="card-body">
                    <form action="http://localhost:4000/update" method="POST">
                        <div className="form-group">
                          <label for="Name">Name </label>
                          <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" placeholder={list.Name} name="Name"/>
                      </div>
                      <div class="form-group">
                        <label for="Date">Date</label>
                        <input type="date" class="form-control" id="Date" name="Date" />
                      </div>
                      <div class="form-group">
                        <label for="Time">Time</label>
                        <input type="time" class="form-control" id="Time" name="Time" />
                      </div>
                      <div class="form-group">
                        <label for="Quantity">No Of People</label>
                        <input type="number" class="form-control" id="Quantity" name="Quantity" placeholder={list.No_of_people} onChange={chng}/>

                      </div>
                      <div class="form-group">
                        <label for="Contact">Contact</label>
                        <input type="number" class="form-control" id="Contact" name="Contact" value={list.Contact} />
                      </div>
                      <button type="submit" class="btn btn-outline-success">Update Reservation</button>
                   </form>
                </div>
              </div>
               <div className="Edit"><h1 className="edithere"> Edit Here</h1>
                 <img src={Edit} style={{width:"70vh",height:"60vh",opacity:"0.4"}}/>
               </div>
          </div>
        </div>
    )
}

export default Reservation
