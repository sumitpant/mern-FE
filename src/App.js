import React from 'react'
import './App.css';
import Login from './components/Login';
import Main from './components/Main'
import Reservation from './components/Reservation'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Error from './components/Error'

function App() {
  return (
    <div className="App">
          
        <Router>
           <Switch>
             <Route exact path ="/" component={Login}/>
             <Route path="/main" component={Main}/>
             <Route path="/reservation/:id" component={Reservation}/>
             <Route path="/error/:errmsg" component={Error}/>
           </Switch>
          
        </Router>
    </div>
  );
}

export default App;
