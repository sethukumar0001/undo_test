import React from 'react';
import '../Css/active2.css'; 
import "bootstrap/dist/css/bootstrap.min.css"

function ActiveTwoList(){
    const activegigs=[
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
    const activegiglist= activegigs.map(activegig=>(<div className="active" ><h3 className="rw1">{activegig.Title}</h3> 
    <div className="rw1 row">
    <h5 className="ml-3">Skills</h5><h5  className="skillslist" >{activegig.Skills}</h5></div> 
    <div className="rw1 row">
    <h5 className="ml-3">Description</h5> <h5 className="descriptionlist">{activegig.Description}</h5>
    
    </div>
    </div>
    ))
    return <div>{activegiglist}</div>}
export default ActiveTwoList;