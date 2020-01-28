import React from 'react';

const Team = (props) => {

  return (
    <div className= 'teamCont'>
      {
        props.team.map( (ele, i) => {
          return (
            <div key= {i} className= 'teamMemberCont'>
              <h2><b>Name:</b> {ele.name}</h2>
              <p><b>Email:</b> {ele.email}</p>
              <p><b>Role:</b> {ele.role}</p>
            </div>
          )
        } )
      }
      
    </div>
  )
}

export default Team;