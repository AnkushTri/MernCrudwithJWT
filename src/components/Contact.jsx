import React ,{useState} from 'react'
import { useAuth } from '../store/auth';

import { contactUs } from "../service/api";

const defaultcontact = {
  username: "",
  email: "",
  message: ""
  };

const Contact = () => {

  const [user, setUser] = useState(defaultcontact);

  const {users}=useAuth();
  const [userdata,setUserdata]=useState(true);
  // console.log(users)

  if(userdata && users){
    setUser({
      username:users.username,
      email:users.email,
      message:"",
    })
    setUserdata(false);
  }

  
  const onValueChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })
    console.log(e)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(user)
    await contactUs(user);
    try {
      const response = await fetch("https://ankucrud-api.onrender.com/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("after contactus: ", data);
        setUser(defaultcontact)
        alert("Thanks for contacting us,your response is succesfully sent to Admin");
        window.location.reload();
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
    // alert("Thanks for contacting us,your response is succesfully sent to Admin");
    // window.location.reload();



  return (
    <>
    <div className='registartion'>
      <div className='registration_sec img'>
        <img src="/images/support.png" alt="a nurse with a cute look" width="400" height="500" />
      </div>
      <div className='registration_sec sec_form'>
        <h1>Contact Form</h1>
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
              <input type="email" id="email" name='email'
                value={user.email}
                placeholder='Enter your email'
                onChange={onValueChange}
                required />
            </div>
            <div className='form_sec'>
              <label htmlFor="message">Message</label>
              <textarea type="text" id="message" name='message'
                rows="50" cols="100"
                // rows="1" cols="100"
                value={user.message}
                placeholder='write your query'
                onChange={onValueChange}
                required
                style={{
                  width: '21rem',
                  color: '#FFFFFF', backgroundColor:' rgb(74, 70, 70)'}}
                 />
            </div>
            <button type='submit' className='register_btn'>Contact US</button>
          </form>
        </div>
      </div>
    </div>
    <div className='registration'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14420.457763936458!2d86.28694965!3d25.36748075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1f64fb280996d%3A0xc8f814528f7f0da0!2z4KSJ4KSa4KWN4KSaIOCkteCkv-CkpuCljeCkr-CkvuCksuCkryDgpKrgpLDgpK7gpL7gpKjgpILgpKbgpKrgpYHgpLA!5e0!3m2!1shi!2sin!4v1701434408017!5m2!1shi!2sin" width="100%" height="450" frameBorder="0"
         allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </>
  )
}

export default Contact