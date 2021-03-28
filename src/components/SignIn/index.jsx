
import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import './signin.css';

function SignIn() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
  
    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        history.push("/");
      } catch {
        setError("Verifique se o email e senha estão corretos.");
      }
      setLoading(false);
    }

    return(
     <div className="main">
       <form className="form" onSubmit={handleSubmit} >
         <div className="login">
                <p>LOGIN</p>
            </div>
            <div>
                <input 
                className="form-control-input"
                ref={emailRef}  
                type="email"
                name="email" id="email" 
                placeholder="EMAIL" required />
            </div>
            <div>
                <input 
                ref={passwordRef}
                className="form-control-input" 
                type="password" 
                name="password" 
                id="password" 
                placeholder="PASSWORD" 
                required  />
            </div>
            {error && <p className="danger">{error}</p>}
            <button className="form-control-input buttonLogin"
            disabled={loading}
            type="submit"
            >
                ENTRAR
            </button>
            
            <div className="form-buttons">
              <div className="buttonsText">
                <Link className="button-text" to="/forgot-password">RECUPERAR SENHA</Link>
                <Link className="button-text" to="/signup">CADASTRAR</Link>
            </div>

        </div>
        </form>
     </div>);
}

export default SignIn;