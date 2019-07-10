import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,Switch
 
} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/register";
import UndoguysHome from "./components/unguyshome";
import MygigsOne from "../src/components/mygigs";
import NoActive from "../src/components/noactive";
import NoSaved from "../src/components/nosaved";
import NoCompleted  from "../src/components/nocompleted";
import NoApplied from "../src/components/noapplied";
import MessagesOne from "../src/components/messages";
import Profile from "../src/components/profile";
import OptionSelect from "../src/components/selectoption";

class App extends Component {
  render() {
    return (
      <Router>

{/* sethu\ */}
      {/* sethu */}
<Switch>     
  <Route exact path='/' component={Home}></Route>
  <Route  path='/login' component={Login}></Route>
  <Route  path='/register' component={Register}></Route>
  <Route  path='/undoguyshome' component={UndoguysHome}></Route>
  <Route path='/profileone' component={Profile}></Route>
  <Route path='/mygigs' component={MygigsOne}></Route>
  <Route path='/noactive' component={NoActive}></Route>
  <Route path='/nosaved' component={NoSaved}></Route>
  <Route path='/nocompleted' component={NoCompleted}></Route>
  <Route path='/noapplied' component={NoApplied}></Route>
  <Route path='/messagesone' component ={MessagesOne}></Route>
  <Route exact path='/optionselect' component={OptionSelect}></Route>
</Switch>
      </Router>
    );
  }
}

export default App;
