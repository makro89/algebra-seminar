import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={username: ""};
  }

handleLogin = (username) =>{
  this.setState({username})
}
toggleSidebar = () =>{
  this.sidebar.ToggleSidebar();
}

  render(){
    return    ( 
    <div>
      <Header toggleSidebar={this.toggleSidebar} username={this.state.username}/>
      <Sidebar ref={(reference)=> this.sidebar = reference}/>
    <Routes>
      <Route path="/" 
      element={this.state.username ?<Chat username={this.state.username} /> : <Navigate to="/login" />}/>
      <Route path="/login" element={<Login onLogin={this.handleLogin}/>} />
    </Routes>
    </div>
    )
  }

}

export default App;