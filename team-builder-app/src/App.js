import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import TeamMember from "./components/TeamMember";

function App() {
  
  const [list, setList] = useState([
    {
      name: "Bill",
      email: "bill@email.com",
      role: "Front End"
    },
    {
      name: "Terminator",
      email: "illbebahk@msn.com",
      role: "Kill stuff"
    }
  ])

  const [memberToEdit, setMemberToEdit] = useState("");

  const editMember = member => {
    setMemberToEdit(member)
  }

  return (
    <div className="App">
      {list.map(member => {
        return <TeamMember 
          member={member} 
          key={member.name} 
          editMember={editMember}
        />
      })}
      <Form 
        setList={setList} 
        list={list}
        memberToEdit={memberToEdit} 
      />
    </div>
  );
}

export default App;
