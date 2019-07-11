import React from 'react';
import AuthHelperMethods from '../Authentication/AuthHelperMethods';
import withAuth from '../Authentication/withAuth';
import decode from 'jwt-decode';


class Likes extends React.Component {
    Auth = new AuthHelperMethods();

  constructor(props){

    super(props);
    this.state = {
      likes: 0,
      user:'',
      updated: false
    };

  }
  componentWillMount(){
    var id_token = decode(localStorage.getItem('id_token'));
    console.log(id_token);
    this.setState({
      user:id_token
    })
  }


  updateLike=()=> {
    fetch('http://localhost:4000/backend/likes', {
        method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: JSON.stringify({
        like:this.state.likes,
        user:this.state.user.email
       })
  
    })
      .then(res => res.json())
      .then(likes => this.setState({ data: likes.data }));
  }
  updateLikes = () => {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });

    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });

    }
  }

  render(){
      console.log(this.state.user.email);
      console.log(this.state.likes)

    return(
      <div>
          <form onSubmit={this.updateLike.bind(this)}>
        <p onClick={this.updateLikes}>Like</p>
        <p>{this.state.likes}</p>
        </form>
      </div>
    );
  }
}

export default withAuth(Likes);