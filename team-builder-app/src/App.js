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

  
  return (
    <div className="App">
      {list.map(member => {
        return <TeamMember member={member} key={member.name} />
      })}
      <Form />
    </div>
  );
}

export default App;
