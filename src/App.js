import React, {useState} from 'react';
import Form from './components/Form/Form';
//styles
import './App.css';

function App() {
  const [teamMember, setTeamMember]= useState({
    fullName: '',
    email: '',
    role: ''
  })

  return (
    <div className="App">
      <Form  teamMember= {teamMember} setTeamMember= {setTeamMember}/>
    </div>
  );
}

export default App;
