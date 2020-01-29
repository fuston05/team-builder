import React, { useState, useEffect } from 'react';
import Team from '../Team/Team';

const Form = (props) => {

  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: ''
  })

  function changeHandler(e) {
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (teamMember) {
      let edit = props.memberToEdit;
      setTeamMember({ ...teamMember, ...edit });
    }//end if
  }, [props.memberToEdit])

  function handleSubmit(e) {
    e.preventDefault();
    props.setMyTeam([...props.team, teamMember])
    setTeamMember({
      name: '',
      email: '',
      role: ''
    })
  }

  return (
    <div className='mainCont'>
      <form onSubmit={e => handleSubmit(e)}>
        <label>Full Name:
          <input value={teamMember.name} onChange={e => changeHandler(e)} name='name' placeholder='Name' type='text' />
        </label>

        <label>Email:
          <input value={teamMember.email} onChange={e => changeHandler(e)} name='email' placeholder='Email' type='email' />
        </label>

        <label>Role:
          <input value={teamMember.role} onChange={e => changeHandler(e)} name='role' placeholder='Company Role' type='text' />
        </label>
        <input type='submit' />
      </form>
      <Team teamMember={teamMember} editMember={props.editMember} team={props.team} />
    </div>
  )
}

export default Form;
