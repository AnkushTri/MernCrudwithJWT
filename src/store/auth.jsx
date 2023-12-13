
import { createContext,useContext, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"));
    const loggedIn=!!token;

    // console.log(loggedIn,token);

    const saveTokenInLocalStr = (servertoken) =>{
        return localStorage.setItem("token",servertoken)
    }

    const logoutUser=()=>{
        setToken('');
        return localStorage.removeItem("token");
    }
    return(
        <AuthContext.Provider value={{ loggedIn,saveTokenInLocalStr, logoutUser }}>
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