import React from 'react';

const Team = (props) => {
    if(!props.team.length){//if no team members:
      return (
        <h2>Add team member</h2>
      )
    }//end if !props
    console.log('teamMember from Team.js: ', props.teamMember);
  return (
    <div className= 'teamCont'>
      {
        props.team.map( (ele, i) => {
          return (
            <div key= {i} className= 'teamMemberCont'>
              <h2><b>Name:</b> {ele.name}</h2>
              <p><b>Email:</b> {ele.email}</p>
              <p><b>Role:</b> {ele.role}</p>
              <button index= {i} onClick= { (e) => {props.editMember(e)} }>Edit</button>
            </div>
          )
        } )
      }
    </div>
  )
}

export default Team;