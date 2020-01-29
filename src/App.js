import React, { useState } from 'react';
import Form from './components/Form/Form';

//styles
import './App.css';

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
      <Form setMyTeam={setMyTeam} team={myTeam} setMemberToEdit={setMemberToEdit} memberToEdit={memberToEdit} editMember={editMember} />
      {/* <Team /> */}
    </div>
  );
}

export default App;
