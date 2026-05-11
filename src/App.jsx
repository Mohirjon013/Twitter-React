import { useContext } from "react"
import Dashboard from "./routes/Dashboard"
import LoginRoute from "./routes/LoginRoute"
import { Context } from "./context/AuthContext"

function App() {
  const {token} = useContext(Context)
  // let token = false
  if(token) return <Dashboard/>
  else return <LoginRoute/>
}

export default App
