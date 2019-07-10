

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