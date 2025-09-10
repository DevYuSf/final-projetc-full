import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function Login() {
    const[email, setEmail] = useState("")
    const[password, setPassword]= useState("")

    const navigate = useNavigate()

    function handleInsert(e) {
        e.preventDefault()
        axios.post("http://localhost:5000/login/customer", {
          
            email: email,
            password: password

        }).then((res)=> {
            
            toast.success("register succesfully")
            setTimeout(() => navigate("/"), 1500)
            localStorage.setItem("customer", JSON.stringify(res) )
        }).catch((error) => {
          if(error){
            toast.error("this is email already exits")
          }
        })
    }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-1">Login</h2>

        <form className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}
              
              id="email"
              type="email"
              name="email"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800"
              
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              name="password"
              className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800"
             
            />
          </div>

          <button onClick={(e) => handleInsert(e)}
            type="submit"
            className="w-full rounded-xl bg-gray-900 px-4 py-2 text-white font-medium hover:bg-black"
          >
            Login Customer
          </button>
        </form>

        
      </div>
      <ToastContainer  position="top-right" autoClose={3000} />
    </div>
  )
}

export default Login