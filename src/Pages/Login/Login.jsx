import './Login.css'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [SignState, SetSignState] = useState("Sign In")
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loading , setloading] =useState(false)
 
  const user_auth = async (event) => {
    event.preventDefault()
    setloading(true)
    // وانت بتتحقق من ال الاسم و الباسورد خلهالي true  لما تتاكد سواء بالصح او الغلط خليها false
    try {
      if (SignState === "Sign In") {
        await login(email, password)
      } else {
        await signup(name, email, password)
      }
    }
    catch (error) {
      console.log("error details:" ,error)
    }
     setloading(false)
  }


  return (
    // لو ال loading  موجوده تمام ل لا اعرضلي بقسه الداتا
    loading ?<div className="login-spinner">
          <img src={netflix_spinner} alt="" />
      </div>:
      <div className="Login" >
        <img src={Logo} className='login-logo' alt="" />
        <div className="login-from">
          <h1>{SignState}</h1>
          <form  >
            {SignState === "Sign Up" ?
              <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder='your name' /> : <></>
            }
            <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder='Email' />
            <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder='password' />
            <button  onClick={user_auth}  type='submit'  >{SignState}</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help</p>
            </div>
            <div className="form-switch">
              {SignState === "Sign In" ?
                <p>New to Netflix <span onClick={() => { SetSignState("Sign Up") }}>Sign Up Now</span></p> :
                <p>Already have account? <span onClick={() => { SetSignState("Sign In") }}>Sign In Now</span></p>
              }
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login
