import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Chat from "./Components/Chat";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import "./App.css";

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

  handleLogout =() =>{
    this.setState({username: ""});
  }

  render(){
    return   ( 
       <div className="App">  
         <Header toggleSidebar={this.toggleSidebar} username={this.state.username} handleLogout={this.handleLogout} /> 
         <Sidebar ref={(reference)=> this.sidebar = reference}/> 
          <Routes>
              <Route path="/algebra-seminar/" 
              element={ this.state.username ? <Chat username={this.state.username}/> : <Navigate to="/algebra-seminar/login" />} />
              <Route path="/algebra-seminar/login" element={<Login onLogin={this.handleLogin} username={this.state.username}/>} />
              <Route path="/algebra-seminar/about" element={this.state.username ? <About />: <Navigate to="/algebra-seminar/login" /> } />
            </Routes>
    </div>
    )
  }
}

export default App;