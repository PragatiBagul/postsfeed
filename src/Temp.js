import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import UserHome from "./UserHome";

const Temp = () => {
    const { user } = useAuth();
    return (<UserHome uid={ user.uid}/>);
}
 
export default Temp;