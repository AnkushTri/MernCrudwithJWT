
import { createContext,useContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"));
    // const [loggedIn,setLoggedIn]=useState(!!token);
    let loggedIn=!!token;
    let Authorization=`Bearer ${token}`;

    const[users,setUsers]=useState("");
    const[isLoading,setIsLoading]=useState(true)

    // console.log(loggedIn,token);

    const saveTokenInLocalStr = (servertoken) =>{
        setToken(servertoken);
        return localStorage.setItem("token",servertoken)
    }

    const logoutUser=()=>{
        setToken('');
        return localStorage.removeItem("token");          
    }

    //Authenication 
    const userAuthentication=async()=>{
        try{
            let response = await fetch("https://ankucrud-api.onrender.com/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            });

            if(response.ok){
                const data=await response.json();
                console.log(data.userData)
                setUsers(data.userData);
                setIsLoading(false);
            }else{
                console.log("error while fetching");
                setIsLoading(false);
            }
        }catch(err){
            console.log("error occur while calling userauthe",err)
        }

    };

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        userAuthentication();
    }, []);
    /* eslint-disable react-hooks/exhaustive-deps */

    return(
        <AuthContext.Provider 
        value={{ loggedIn, 
        saveTokenInLocalStr,
         logoutUser, 
         users,
         isLoading,
         Authorization,
         }}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(AuthContext);
}


// import { createContext, useContext } from "react";

// export const AuthContext = createContext();

// // eslint-disable-next-line react/prop-types
// export const AuthProvider = ({ children }) => {
//     //function to stored the token in local storage
//     const storeTokenInLS = (serverToken) => {
//         return localStorage.setItem("token", serverToken);
//     };

//     return (
//         <AuthContext.Provider value={{ storeTokenInLS }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const authContextValue = useContext(AuthContext);
//     if (!authContextValue) {
//         throw new Error("useAuth used outside of the Provider");
//     }
//     return authContextValue;
// };