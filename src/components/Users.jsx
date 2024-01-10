import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const Users = () => {
  const { Authorization }=useAuth();
  const [users,setUsers]=useState([]);

  const deleteUser=async(id)=>{
    console.log(id)
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: Authorization,
        },
      })
      if (response.ok) {
        toast.error("User has been deleted successfuly!")
        getAllusers();
      }
    }catch(err){
      console.log(err)
    }
    
  }

  const getAllusers=async()=>{
    try{
    const response = await fetch("http://localhost:5000/api/admin/users",{
      method: "GET",
      headers: {
        Authorization: Authorization,
      },
    })

    if(response.ok){
      const resData = await response.json();
      // console.log(resData.data);
      setUsers(resData.data);
    }else{
      console.log("server eroor while calling users by admin")
    }
  }catch(err){
    console.log("error while calling user api",err);
  }
  }

  /* eslint-enable react-hooks/exhaustive-deps */
  useEffect(() => {
    getAllusers();
    deleteUser();
  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div className='Admin-users'>
      <div className='section'>
        <h2>Admin Users section</h2>
      </div>
      <div className='section' >
        <table cellPadding={10} width={500} style={{textAlign:"center"}}>
          <thead >
            <th>User Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </thead>
            {users.map((currUser) => {
              return <tbody key={currUser._id} >
                <td>{currUser.username}</td>
                <td>{currUser.email}</td>
                <td><FaEdit/></td>
                <td><div onClick={()=>deleteUser(currUser._id)} className='active'><MdDelete /></div></td>
                </tbody>
            })}
        </table>
    
      </div>
    </div>
  )
}

export default Users