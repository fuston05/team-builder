import React, { useState } from 'react';
import Form from './components/Form/Form';

//styles
import './App.css';

//used for testing and styling
const fakeData = [
  {
    name: 'Scott Fuston',
    email: 'fuston@email.com',
    role: 'CEO'
  },
  {
    name: 'Harmoni Fuston',
    email: 'harmoni@email.com',
    role: 'District Manager'
  },
  {
    name: 'Glenn Gill',
    email: 'bobSanders@email.com',
    role: 'Minion'
  },
  {
    name: 'Honesty Gibson',
    email: 'honesty@email.com',
    role: 'Mini Minion'
  },
  {
    name: 'Hope Twitty',
    email: 'hope@email.com',
    role: 'Minion Manager'
  },
  {
    name: 'Todd Dawson',
    email: 'todd@email.com',
    role: 'Janitor'
  }
];

function App() {
  const [myTeam, setMyTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

  function editMember(e) {
    //get index of member
    let memberIndex = e.target.attributes.index.value;
    //create a new array minus the member marked for editing
    let newArr = myTeam.filter((ele, i) => {
      return i.toString() !== memberIndex.toString();
    });
    // set state memberToEdit from index 
    setMemberToEdit(myTeam[memberIndex]);
    //set team to new array with edited member removed
    setMyTeam(newArr);
  }//end func

  return (
    <div className="App">
      <Form fakeData={fakeData} setMyTeam={setMyTeam} team={myTeam} setMemberToEdit={setMemberToEdit} memberToEdit={memberToEdit} editMember={editMember} />
    </div>
  );
}

export default App;
