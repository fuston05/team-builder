import React from 'react';

const Form = (props) => {
 
  function changeHandler(e){
    props.setTeamMember( { ...props.teamMember, [e.target.name]: e.target.value } );
  }

  function handleSubmit(e){
    e.preventDefault();
  }
  
  return (
    <div className= 'formCont'>
      {console.log(props.teamMember)}
      <form onSubmit= {e => handleSubmit(e)}>
        <label>Full Name:  
          <input value= {props.teamMember.fullName} onChange= {e => changeHandler(e)} name= 'fullName' placeholder= 'Name' type= 'text' />
        </label> 

        <label>Email:
          <input value= {props.teamMember.email} onChange= {e => changeHandler(e)} name= 'email' placeholder= 'Email' type= 'email' />
        </label>

        <label>Role: 
          <input value= {props.teamMember.role} onChange= {e => changeHandler(e)} name= 'role' placeholder= 'Company Role' type= 'text' />
        </label> 
        <input type= 'submit' />      
      </form>
    </div>
  )
}

export default Form;
