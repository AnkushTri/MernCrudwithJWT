import React from 'react'
import { NavLink, Navigate,Outlet } from 'react-router-dom'
import {useAuth}  from '../store/auth';
import { FaUser } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";

import styles from './style/Admin.module.css';

const Admin = () => {

    const {users,isLoading}  = useAuth();
    // console.log(isLoading,users.isAdmin)
    
    if(isLoading){
      return(<h1>Loading...</h1>)
    }
    if(!users.isAdmin){
      return(
        <Navigate to="/"/>
      )
    }

  return (
    
    <div className={styles.main}>
        <div style={{display:"flex" ,justifyContent:"space-between"}}>
            <div>
          <h1>Welcome Admin, {users.username}</h1>
          <h2> you have lots of control over everything on this web app</h2>
              </div>
              <div >
          <img src="/images/apex.jpg" alt="apex bro" width={110} height={100}  style={{borderRadius:"50%"}} />
              </div>
          </div>
        <div className={styles.continer}>
        <div className={styles.nav}> 
          <FaUser style={{ marginRight: "0.5rem" }} />
          <NavLink to='/admin/users' className="nav_link"> Users</NavLink>
        </div>
        <div className={styles.nav}>
          <IoMdContacts style={{marginRight:"0.5rem"}}/>
          <NavLink to='/admin/contacts' className="nav_link"> Contacts</NavLink>
        </div>
        <div className={styles.nav}>
          <RiCustomerService2Line style={{ marginRight: "0.5rem" }} />
          <NavLink to='/admin/services' className="nav_link"> Services</NavLink>
        </div>
        </div>  
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officia quas, error sed asperiores fuga mollitia excepturi aut obcaecati cum explicabo odit quibusdam consequatur doloribus ratione ad nostrum molestiae. Iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet vitae qui perferendis aperiam unde eos incidunt laudantium, adipisci error et eius dicta molestiae itaque quaerat quisquam modi labore necessitatibus beatae voluptatem soluta neque assumenda. Repellat dolore aut dolorem voluptatum aperiam consectetur cumque ratione suscipit velit dolores quia eligendi consequatur, pariatur dignissimos qui sequi necessitatibus eum eos! Veniam laboriosam harum totam non soluta ex, nemo fuga sed tempora voluptatem, consequuntur recusandae unde quis omnis ducimus provident itaque nulla eligendi quia esse reprehenderit suscipit? Id hic debitis sed accusamus doloremque. Quasi quos earum quidem. Nesciunt quasi a itaque reiciendis earum veniam!</p>   */}
      <Outlet />
    </div>
     
  )
}

export default Admin