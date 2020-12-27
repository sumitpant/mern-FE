import React from 'react'
import './ReservationForm.css'

function ReservationForm() {


    return (
        <div className="reserve">
          
                <div className="card card-style-res">
                <div className="card-header">
                    <h6 className="card-title">Reserve</h6>
                </div>
                <div className="card-body">
                    <form action='/user' method="POST">
                      <div className="form-group">
                          <label htmlFor="Name">Name </label>
                          <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" name="Name" placeholder="Enter Name"/>
                      </div>
                      <div class="form-group">
                        <label htmlFor="Date">Date</label>
                        <input type="date" class="form-control" id="Date" placeholder="Date" name="Date"/>
                      </div>
                      <div class="form-group">
                        <label htmlFor="Time">Time</label>
                        <input type="time" class="form-control" id="Time" placeholder="Time" name="Time"/>
                      </div>
                      <div class="form-group">
                        <label htmlFor="Quantity">No Of People</label>
                        <input type="number" class="form-control" id="Quantity" placeholder="No" name="NoOfPeople"/>
                      </div>
                      <div class="form-group">
                        <label htmlFor="Contact">Contact</label>
                        <input type="number" class="form-control" id="Contact" placeholder="Contact" name="Contact"/>
                      </div>
                         
                         <button type="submit" class="btn btn-outline-success">Make Reservation</button>
                      </form>
                </div>
            </div>
        </div>
    )
}

export default ReservationForm
