import React, { Component } from 'react';
import '../Css/active2.css'; 
import "bootstrap/dist/css/bootstrap.min.css"
import GigsTwo from './gigs';
import ActiveTwoList from './activelist';


export default class ActiveTwo extends Component { 
    render() {
      return (
          <div> 
             <GigsTwo></GigsTwo>
              <ActiveTwoList></ActiveTwoList>
</div>
      );
    }
}