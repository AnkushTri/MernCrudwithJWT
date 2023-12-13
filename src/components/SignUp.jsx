import {useState}from 'react'
import "./style/SignUp.css";
// import {registerUser} from '../service/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

const SignUp = () => {

const intialvalue={
  username:"",
  email:"",
  phone:"",
  password: "",
}

const [user, setUser] = useState(intialvalue);

let navigate=useNavigate();
  const { saveTokenInLocalStr } =useAuth();

const onValueChange=(e)=>{
const name=e.target.name;
const value=e.target.value;
setUser({...user,[name]:value})
console.log(e)
}

const handleSubmit = async(e) => {
    e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("after registartion: ", responseData);
      // toast.success("Registration Successful");
      saveTokenInLocalStr(responseData.token);
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }

    // console.log(user)
//     try{
//    const response= await registerUser(user);
//    console.log(response.status);
//    console.log(response.status);
//     if(response.status===201){
//     setUser(intialvalue);
//     navigate('/login');
//     }
// }catch(err){
//   console.log("server error while calling register post api");
// }
    
  }

  return (
    <div className='registartion'>
      <div className='registration_sec img'>
        <img src="/images/register.png" alt="a nurse with a cute look" width="400" height="470" />
      </div>
      <div className='registration_sec sec_form'>
        <h1>Registartion Form</h1>
        <div className='form'>
          <form className='form_class' onSubmit={handleSubmit}>
            <div className='form_sec'>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name='username' value={user.username} placeholder='Enter your name'
              onChange={onValueChange}
              required />
            </div>
            <div className='form_sec'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name='email' value={user.email} placeholder='Enter your email' 
                onChange={onValueChange}
              required />
            </div>
            <div className='form_sec'>
              <label htmlFor="phone">Phone</label>
              <input type="phone" id="phone" name='phone' value={user.phone} placeholder='Enter your phone' 
                onChange={onValueChange}
              required />
            </div>
            <div className='form_sec'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name='password' value={user.password} placeholder='Enter Your password' 
                onChange={onValueChange}
              required />
            </div>
            <button type='submit'  className='register_btn'>Register Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp