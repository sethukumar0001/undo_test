import React,{Component} from 'react';
 import "bootstrap/dist/css/bootstrap.min.css";

import AuthHelperMethods from '../Authentication/AuthHelperMethods';
import withAuth from '../Authentication/withAuth';

import '../Css/Home.css';
import {  Link } from "react-router-dom";



 class UndoGuysHeader extends Component {
    Auth = new AuthHelperMethods();

    _handleLogout = () => {
      this.Auth.logout()
      this.props.history.replace('/login');
    }
  render(){
  return (

<div className="Home" > {/* home div started */}
<nav className="navbar navbar-expand-sm bg-light  "> {/*nav tag opened  */}
<Link to="/login" className="navbar-brand" > {/* navbar-brand started */}
    <img  className="img-responsive " src={require('./Images/Logo.png')} alt="logo" width='100%' height='80'>
  </img>
  </Link> {/* navbar-brand closed */}
  <ul className="navbar-nav ml-auto"> {/* nav ul started */}
    <li className="nav-item "> {/* li 1 started */}
      <Link to="/"className="nav-link mr-3 " >How it works?</Link> 
    </li> {/* li 1 closed */}


    <li className="nav-item "> {/*  li3 started*/}
    <button type="button" className="btn btn-info" onClick={this._handleLogout}>Logout</button>
    </li> {/* li3 closed */}
  </ul>  {/*ul closed  */}
  <div className="bottom-section">
             
            </div>
</nav> 
 </div> 
   
  );
}
}
export default withAuth(UndoGuysHeader);