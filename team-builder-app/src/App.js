import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";

function App() {
  
  const [list, setList] = useState("list")
  // const [list, setList] = useState({
  //   name: "",
  //   email: "",
  //   role: ""
  // })
  
  return (
    <div className="App">
      {/* <div>{list}</div> */}
      <div>list</div>
      <Form />
    </div>
  );
}

export default App;
