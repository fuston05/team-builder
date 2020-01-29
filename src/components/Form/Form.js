import React, {useState, useEffect} from 'react';
import Team from '../Team/Team';

const Form = (props) => {
  
  const [teamMember, setTeamMember]= useState({
    name: '',
    email: '',
    role: ''
  })

  if( props.memberToEdit === {} ){
    setTeamMember(...teamMember, props.memberToEdit);
    
  }

  function changeHandler(e) {
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
    console.log('teamMember from changeHandler: ',teamMember);
  }

  useEffect(() => {
    
  }, [props.memberToEdit])

  function handleSubmit(e) {
    e.preventDefault();
    props.setMyTeam([ ...props.team, teamMember ])
    setTeamMember({
      name: '',
      email: '',
      role: ''
    })
  }
  // console.log('memberToEdit: ',props.memberToEdit);
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
      <Team editMember= {props.editMember} team= {props.team} />
    </div>
  )
}

export default Form;
