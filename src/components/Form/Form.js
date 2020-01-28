import React, {useState} from 'react';

const Form = () => {

  
  return (
    <div className= 'formCont'>
      <form>
        <label>
          <input name= 'fullName' placeholder= 'Name' type= 'text' />
        </label> 

        <label>
          <input name= 'email' placeholder= 'Email' type= 'email' />
        </label>

        <label>
          <input name= 'role' placeholder= 'Company Role' type= 'text' />
        </label>       
      </form>
    </div>
  )
}

export default Form;
