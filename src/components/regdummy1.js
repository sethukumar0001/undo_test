import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Css/register.css';

import AuthHelperMethods from '../Authentication/AuthHelperMethods';



class Register extends Component {

	Auth = new AuthHelperMethods();

	constructor(props) {
		super(props);

		this.state = { 
			firstname: '',
			lastname:'',
			email: '',
			mobilenumber:'',
			password: '',
			password1:'',
			selectedValue:'',
			
		};

		this.displayLogin = this.displayLogin.bind(this);
	}
	handleChange=(event)=> {
    console.log(event.target.value);
    this.setState({
      ...this.state,
      selectedValue: event.target.value
    });
  };
 
  change(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit=(event)=>{
    console.log('A name was submitted: ' , this.state);
    event.preventDefault();
  }



	displayLogin =async (e) =>{
		e.preventDefault();
// var firstname=this.state.firstname;
// var lastname=this.state.lastname;
// var email=this.state.email;
// var password=this.state.password;
// var password1=this.state.password1;
// var mobilenumber=this.state.mobilenumber;


var password=this.state.password;
var password1=this.state.password1;
console.log(password);
console.log(password1);

		if(password === password1){
const data=this.state;
// const response= await fetch('http://localhost:4000/backend/add',{
// 	method:'POST',
// 	headers:{
// 		'Content-Type':'application/json',
// 	},
// 	body:JSON.stringify({data}),
// });
// const body = await response.text();
// this.setState({response:body});
// console.log(data);
// const user={
// 	firstname:this.state.firstname,
// 	lastname:this.state.lastname,
// 	email:this.state.email,
// 	mobilenumber:this.state.mobilenumber,
// 	password:this.state.password,
// 	category:this.state.selectedValue
// }
// axios.post('http://localhost:4000/backend/add',{
// 	data
// }).then((data)=>{
// 	console.log(data);
// 	this.props.history.replace('/login');
// })



fetch('http://localhost:4000/backend/add', {
	method: 'POST',
	headers: {'Content-Type': 'application/json'},
	body: JSON.stringify({data})
}).then(function(response) {
	if (response.status >= 400) {
		throw new Error("Bad response from server");
	}
	return response.json();
}).then((data) =>{
	console.log(data);
		 alert("Thanks for registering");     
	if(data){
	
		 this.props.history.replace('/login');
	}

}).catch(function(err) {
	console.log(err)
});

	
	}
		else{
			alert("Password is Not Matched");
		}

	}
	handleOptionChange(changeEvent) {
		this.setState({
			selectedOption: changeEvent.target.value
		});
	}
	componentDidMount(){
		console.log(this.Auth.loggedIn());
		if(this.Auth.loggedIn()){
			this.props.history.push('/undoguyshome')
		}
	}

	render() {
		console.log(this.state.response);
		return (
			<div className="register">
			<nav className="navbar navbar-expand-sm mb-3 bg-light"> {/*nav tag opened  */}

		<Link to="/" className="navbar-brand" > {/* navbar-brand started */}
    <img  className="img-responsive " src={require('./Images/Logo.png')} alt="logo" width='100%' height='80'>
 
  </img>
  </Link> {/* navbar-brand closed */}
  
  <ul className="navbar-nav ml-auto"> {/* nav ul started */}
    <li className="nav-item "> {/* li 1 started */}
      <p className="nav-link text-dark" >Already registerd?</p> 
    </li> 
	<li className="nav-item "> {/* li 1 started */}
      <Link to="/login"className="nav-link " >Login</Link> 
    </li> 
	</ul>
 
</nav> {/* navbar closed */}

<div className="sethu">
<div className="container ">
<div className="row ml-3 ">
    <div className="col-lg-6" >
	<form onSubmit={this.displayLogin}>
					<div className="form-inline">
						<input
							type="text"
							placeholder="First Name"
							name="firstname"	
							value={this.state.firstname}
							onChange={e=>this.setState({firstname:e.target.value})}
							className="mr-3 form-control"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastname"
							value={this.state.lastname}
							onChange={e=>this.setState({lastname:e.target.value})}
							className="form-control"
						/>
					</div>
					

					<div className="form-inline">
					<input
							type="text"
							placeholder="Mobile No."
							name="email"
							value={this.state.mobilenumber}
							onChange={e=>this.setState({mobilenumber:e.target.value})}
							className="mr-3 form-control"
						/>
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={e=>this.setState({email:e.target.value})}
							className="mr-3 mb-3 form-control"
						/>
					</div>

					<div className="form-inline">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={e=>this.setState({password:e.target.value})}
							className="mr-3 mb-3 form-control"
						/>

				
						<input
							type="password"
							placeholder="Confirm Password"
							name="password1"
							value={this.state.password1}
							onChange={e=>this.setState({password1:e.target.value})}
							className="mr-3 mb-3 form-control"
						/>

						</div>
		
						
						{/* <h5 className="ml-3 mb-3 text-primary">Select your Category</h5>
						<div className="radio-container mt-auto mb-3">
						
						<input type="radio" className="mr-3 "/>
						<label className="mr-3">UndoGigs</label>
						<input type="radio"  />
						<label className="ml-3 ">UndoGuys</label>
						</div> */}
							<br></br>		
						<div className="container">
  <div className="row">
	<div className="container">

        <form onSubmit={this.handleSubmit} >
    

        <div className="k-form-field" >
            <input type="radio" name="radio" value="UndoGigs" className="radio" onChange={this.handleChange}/>
          <label className="label">UndoGigs</label>

          <input type="radio" name="radio" value="UndoGuys" className="radio" onChange={this.handleChange}/>
          <label className="label">UndoGuys</label>
        </div>

        </form>
      </div>
    

    </div>
  </div>
	

				<br></br>		
							<button type="submit" value="Signup"  className=" btn btn btn-primary mt-auto" >	Sign Up</button>
						</form>
          </div>
    <div className="col-lg-6" >
	<img  src={require('./Images/Group 15.png')} alt="logo" width="100%"height="100%" ></img>

      </div>
  </div>
	</div>
  </div>

  </div>
		);
	}
}

export default Register;


// import React, {Component} from "react";
// // import axios from 'axios';
// import { Link} from 'react-router-dom';
// import '../Css/register.css';


// export default class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//      fields: {},
//      errors: {},
//      remember_me: false
//     }
//     this.onSubmit = this.onSubmit.bind(this);
//   }


// 	handleChange=(event)=> {
//     console.log(event.target.value);
//     this.setState({
//       ...this.state,
//       selectedValue: event.target.value
//     });
//   };
 
//   change(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   handleSubmit=(event)=>{
//     console.log('A name was submitted: ' , this.state);
//     event.preventDefault();
//   }




//   handleValidation(){
//     let fields = this.state.fields;
//     let errors = {};
//     let formIsValid = true;

//    if(!fields["email"]){
//      formIsValid = false;
//      errors["email"] = "Email ID is required";
//     }

//    //Password
//    if(!fields["password"]){
//       formIsValid = false;
//       errors["password"] = "Password is required";
//    }

// 	 if(!fields["firstname"]){
// 		formIsValid = false;
// 		errors["firstname"] = "firstname is required";
//  }

//  if(!fields["lastname"]){
// 	formIsValid = false;
// 	errors["lastname"] = "lastname is required";
// }

// if(!fields["mobilenumber"]){
// 	formIsValid = false;
// 	errors["mobilenumber"] = "mobilenumber is required";
// }

// if(!fields["selectedValue"]){
// 	formIsValid = false;
// 	errors["selectedValue"] = "category is required";
// }

//    this.setState({errors: errors});
//    return formIsValid;
//  }

//  onSubmit = async (e)=>{
//    e.preventDefault();

//   if(this.handleValidation()){
// 		e.preventDefault();

// 		const data=this.state;
// 		const response= await fetch('http://localhost:4000/backend/add',{
// 			method:'POST',
// 			headers:{
// 				'Content-Type':'application/json',
// 			},
// 			body:JSON.stringify({data}),
// 		});
// 		const body = await response.text();
// 		this.setState({response:body});
// 		console.log(data);
//    }
//   }

//   onChange(field, e){
//     let fields = this.state.fields;
//     fields[field] = e.target.value;
//     this.setState({fields});
//   }


//   render() {
// 		console.log(this.state.response);
//     return (

// <div className="register">
// 			<nav className="navbar navbar-expand-sm mb-3 bg-light"> {/*nav tag opened  */}

// 		<Link to="/" className="navbar-brand" > {/* navbar-brand started */}
//     <img  className="img-responsive " src={require('./Images/Logo.png')} alt="logo" width='100%' height='80'>
 
//   </img>
//   </Link> {/* navbar-brand closed */}
  
//   <ul className="navbar-nav ml-auto"> {/* nav ul started */}
//     <li className="nav-item "> {/* li 1 started */}
//       <p className="nav-link text-dark" >Already registerd?</p> 
//     </li> 
// 	<li className="nav-item "> {/* li 1 started */}
//       <Link to="/login"className="nav-link " >Login</Link> 
//     </li> 
// 	</ul>
 
// </nav> {/* navbar closed */}
// <div className="container ">
// <div className="row ml-3 ">
//     <div className="col-lg-6" >

//       <div id="login" className="form-popup" role="dialog">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <form className="form-theme text-left">
           
//               <div className="modal-body">
//                 <div className="row">


// 								<div className="col-sm-12">
//                     <div className="form-group input">
//                       <input
//                         value={this.state.fields["firstname"]}
//                         onChange={this.onChange.bind(this, "firstname")}
//                         className="form-control input__field"
//                         type="text"
//                         id="unit"
//                         refs="firstname"
//                         placeholder="firstname *"
//                       />
//                       <span style={{color: "red"}}>{this.state.errors["firstname"]}</span>
//                     </div>
//                   </div>


// 									<div className="col-sm-12">
//                     <div className="form-group input">
//                       <input
//                         value={this.state.fields["lastname"]}
//                         onChange={this.onChange.bind(this, "lastname")}
//                         className="form-control input__field"
//                         type="text"
//                         id="unit"
//                         refs="lastname"
//                         placeholder="lastname *"
//                       />
//                       <span style={{color: "red"}}>{this.state.errors["lastname"]}</span>
//                     </div>
//                   </div>


// 									<div className="col-sm-12">
//                     <div className="form-group input">
//                       <input
//                         value={this.state.fields["mobilenumber"]}
//                         onChange={this.onChange.bind(this, "mobilenumber")}
//                         className="form-control input__field"
//                         type="text"
//                         id="unit"
//                         refs="mobilenumber"
//                         placeholder="mobilenumber *"
//                       />
//                       <span style={{color: "red"}}>{this.state.errors["mobilenumber"]}</span>
//                     </div>
//                   </div>



//                   <div className="col-sm-12">
//                     <div className="form-group input">
//                       <input
//                         value={this.state.fields["email"]}
//                         onChange={this.onChange.bind(this, "email")}
//                         className="form-control input__field"
//                         type="text"
//                         id="unit"
//                         refs="email"
//                         placeholder="Email Id *"
//                       />
//                       <span style={{color: "red"}}>{this.state.errors["email"]}</span>
//                     </div>
//                   </div>

						


//                   <div className="col-sm-12">
//                     <div className="form-group input">
//                       <input
//                         value={this.state.fields["password"]}
//                         onChange={this.onChange.bind(this, "password")}
//                         className="form-control input__field"
//                         type="text"
//                         id="unit"
//                         refs="password"
//                         placeholder="Password *"
//                       />
//                       <span style={{color: "red"}}>{this.state.errors["password"]}</span>
//                     </div>
//                   </div>
               
//                   <div className="col-sm-6">
//                     <div className="register">
//                       <p>Already an User? <Link to="/login">Login</Link></p>
//                     </div>
//                   </div>
//                   <div className="col-sm-12">
                   
//                   </div>
//                 </div>
//               </div>

// 							<div className="container">
//   <div className="row">
// 	<div className="container">
//         <form onSubmit={this.handleSubmit} >
    

//         <div className="k-form-field" >
//             <input type="radio" name="radio" value="UndoGigs" className="k-radio" onChange={this.handleChange}/>
//           <label className="k-radio-label">UndoGigs</label>

//           <input type="radio" name="radio" value="UndoGuys" className="k-radio" onChange={this.handleChange}/>
//           <label className="k-radio-label">UndoGuys</label>
//         </div>

//         </form>
//       </div>
    

//     </div>
//   </div>

//                   <button type="submit" className="btn btn-theme save btn btn-primary" onClick={this.onSubmit}>SignUp</button>
              
//             </form>
//           </div>
				
//         </div>
//       </div>
// 			</div>
// 			<div className="col-lg-6" >
// 	<img  src={require('./Images/login.png')} alt="logo" width="700"height="100%" ></img>

//       </div>
// 			</div>
//       </div>
// 			</div>
//     );
//   }
// }