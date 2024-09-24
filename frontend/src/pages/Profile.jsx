import { useContext } from "react"
import { MyContext } from "../Context/MyContext"


const Profile = () => {

  const { email, logout } = useContext(MyContext)
  return (
    <div className="container my-5">
      <h1>Profile</h1>
      <p>Email: {email}</p>
      <button
        className="btn btn-sm btn-outline-danger me-2"
        onClick={logout}
      >
        logout
      </button>
    </div>
  )
}

export default Profile