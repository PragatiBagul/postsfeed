import { useEffect } from "react";
import { fetchUserProfile } from "./utils/RequestEndPoints";
import Topics from "./topics/Topics";
import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
const UserHome = ({ uid }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      var response = await fetchUserProfile(uid);
      return response;
    };
    setTimeout(async () => {
      const response = await fetch();
      setCurrentUser(response);
      setIsPending(false);
    }, 1000);
  }, [isPending]);
  return (<>
    {isPending && <h1>Loading..</h1>}
    {!isPending && <Topics currentUser={currentUser} />}
  </>);
}
 
export default UserHome;