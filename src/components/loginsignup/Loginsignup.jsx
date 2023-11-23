
import React, {useState} from 'react'
import './LoginSignup.css'

const Loginsignup = () => {

    const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input"> 
                <input type="text"  placeholder='USER NAME'/>
            </div>}
            
            <div className="input">
               
                <input type="email" placeholder='EMAIL'/>
            </div>
            <div className="input">
                
                <input type="password" placeholder='PASSWORD'/>
            </div>
        </div>
        {action==="sign up"?<div></div>:<div className="forgot-password">Lost Password ? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("sign Up")}}>Signup</div>
            <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>LOGIN</div>
        </div>
      
    </div>
  )
}

export default Loginsignup
