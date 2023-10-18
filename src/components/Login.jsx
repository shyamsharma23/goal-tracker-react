import React, { useRef, useState } from 'react'
import axios from 'axios'



const Login = (props) => {

    const emailRef = useRef();
    const passRef = useRef();
    const [data, setData] = useState();

    const handleSubmit = async(event) =>{
        event.preventDefault()

        const obj= {
            email:emailRef.current.value,
            password:passRef.current.value
        }

        axios.post("http://localhost:8000/api/users/login", obj).then((res)=>{
           console.log(res.data.token)
           localStorage.setItem('token',res.data.token)
           props.history.replace('/goals')
           
        })

    
    }
  return (
    <div>
      <form action="POST" onSubmit={handleSubmit}>
    
        <input id="email" type="text" placeholder='Email'  ref={emailRef}/>
        <input type="text" placeholder='Password' ref={passRef}/>

        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default Login
