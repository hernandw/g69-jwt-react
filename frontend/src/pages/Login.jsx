import  { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";

const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const { validarLogin } = useContext(MyContext)

const handleSubmit = async(e) => {
  e.preventDefault()
  if (!email.trim() || !password.trim()) {
    alert("Por Favor rellena todos los campos!");
    return;
  }

  if (password.length < 5) {
    alert("Password must be at least 5 characters!");
    return;
  }

  const response = await validarLogin(email, password)
  alert(response?.error || "Authentication successful!");
}


  return (
    <div>
      <h1 className="text-center mt-5">Inicia Sesión</h1>
      <form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login