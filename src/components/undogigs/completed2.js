import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import GigsTwo from './gigs';
import CompletedtwoList from './completedlist';
export default class CompletedTwo extends Component { 
    render() {
      return (
          <div>
             <GigsTwo></GigsTwo>
             <CompletedtwoList></CompletedtwoList>
             <div><button className="btn btn-primary rating-btn mt-3 ml-3">Rating</button></div>
             </div>
      );
    }
}