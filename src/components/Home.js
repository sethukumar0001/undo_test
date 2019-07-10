import React,{Component} from 'react';
 import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/Home.css';
import AuthHelperMethods from '../Authentication/AuthHelperMethods';
import withAuth from '../Authentication/withAuth';


import {  Link } from "react-router-dom";
var { SocialIcon } = require('react-social-icons');


class Home extends Component {
 
  Auth = new AuthHelperMethods();
 _handleLogout = () =>{
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
    <button type="button" class="btn btn-info" onClick={this._handleLogout}>Logout</button>
    </li> {/* li3 closed */}
  </ul>  {/*ul closed  */}
  <div className="bottom-section">
             
            </div>
</nav> 


<div className="fluid-container">
<img  className="img-responsive image-container" src={require('./Images/Homeimg1.png')} alt="logo" width='100%'  ></img>
</div>
<div className="fluid-container"> {/* fluid container for card  */}
<div className="container  ">{/* container class div to put cards  started*/}
<div className="card-deck"> {/*card deck class started;card-deck is nothing but group of cards  */}
  <div className="card bg-light shadow-lg"> {/* card1 div started */}
    <div className="card-body ">{/* card1 body div started */}
      <p className="card-text text-center">WHY UNDOGIGS?</p>
      <p className=" card-text text-center">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className=" card-text text-center">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className=" card-text text-center">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className="card-text text-center">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
 
      <div className="text-right"> {/* div for button started */}
  	<button type="button" className="btn btn-primary">Know More>></button>
</div>{/* div for button1 ended */}
       </div> {/* card1 body div ended */}
  </div>{/* card1 div ended */}
  <div className="card bg-light shadow-lg"> {/* card2 div started */}
    <div className="card-body "> {/* card2 body div started */}
      <p className="card-text text-center">WHY UNDOGUYS?</p>
      <p className="card-text text-center">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className="card-text text-center">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className="card-text text-center">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p className="card-text text-center">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      

      <div className="text-right"> {/* div for button2 started */}
  	<button type="button" className="btn btn-primary">Know More>></button>
</div>{/* div for button1 ended */}
</div>  {/* card2 body div ended */}
    </div> {/* card2 div ended */}
  </div> {/*card deck class ended;card-deck is nothing but group of cards  */}
  </div>{/* container class div to put cards  ended*/}
  </div> {/* fluid container for card ended */}

<div className="container footer-container "> 
<div className="row">
<div className="col-sm-6">
<h4> 	&#169; 2019- Novisync Inc.</h4>
</div>
<div className="col-sm-6">

<ul className="list-inline"><li className="list-inline-item" ><h4> Follow Us on</h4></li>
<li className="list-inline-item"><SocialIcon url="http://linkedin.com/in/" /></li>
<li className="list-inline-item"><SocialIcon url="http://www.facebook.com/" /> </li>
<li className="list-inline-item"><SocialIcon url="http://twitter.com/?lang=en" /> </li>
</ul>
</div>
</div>
        
  </div>
    </div>
  
   
  );
}
}

export default withAuth(Home);