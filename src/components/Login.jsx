import { React, useState } from 'react'
// import { loginUser } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

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
      const response = await fetch("https://ankucrud-api.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const responseData = await response.json();
      console.log("after login: ", responseData.extraDetails);
      if (response.ok) {
        saveTokenInLocalStr(responseData.token);
        toast.success("login successful!")
        navigate("/");
      }else{
        toast.error(responseData.extraDetails ? responseData.extraDetails[0] : responseData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

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