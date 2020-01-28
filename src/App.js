import React, {useState} from 'react';
import Form from './components/Form/Form';
//styles
import './App.css';

function App() {
  const [teamMembers, setTeamMembers]= useState([]);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
