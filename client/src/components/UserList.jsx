import React, { useEffect, useContext, useState } from 'react'
import { server } from '../main';
import axios from 'axios';
import { Context } from '../main';

const UserList = () => {

    // const [data, setData] = useState([]);

    const {
        setIsAuthenticated,
        isAuthenticated,
        setLoading,
        loading,
        user,
        setUser,
      } = useContext(Context);

      const getEmployees = async () => {

    

        try {
            const userId = user._id;
            console.log(userId);
    
            const { data } = await axios.get(
              `${server}/user/head/${userId}`,
              {
                withCredentials: true,
              }
            );
            console.log(data.employees);
          } catch (error) {
              console.log(error);
          }
    
      }

     
                 

      

    //   console.log(responseData);


    
  return (
    <div>
        
        {getEmployees()}
        UserList
    </div>
  )
}
export default UserList