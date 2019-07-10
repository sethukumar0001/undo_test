import React,{Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/option.css';
import {  Link } from "react-router-dom";
var { SocialIcon } = require('react-social-icons');
export default class OptionSelect extends Component {
render(){
return (
   
  <div className="Optionselect" > {/* home div started */}
  <nav className="navbar navbar-expand-sm mb-3 bg-light"> {/*nav tag opened  */}
  
  <Link to="/mygigs" className="navbar-brand" > {/* navbar-brand started */}
      <img  className="img-responsive " src={require('./Images/sethu.png')} alt="logo" width='80%' height='80'>
   
    </img>
    </Link> 
    </nav>
<center>
<div className="card option-select shadow-lg">
<div className="card-body">
<p className=" card-text text-center font-weight-bold text-primary">SELECT YOUR CATEGORY</p>
<center><ul className="navbar-nav ml-auto "> {/* nav ul started */}
    <li className="nav-item mr-3"> {/* li 1 started */}
      <Link to="/login"  className="btn btn-primary text-center">Undogigs</Link><span>(For Hire)</span> 
    </li> {/* li 1 closed */}
    <br></br>
    <li className="nav-item mr-3"> {/* li 1 started */}
      <Link to="/login"  className="btn btn-primary text-center">Undoguys</Link><span>(For Work)</span> 
    </li> {/* li 1 closed */}
</ul></center>
</div>
</div>
</center>

    <div className=" navbar-expand-sm bg-light footer-container "> 
<div className="row">
<div className="col-sm-6 mt-3">
<h4> 	&#169; 2019- Novisync Inc.</h4>
</div>
<div className="col-sm-6 mt-3">

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
