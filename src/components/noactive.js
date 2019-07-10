import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import '../Css/mygigs.css';
import AuthHelperMethods from '../Authentication/AuthHelperMethods';
import withAuth from '../Authentication/withAuth';
//import axios from 'axios'

//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Axios from 'axios';
//import { Grid, Icon, Image , Button} from 'semantic-ui-react'


const useStyles = (makeStyles)=>({
  card: {
    minWidth: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;
//import MygigsOne from './mygigs';
 class NoActive extends Component {

  constructor(props){
    super(props);
    this.state={
      data:[]
    }
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


    render() {
      console.log(this.state.data);
      var cardStyle = {
        display: 'block',
        width: '85vw',
        transitionDuration: '0.5s',
        height: '15vw'
    }
      return (
       
        <div className="undoguysheader" >
        <nav className="navbar navbar-expand-sm mb-3 bg-light"> {/*nav tag opened  */}

<Link to="/mygigs" className="navbar-brand" > {/* navbar-brand started */}
    <img  className="img-responsive bg-transparent " src={require('./Images/Logo.png')} alt="logo" width='80%' height='80'>
 
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
<ul className="navbar-nav float-right mt-3 ">
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
<div>active</div>
  <div >
  {this.state.data.map(member =>
 
  <Card className={classes.card} style={cardStyle}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
         <div key={member.id}>{member.firstname} {member.lastname} - {member.email}</div>
      
        </Typography>
      </CardContent>
    
    </Card>
     )}
     </div>
  </div>
       
      );
  }
}
export default withAuth(NoActive); 