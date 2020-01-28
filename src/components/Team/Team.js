import React from 'react';

const Team = ({team}) => {
  return (
    <div className= 'teamCont'>
      {console.log('team from Team',team)}
      {
        team.map( (ele, i) => {
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