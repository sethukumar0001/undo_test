import React, { Component } from 'react';
//import UndoguysHeader from './UndoGuyHeader';
import '../Css/profile.css';
import AuthHelperMethods from '../Authentication/AuthHelperMethods';
import withAuth from '../Authentication/withAuth';
import decode from 'jwt-decode';
import {Link} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
class Profile extends Component {

  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout()
    this.props.history.replace('/login');
  }

  constructor(props){
    super(props)
   
      this.state={
        skills:'',
        experience:'',
        qualification:'',
    location:'',
    user:''
	
      }
      this.displayLogin = this.displayLogin.bind(this);    
  }


  componentWillMount(){
    var id_token = decode(localStorage.getItem('id_token'));
    console.log(id_token);
    this.setState({
      user:id_token
    })
  }
  displayLogin =async (e) =>{
		e.preventDefault();
		const data=this.state;

fetch('http://localhost:4000/backend/profile', {
	method: 'POST',
	headers: {'Content-Type':'application/json'},
	body: JSON.stringify({data})
}).then(function(response) {
	if (response.status >= 400) {
		throw new Error("Bad response from server");
	}   
	return response.json();
}).then((data) =>{
	console.log(data);
		 alert("profile updated");     
	if(data){
	
		 this.props.history.replace('/mygigs');
	}

}).catch(function(err) {
	console.log(err)
});
}

    render() {
      console.log(this.state.user.email);
		
      return (
		  
        <div className="undoguysheader" >
             <nav className="navbar navbar-expand-sm mb-3 bg-light"> {/*nav tag opened  */}

<Link to="/mygigs" className="navbar-brand" > {/* navbar-brand started */}
<img  className="img-responsive lg-transparent " src={require('./Images/Logo.png')} alt="logo" width='80%' height='80'>
 
  </img>
  </Link> {/* navbar-brand closed */}

  <ul className="navbar-nav ml-auto "> {/* nav ul started */}
    <li className="nav-item mr-3"> {/* li 1 started */}
      <Link to="/nosaved"  className="nav-link text-black " >My Gigs</Link> 
    </li> {/* li 1 closed */}
    <li className="nav-item mr-3 "> {/* li2 started */}
    <Link to="/profileone" className="nav-link text-black "  >Profile</Link >
    </li> {/* li2 closed */}
 
    <li className="nav-item  mr-3"> {/*  li3 started*/}
      <Link to="/messagesone" className="nav-link text-black " >Messages</Link> 

    </li> {/* li3 closed */}
 
    <li className="nav-item  mr-3"><input type="search" placeholder="search"/></li>
    <li className="nav-item  mr-3"> {/*  li4 started*/}
{/* <button type="button" className="search-button" ><img src={require('./Images/searchw.png')} alt="search"  ></img></button> */}

  </li> {/* li4 closed */}

  <li className="nav-item "> {/*  li3 started*/}
    <button type="button" className="btn btn-info" onClick={this._handleLogout}>Logout</button>
    </li> {/* li3 closed */}
  </ul>  {/*ul closed  */}
  
  
</nav> 
		  
			
          <div className="ProfileOne">  {/* profileone div started */}
          
       
          <div className="fluid-container ">{/* first container div started */} 
          
          <div className="row"> {/*  row div started */} 
          <div className="col-lg-6" >
    <img  src={require('./Images/Group 15.png')} alt="logo" width="100%"height="100%" /> 

      </div>{/* first col  div ended */} 
      <div className="col-lg-6 "> {/* 2nd col div started */} 
      <div className="card profile-box m-3"> {/*card div started */} 
      <div className="card-body"> {/*card body div ended */} 
      <div className="row">
      <div className="col-sm-3">
      <p className="text-primary font-weight-bold ml-3 mt-3" >{this.state.user.email} </p>
    
      </div>
      <div className="col-sm-3 ml-auto">
      <img  src={require('./Images/undraw_profile_pic_ic5t.png')} alt="profilepic" width='100%' height='100'></img>
      </div>
      </div>
      <form onSubmit={this.displayLogin}>
				
					<input 
							type="text"
							placeholder="skills"
							name="skills"	
							value={this.state.skills}
							onChange={e=>this.setState({skills:e.target.value})}
							className="mr-3 form-control"
						/>
						<input
							type="text"
							placeholder="qualification"
							name="qualification"
							value={this.state.qualification}
							onChange={e=>this.setState({qualification:e.target.value})}
							className="form-control"
						/>

            <input
							type="text"
							placeholder="experience"
							name="experience"
							value={this.state.experience}
							onChange={e=>this.setState({experience:e.target.value})}
							className="form-control"
						/>  
            <input
							type="text"
							placeholder="location"
							name="location"
							value={this.state.location}
							onChange={e=>this.setState({location:e.target.value})}
							className="form-control"
						/>
				
					
 <p className="text-success ml-3">Completed projects  :  2</p>

 <button type="submit" className="btn btn-primary profile-button ml-3">submit</button>
 </form>
      </div> {/*card body div ended */} 
      </div> {/*card  div ended */} 
      </div> {/* 2nd col div endted */} 
      </div> {/*  row div ended */} 
      </div> {/*  container div ended */} 
        
          </div>
          </div>
      );
    }
}

export default withAuth(Profile);