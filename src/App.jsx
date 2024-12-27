import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({
    userName: "",
    password: ""
  })

  const handleInputValues = (event) =>{
    const {name, value} = event.target;

    setUser((prev)=>({...prev, [name]: value}));
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    alert(`Welcome ${user.userName}`);
  }

  return (
    <>
      <div className='container'>
      <form onSubmit={handleFormSubmit}>
          <h1>Login Form</h1>
          <div className="form-div">
            <label>User Name</label>
            <input type='text' name='userName'
              placeholder='Enter your User Name'
              value={user.userName}
              autoCapitalize='off'
              onChange={(e)=> handleInputValues(e)}
              />
          </div>
          <div className="form-div">
            <label>Password</label>
            <input type='password' name='password'
              placeholder='Enter your password'
              value={user.password}
              autoCapitalize='off'
              onChange={(e)=> handleInputValues(e)}
              />
          </div>
          <button>Login</button>
      </form>
      </div>
    </>
  )
}

export default App
