import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let  userid = localStorage.getItem("pay999-token") == null ? false : true;
//   console.log("Hi this is user id" , userid);
    return (
        <>
            {userid ? <Outlet  /> : <Navigate to="/" />};
        </>
    )
  };

  export default PrivateRoutes;