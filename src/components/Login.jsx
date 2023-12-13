import { React, useState } from 'react'
// import { loginUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  let navigate = useNavigate();
  const { saveTokenInLocalStr } = useAuth();

  const onValueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })
    console.log(e)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user)
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("after login: ", responseData);
        // toast.success("Registration Successful");
        saveTokenInLocalStr(responseData.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   try{
  //   const response=await loginUser(user);
  //   console.log(response.status)
  //   if(response.status===200){
  //     setUser({name:"",email:""});
  //     navigate('/');
  //   }
  // }catch(err){
  //   console.log("server eroor while login");
  // }

  return (
    <div className='registartion'>
      <div className='registration_sec img'>
        <img src="/images/login.png" alt="a nurse with a cute look" width="400" height="470" />
      </div>
      <div className='registration_sec sec_form'>
        <h1>Login Form</h1>
        <div className='form'>
          <form className='form_class' onSubmit={handleSubmit}>
            <div className='form_sec'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name='email'
                value={user.email}
                placeholder='Enter your email'
                onChange={onValueChange}
                required />
            </div>
            <div className='form_sec'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name='password'
                value={user.password}
                placeholder='Enter Your password'
                onChange={onValueChange}
                required />
            </div>
            <button type='submit' className='register_btn'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login