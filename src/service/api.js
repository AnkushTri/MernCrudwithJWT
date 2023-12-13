
import axios from 'axios';
const API_URI ='http://localhost:5000'

export const registerUser=async(user)=>{
    try{
        const res = await axios.post(`${API_URI}/api/auth/registration`,user);
        console.log(res);
    }catch(err){
        console.log("error while calling post api",err);
    }
}
export const contactUs=async(data)=>{
    try{
        await axios.post(`${API_URI}/api/form/contact`,data);
    }catch(err){
        console.log("error while calling post api",err);
    }
}

export const loginUser=async(user)=>{
    try{
        await axios.post(`${API_URI}/api/auth/login`,user);
    }catch(err){
        console.log("error occurrs while calling API",err);
    }
}