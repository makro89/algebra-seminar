import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { Navigate } from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={username: ""};
  }

handleLogin = (username) =>{
  this.setState({username})
}

  render(){
    return    ( 
    <Routes>
      <Route path="/algebra-seminar/" element={this.state.username ?<Chat username={this.state.username} /> : <Navigate to="/algebra-seminar/login" />}/>
      <Route path="/algebra-seminar/login" element={<Login onLogin={this.handleLogin}/>} />
    </Routes>
    )
  }

}

export default App;