import React,{useEffect,useState} from 'react'
import axios from 'axios';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './ReservationList.css'

import {useHistory} from 'react-router'
function ReservationList(props) {

    const history=useHistory();
    const [delmsg, setdelmsg] = useState('')
    
    const [list, setlist] = useState([])

    
    useEffect(() => {
        axios.get('https://git.heroku.com/quiet-dusk-57801.git/fetch').then(res=>{
            setlist(res.data)
            
        
        })
     })
     
    
    return (
        
        <div className="lists" style={{marginTop:"5px"}}>
            
            <p> Total Reservation : {list.length}</p>
            <div className="card" >
                <div className="card-header">Reservation List</div>
                <div className="card-body body " >
                    <table className="table table-striped">
                    <thead>
                         <tr>
                            
                            <th scope="col">Name</th>
                             <th scope="col">Time</th>
                             <th scope="col">People</th>
                             <th scope="col">Date</th>
                             {/* <th></th> */}
                             <th></th>
                             <th></th>
                              
                          </tr>
                          </thead>
                          
                              {list.map(data=>{
                                  return(
                                <tbody>
                                    <tr>
                                    <td>{data.Name}</td>
                                    <td>{data.Time}</td>
                                    <td>{data.NoOfPeople}</td>
                                    <td>{data.Date.substr(0,9)}</td>

                                    
                                    <td><EditIcon name={data.__id}  onClick={(e)=>{
                                       history.push({
                                        pathname:`/reservation/:${data.Contact}`,
                                        
                                        
                                    })
                                        
                                       
                                        
                                    }}/></td>
                                    <td><DeleteIcon onClick={()=>{
                                        axios.get(`https://git.heroku.com/quiet-dusk-57801.git/delete/:${data.Contact}`).then(res=>{
                                                         setdelmsg(res.data)
                                        })
                                    }}/></td>
                                    
                                    </tr>
                                  
                                </tbody>  )
                              })}
                          
                    

                    </table>
                </div>
            </div>
            
        </div>
    )
}

export default ReservationList
