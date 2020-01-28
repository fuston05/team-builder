import React, {useState} from 'react';
import Form from './components/Form/Form';
import Team from './components/Team/Team';
import team from './components/Team/teamData';
//styles
import './App.css';

function App() {
  const [myTeam, setMyTeam]= useState(team);
  const [teamMember, setTeamMember]= useState({
    name: '',
    email: '',
    role: ''
  })

  return (
    <div className="App">
      <Form myTeam={myTeam} setMyTeam= {setMyTeam} teamMember= {teamMember} setTeamMember= {setTeamMember}/>
      <Team team={myTeam} />
    </div>
  );
}

export default App;
