
import React, { useRef, useState } from "react";
import { useAuth } from "./../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import './signup.css';

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfimRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("senha", passwordRef.current.value);
    console.log("senha", passwordConfimRef.current.value);
    if (passwordRef.current.value !== passwordConfimRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/signin");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return ( 
    <div class="main-signUp">
    <form class="form-signUp" onSubmit={handleSubmit} >
    <div class="login">
           <p>CADASTRAR</p>
       </div>
       <div>
           <input 
           class="form-control-input-signUp"
           ref={emailRef}  
           type="email"
           name="email" id="email" 
           placeholder="EMAIL" required />
       </div>
       <div>
           <input 
           ref={passwordRef}
           class="form-control-input-signUp" 
           type="password" 
           name="password" 
           id="password" 
           placeholder="PASSWORD" 
           required  />
       </div>
       <div>
           <input 
             ref={passwordConfimRef}
           class="form-control-input-signUp" 
           type="password" 
           name="password" 
           id="password" 
           placeholder="CONFIRMAR SENHA" 
           required  />
       </div>
       {error && <p class="danger-signUp">{error}</p>}
       <button class="form-control-input-signUp buttonLogin-signUp"
       disabled={loading}
       type="submit"
       >
           CADASTRAR
       </button>
       
       <div class="form-buttons-signUp">
         <div class="buttons-text-signUp">
           <Link class="button-text-signUp" to="/signin">LOGIN</Link>
       </div>

   </div>
   </form>
</div>);
}