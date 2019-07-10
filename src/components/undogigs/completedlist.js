import React from 'react';
import '../Css/active2.css'; 
import "bootstrap/dist/css/bootstrap.min.css"

function CompletedtwoList(){
    const completedgigs=[
        {
            Title:'Preorder App',
            Skills:'React native,Javascript,JSX',
            Description:'Some description about Project',
        },{
            Title:'R-ptms App',
            Skills:'React native,Javascript,JSX',
            Description:'Some description about Project'
        }
    ]
    const completedgiglist= completedgigs.map(completedgig=>(<div className="active" ><h3 className="rw1">{completedgig.Title}</h3> 
    <div className="rw1 row">
    <h5 className="ml-3">Skills</h5><h5  className="skillslist" >{completedgig.Skills}</h5></div> 
    <div className="rw1 row">
    <h5 className="ml-3">Description</h5> <h5 className="descriptionlist">{completedgig.Description}</h5>
    
    </div>
    </div>
    ))
    return <div>{completedgiglist}</div>}
export default CompletedtwoList;