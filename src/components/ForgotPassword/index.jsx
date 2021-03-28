import React, { useRef, useState } from "react"
import { useAuth } from "./../../context/AuthContext";
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div class="main">
          
          <form className="form" onSubmit={handleSubmit}>

          <div className="login">
                <p>RECUPERAR SENHA</p>
            </div>

          <div>
              <input 
                type="email" 
                ref={emailRef} 
                placeholder="examplo@email.com" 
                class="form-control-input" 
                required />
          </div>
          {error && <p className="danger">{error}</p>}
          {message && <p className="danger">{message}</p>}  

           <button class="form-control-input buttonLogin"
            disabled={loading}
             type="submit"
            >
                 Recuperar senha
            </button>

            <div class="form-buttons">
            <div class="buttonsText">
                <Link class="button-text" to="/signin">LOGIN</Link>
                <Link class="button-text" to="/signup">CADASTRAR</Link>
            </div>

            </div>
        </form>
      </div>
    </>
  )
}


    