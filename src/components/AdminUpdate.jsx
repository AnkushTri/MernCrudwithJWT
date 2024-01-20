import { useEffect, useState } from 'react'
import "./style/SignUp.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminUpdate = () => {

    const {Authorization} =useAuth();
    const params=useParams();
    const navigate = useNavigate();

    const intialvalue = {
        username: "",
        email: "",
    }

    const [user, setUser] = useState(intialvalue);

    const onValueChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })
        console.log(e)
    }
    // console.log(params.id)/

    /* eslint-enable react-hooks/exhaustive-deps */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://ankucrud-api.onrender.com/api/admin/users/user/${params.id}`, {
                    method: "GET",
                    headers: {
                        Authorization: Authorization,
                    },
                });

                const responseData = await response.json();

                if (response.ok) {
                    setUser(responseData.data[0]);
                    console.log(responseData.data); // Log here to ensure you're logging the correct data
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    // const [username,email]=user;
    // console.log(user.email)

    /* eslint-enable react-hooks/exhaustive-deps */
    
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`https://ankucrud-api.onrender.com/api/admin/users/user/edit/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: Authorization,
                },
                body: JSON.stringify(user),
            }
            );
            if (response.ok) {
                toast.success("upadated successufuly")
            }else{
                toast.error("upadated success")
            }
        } catch (err) {
            console.log("error while updating users")
        }
        console.log(user)
    }


    return (
        <div className='registartion'>
            <div className='registration_sec img'>
                <img src="/images/register.png" alt="a nurse with a cute look" width="400" height="470" />
            </div>
            <div className='registration_sec sec_form'>
                <h1>{user.username} Form</h1>
                <div className='form'>
                    <form className='form_class' onSubmit={handleSubmit}>
                        <div className='form_sec'>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name='username' value={user.username || ''} placeholder='Enter your name'
                                onChange={onValueChange}
                                required />
                        </div>
                        <div className='form_sec'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name='email' value={user.email ||''} placeholder='Enter your email'
                                onChange={onValueChange}
                                required />
                        </div>
                        <button type='submit' className='register_btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminUpdate