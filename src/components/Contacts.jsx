import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';

const Contacts = () => {
  const { Authorization } = useAuth();
  const [contacts, setContacts] = useState([]);

  /* eslint-enable react-hooks/exhaustive-deps */
  useEffect(() => {
    getAllContacts();
    deleteContact();
  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */

  const deleteContact = async (id) => {
    console.log(id)
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: Authorization,
        },
      })
      if (response.ok) {
        toast.error("User has been deleted successfuly!")
        getAllContacts();
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getAllContacts = async () => {
    try {
      const response = await fetch("https://ankucrud-api.onrender.com/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: Authorization,
        },
      })

      if (response.ok) {
        const resData = await response.json();
        // console.log(resData.data);
        setContacts(resData.data);
      } else {
        console.log("server eroor while calling contacts api by admin")
      }
    } catch (err) {
      console.log("error while calling user api", err);
    }
  }

  return (
    <div className='Admin-users'>
      <div className='section'>
        <h2>Admin Users section</h2>
      </div>
      <div className='section' >
        <table cellPadding={10} width={720} style={{ textAlign: "center" }}>
          <thead >
            <th>User Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Update</th>
            <th>Delete</th>
          </thead>
          {contacts.map((currUser) => {
            return <tbody key={currUser._id} >
              <td>{currUser.username}</td>
              <td>{currUser.email}</td>
              <td>{currUser.message}</td>
              <td><FaEdit /></td>
              <td><div onClick={() => deleteContact(currUser._id)} className='active'>
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

export default Contacts