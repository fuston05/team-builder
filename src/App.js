import React, {useState} from 'react';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import team from './components/Team/teamData';
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
      <Team team={team} />
    </div>
  );
}

export default App;
