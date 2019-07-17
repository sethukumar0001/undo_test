import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import '../Css/mygigs.css';
import AuthHelperMethods from '../Authentication/AuthHelperMethods';
import withAuth from '../Authentication/withAuth';
import decode from 'jwt-decode';
import LikeButton from './Likes'
import '../Css/card.css';



//import Axios from 'axios';
//import { Grid, Icon, Image , Button} from 'semantic-ui-react'


 class Mygigs extends Component {

  constructor(props){
    super(props);
    this.state={
      data:[],
      // clicked:false,
      user:'',
      myData:'',
      clicked: true,
    }
  }
  // handleClick(){
  //   this.setState({clicked:true})
  // }
  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout()
    this.props.history.replace('/login');
  }


componentDidMount() {
  fetch('http://localhost:4000/backend/gigs', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
    .then(res => res.json())
    .then(members => this.setState({ data: members.data }));   
}


componentWillMount(){
  var id_token = decode(localStorage.getItem('id_token'));
  console.log(id_token);
  this.setState({
    user:id_token
  })
  console.log(this.state.myData); 
}

clickOnMe = (i) => {
  this.setState=({myData:i});
   const data=this.state
 fetch('http://localhost:4000/backend/displaypost', {
	method: 'POST',
	headers: {'Content-Type':'application/json'},
	body: JSON.stringify({
    data,
    id:i
  })
}).then(function(response) {
	if (response.status >= 400) {
	throw new Error("Bad response from server");
	}   
	return response.json();
  }).then((data) =>{
	console.log(data);
		 alert("data inserted successfully");     
	if(data){
	
		 this.props.history.replace('/mygigs');
	}

  }).catch(function(err) {
	console.log(err)
}); 
}
 
    render() {
      console.log(this.state.user.email);
      console.log(this.state.myData);
      var cardStyle = {
        display: 'block',
        width: '85vw',
        marginBottom:'2.5vh',
        transitionDuration: '0.5s',
        height: '15vw',
        backgroundColor:'white',
        borderRadius:'30px',
        marginLeft:'20px',
        paddingBottom:'32vh'
    }
      return (
        <div className="undoguysheader" >
        <nav className="navbar navbar-expand-sm mb-3 bg-light"> 
    <Link to="/mygigs" className="navbar-brand" > 
    <img  className="img-responsive bg-transparent " src={require('./Images/Logo.png')} alt="logo" width='80%' height='80'>
   </img>
    </Link> 

  <ul className="navbar-nav ml-auto ">
    <li className="nav-item mr-3"> 
      <Link to="/mygigs"  className="nav-link text-black">My Gigs</Link> 
    </li>
    <li className="nav-item mr-3 ">
    <Link to="/profileone" className="nav-link text-black">Profile</Link >
    </li> 
 
    <li className="nav-item  mr-3">
      <Link to="/messagesone" className="nav-link text-black " >Messages</Link> 

    </li> 
    <li className="nav-item  mr-3"><input type="search" placeholder="search"/></li>
    <li className="nav-item  mr-3">
    {/* <button type="button" className="search-button" ><img src={require('./Images/searchw.png')} alt="search"  ></img></button> */}
  </li> 
  <li className="nav-item "> 
    <button type="button" className="btn btn-info" onClick={this._handleLogout}>Logout</button>
    </li> 
  </ul>  
</nav> 

<ul className="navbar-nav float-right mt-3">
    <li className="nav-item mr-3 " >
      <Link  className="nav-link " to="/nosaved">Saved</Link>
    </li>
    <li className="nav-item mr-3 ">
      <Link className="nav-link " to="/noapplied">Applied </Link>
    </li>
    <li className="nav-item mr-3">
      <Link className="nav-link " to="/noactive">Active</Link>
    </li>
    <li className="nav-item mr-3 ">
      <Link className="nav-link "to="/nocompleted">Completed</Link>
    </li>
</ul>




<div>mygigs</div>
 
<div >
  {this.state.data.map((member,i) =>(
<div className="card">

  <ul>
  <div className="container">
 
   <center> <h3><b>{member.project_title}</b></h3><br></br></center>
   <LikeButton id={member.id}/>
    <p><b>Project_description:&nbsp;</b>{member.project_desc}</p>  
    <p><b>Skills_Required &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</b>{member.skills}</p>  
    <p key={member.id} ><b>Posted Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</b>{member.createdAt}</p>
    <button kew={i} className="sethu1" onClick={() => this.clickOnMe(member.id)}>Apply</button>
  </div> 
  </ul>
  </div>
  
   ))} 
  </div>
 
  </div>

      );
  }
}
export default withAuth(Mygigs); 