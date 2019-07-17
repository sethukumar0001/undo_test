import React, { Component } from 'react';

import decode from 'jwt-decode';

import '../Css/like.css'

class LikeButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      btnText: 'Like',
      className: 'heartFull',
      user:'',
      myData:this.props.id
    }
    // console.log(this.props.myData)
  }

  componentWillMount(){
    var id_token = decode(localStorage.getItem('id_token'));
    console.log(id_token);
    this.setState({
      user:id_token,
      // myData:this.props.passedVal
    })
  }
  
  btnClick() {
    if(this.state.btnText === 'Like') {
      this.setState({
        btnText : 'Unlike',
        className : 'heartOpen'
      })
      const data=this.state
      fetch('http://localhost:4000/backend/liked', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
      }).then(function(response) {
        if(response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      }).then((data) =>{
        console.log(data);     
        if(data){
        
           this.props.history.push('/mygigs');
        }   
      }).catch(function(err) {
        console.log(err)
      });



    } else {
      this.setState({
        btnText: 'Like',
        className: 'heartFull'
      })
      const data=this.state
      fetch('http://localhost:4000/backend/unliked', {
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
        if(data){
        
           this.props.history.push('/mygigs');
        }   
      }).catch(function(err) {
        console.log(err)
      });
    }
  }

  render() {
    console.log(this.props.id)
    return (
      <span onClick={ this.btnClick.bind(this) } className={this.state.className}>
        { this.state.btnText }
      </span>
    )
  }
}

export default LikeButton;
