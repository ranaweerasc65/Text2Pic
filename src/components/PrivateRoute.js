import { Outlet, Navigate, useLocation, Route } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = (props) => {
    const { currentUser } = useAuth();
    const location = useLocation();
    const{path}=props

    

    if (!currentUser) {
        return <Navigate to={{ pathname: '/login', state: { from: location.pathname } }} />;
    }

    return <Outlet />;
};

export default PrivateRoute;
