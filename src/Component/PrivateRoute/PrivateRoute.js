import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { badhonContext } from '../../App';

const PrivateRoute = ({children}) => {
    const [context, setcontext]=useContext(badhonContext)
    const location= useLocation()
    // const context=true
    return (
        <div>
           {
               context.email ? children : <Navigate  to='/Loginpage' replace state={{from: location}} />
           } 
        </div>
    );
};

export default PrivateRoute;