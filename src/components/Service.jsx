import React, { useEffect, useState } from 'react'
import styles from './style/Service.module.css'
// import { useAuth } from '../store/auth';

const Service = () => {
  // const { userAuthentication } = useAuth();
  const [service, setService] = useState([]);

  const getService = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/service");
      if (response.ok) {
        const data = await response.json();
        console.log(data.services);
        setService(data.services)
      }
    } catch (err) {
      console.log("error while calling service api", err);
    }
  }

  useEffect(() => {
    getService();
  }, [])

  return (
    <><h1 style={{textAlign:'center'}}>Our Services</h1> 
<div className={styles.main}>
      {service.map((item) => {
        return (
          <div className={styles.container}>
          <div className={styles.section}>
              <div className={styles.service_img}>
                <img src='/images/services.png'alt='services' width="100px" />
              </div>
            <div className={styles.tex}>
            <p key={item._id} className={styles.service}>{item.provider}</p>
            <p key={item._id} className={styles.service}>{item.price}</p>
            </div>
            <p key={item._id} className={styles.service}><span className={styles.title}>{item.services}</span></p>
            <p key={item._id} className={styles.service}>{item.description}</p>
          </div>
          </div>
        )
      })}
    </div>

    </> 
  )
}

export default Service