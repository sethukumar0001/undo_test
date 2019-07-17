import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import '../Css/mygigs.css';
import AuthHelperMethods from '../Authentication/AuthHelperMethods';
import withAuth from '../Authentication/withAuth';
import decode from 'jwt-decode';
import '../Css/card.css';


//import Axios from 'axios';
//import { Grid, Icon, Image , Button} from 'semantic-ui-react'


 class Mygigs extends Component {

  constructor(props){
    super(props);
    this.state={
      data:[],
      clicked:false,
      user:'',
      myData:''
    }
  }
  handleClick(){
    this.setState({clicked:true})
  }
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
}
// displayPost =async (e) =>{
// var data = this.state;
// fetch('http://localhost:4000/backend/displaypost', {
// 	method: 'POST',
// 	headers: {'Content-Type':'application/json'},
// 	body: JSON.stringify({
//     data,
//     id:this.props.member.id
//   })
// }).then(function(response) {
// 	if (response.status >= 400) {
// 		throw new Error("Bad response from server");
// 	}   
// 	return response.json();
// }).then((data) =>{
// 	console.log(data);
// 		 alert("data inserted successfully");     
// 	if(data){
	
// 		 this.props.history.replace('/nosaved');
// 	}

// }).catch(function(err) {
// 	console.log(err)
// });
// }

clickOnMe = (val) => {
  this.setState({myData : val});
  console.log(this.state.myData);
  
  
}
  submitPost=()=>{
    var data = this.state; 
fetch('http://localhost:4000/backend/displaypost', {
	method: 'POST',
	headers: {'Content-Type':'application/json'},
	body: JSON.stringify({
    data
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




<div>saved</div>
  {/* <div >
  {this.state.data.map(member =>(


  <Card className={classes.card} style={cardStyle} >
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>      
        <div className="font-weight-bold" key={member.id}>{member.project_desc} </div>
        <div className="row mt-3"key={member.id}>
        <p className="font-weight-bold ">Skills:{member.skills}</p>
        </div>
        <div className="row" >
        <p className="font-weight-bold ">Description:{member.project_desc}</p><br></br>
      
        {this.state.clicked ? (
        <button className="search-button ml-auto  "><img src={require('./Images/Comment.png')}  height='30'width='30' className="ml-auto mt-3" /></button> ): (<button className="search-button ml-auto mt-3"  onClick={this.handleClick.bind(this, member.id)} ><img src={require('./Images/Heart.png')}height='30'width='30' /> </button>)}
        <img src={require('./Images/Comment.png')}height='30'width='30' className="ml-3 mt-3 mr-3" />  
        </div>
        </Typography>
        <button className="btn btn-primary ml-auto mr-3" onClick={() => this.displayPost(member.id).bind(this)} >Apply</button>
          </CardContent>    
    </Card>
     ))}
     </div> */}

<form onSubmit={this.submitPost.bind(this)}>
<div >
  {this.state.data.map((member,i) =>(
<div className="card">
  <ul>
  <div className="container">
    <h3><b>{member.project_title}</b></h3><br></br>
    <li><b>Project_description:</b>{member.project_desc}</li>  
    <li><b>Skills:</b>{member.skills}</li>  
    <li><b>Posted Date:</b>{member.createdAt}</li> 
    <button className="sethu1" onClick={this.clickOnMe.bind(this,member.id)}>Apply</button>
  </div>
  </ul>
  </div>
   ))} 
  </div>
  </form> 
  </div>

      );
  }
}
export default withAuth(Mygigs); 