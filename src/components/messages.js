import React, { Component,  } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import {Link} from 'react-router-dom';
import AuthHelperMethods from '../Authentication/AuthHelperMethods'
import withAuth from '../Authentication/withAuth';
import Header from '../components/Header';

class MessagesOne extends Component {

  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout()
    this.into.history.replace('/login');
  }

    render() {
      return (
//         <div className="undoguysheader">
//                <nav className="navbar navbar-expand-sm mb-3 bg-light"> {/*nav tag opened  */}

// <Link to="/mygigs" className="navbar-brand" > {/* navbar-brand started */}
// <img  className="img-responsive lg-transparent " src={require('./Images/Logo.png')} alt="logo" width='80%' height='80'>
 
//   </img>
//   </Link> {/* navbar-brand closed */}

//   <ul className="navbar-nav ml-auto "> {/* nav ul started */}
//     <li className="nav-item mr-3"> {/* li 1 started */}
//       <Link to="/nosaved"  className="nav-link text-black " >My Gigs</Link> 
//     </li> {/* li 1 closed */}
//     <li className="nav-item mr-3 "> {/* li2 started */}
//     <Link to="/profileone" className="nav-link text-black "  >Profile</Link >
//     </li> {/* li2 closed */}
 
//     <li className="nav-item  mr-3"> {/*  li3 started*/}
//       <Link to="/messagesone" className="nav-link text-black " >Messages</Link> 

//     </li> {/* li3 closed */}
 
//     <li className="nav-item  mr-3"><input type="search"/></li>
//     <li className="nav-item  mr-3"> {/*  li4 started*/}
// {/* <button type="button" className="search-button" ><img src={require('./Images/searchw.png')} alt="search"  ></img></button> */}

//   </li> {/* li4 closed */}

//   <li className="nav-item "> {/*  li3 started*/}
//     <button type="button" className="btn btn-info" onClick={this._handleLogout}>Logout</button>
//     </li> {/* li3 closed */}
//   </ul>  {/*ul closed  */}
  
  
// </nav> 
<div>
 <Header></Header>
  <div>
      <p>Hello This is message screen</p>
      </div>
      </div>
      );
    }
}
export default withAuth(MessagesOne);