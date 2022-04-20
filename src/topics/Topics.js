import { useState } from "react";
import ViewAllTopics from "./View/ViewAllTopics";
import NewTopic from "./Create/NewTopic";
import ViewTopic from "./View/ViewTopic";
import NewPost from "../feed/Creation/NewPost";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
const Topics = ({ currentUser,isSelf }) => {
    const { user } = useAuth();
    const [view, setView] = useState("view");
    const [selected, setSelected] = useState(null);
    return (
        <>
            {view == "view" && <ViewAllTopics setView={setView} currentUser={currentUser} setSelected={setSelected} isSelf={ user.uid === currentUser.uid}/>}
            {view == "create" && <NewTopic setView={setView}  currentUser={currentUser} isSelf={ user.uid === currentUser.uid} />}
            {view == "viewTopic" && <ViewTopic setView={setView}  currentUser={currentUser} topic={selected} isSelf={ user.uid === currentUser.uid} />}
            { view == "newPost" && <NewPost setView={setView} currentUser={currentUser} topic={selected}  isSelf={ user.uid === currentUser.uid}/> }
</>);
}

export default Topics;