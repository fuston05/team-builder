import React, {useState} from 'react';
import Form from './components/Form/Form';

//styles
import './App.css';



function App() {
  const [myTeam, setMyTeam]= useState([]);
  const [memberToEdit, setMemberToEdit]= useState({});

  function editMember(e){
    console.log('index: ',e.target.attributes.index.value);
    let memberIndex= e.target.attributes.index.value;
    setMemberToEdit(myTeam[memberIndex]);
  }//end func

  return (
    <div className="App">
      <Form setMyTeam={setMyTeam} team={myTeam} setMemberToEdit= {setMemberToEdit} memberToEdit= {memberToEdit} editMember= {editMember} />
      {/* <Team /> */}
    </div>
  );
}

export default App;
