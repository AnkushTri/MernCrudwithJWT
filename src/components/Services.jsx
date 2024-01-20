import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import{toast} from "react-toastify";

const Services = () => {
  const { Authorization } = useAuth();
  const [services, setServices] = useState([]);

  /* eslint-enable react-hooks/exhaustive-deps */
  useEffect(() => {
    getAllServices();
    deleteService();
  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */
  const deleteService = async (id) => {
    console.log(id)
    try {
      const response = await fetch(`https://ankucrud-api.onrender.com/api/admin/services/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: Authorization,
        },
      })
      if (response.ok) {
        toast.error("User has been deleted successfuly!")
        getAllServices();
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getAllServices = async () => {
    try {
      const response = await fetch("https://ankucrud-api.onrender.com/api/admin/services", {
        method: "GET",
        headers: {
          Authorization: Authorization,
        },
      })

      if (response.ok) {
        const resData = await response.json();
        // console.log(resData.data);
        setServices(resData.data);
      } else {
        console.log("server eroor while calling users by admin")
      }
    } catch (err) {
      console.log("error while calling user api", err);
    }
  }

  return (
    <div className='Admin-users'>
      <div className='section'>
        <h2>Admin Services section</h2>
      </div>
      <div className='section' >
        <table cellPadding={10} width={800} >
          <thead >
            <th>Service</th>
            <th>Description</th>
            <th>Price</th>
            <th>Provider</th>
            <th>Update</th>
            <th>Delete</th>
          </thead>
          {services.map((currUser) => {
            return <tbody key={currUser._id} style={{ textAlign: "center" }} >
              <td>{currUser.services}</td>
              <td>{currUser.description}</td>
              <td>{currUser.price}</td>
              <td>{currUser.provider}</td>
              <td><FaEdit /></td>
              <td>
                <div onClick={() => deleteService(currUser._id)} className='active'>
                <MdDelete />
              </div>
              </td>
            </tbody>
          })}
        </table>

      </div>
    </div>
  )
}


export default Services