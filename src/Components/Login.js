import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) =>{
    const [usernameText, setUsernameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onLogin(usernameText);
        navigate("/algebra-seminar/");        
    }
    
    return (
      
    <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="title">
                <h1>Chat samo za Juventine!</h1>
            </label>
            <input 
            id="title"
            type="text" 
            placeholder="Upiši svoj Juventino nickname!" 
            required 
            value={usernameText} 
            onChange={(e)=> setUsernameText(e.target.value)}/>
            <button className="login-btn">Juventino si, možeš ući!</button>
        </form>
    </div>)
}

export default Login;