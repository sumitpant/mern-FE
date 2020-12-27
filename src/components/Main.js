import React from 'react'
import './Main.css'
import ReservationForm from './ReservationForm'
import ReservationList from './ReservationList'
import { useHistory } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Main(props) {
    let history=useHistory();
   if(localStorage.getItem("token")==false || localStorage.length==0){
      
       history.push("/");
   }
   const logout=()=>{
       localStorage.setItem("token",false);
       history.push("/")
   }
    
    return (
        <div className="container">
           <div className="nav">
               <h2>Logo</h2>
               <ExitToAppIcon onClick={logout}/>
               
           </div>
           <div className="components">
               <div className="Reservation">
                  {/* Resservation form */}
               <ReservationForm/>
               </div>
               <div className="List">
                 {/* Reservatinon list */}
                 <ReservationList/>
              </div>
           </div>
            
        </div>
    )
}

export default Main
