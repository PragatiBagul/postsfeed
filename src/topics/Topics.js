import { useState } from "react";
import ViewAllTopics from "./View/ViewAllTopics";
import NewTopic from "./Create/NewTopic";
import ViewTopic from "./View/ViewTopic";
import NewPost from "../feed/Creation/NewPost";
const Topics = () => {
    const [view, setView] = useState("view");
    const [selected, setSelected] = useState(null);
    return (
        <>
            {view == "view" && <ViewAllTopics setView={setView}  setSelected={setSelected}/>}
            {view == "create" && <NewTopic setView={setView} />}
            {view == "viewTopic" && <ViewTopic setView={setView} topic={selected} />}
            {view == "newPost" && <NewPost setView={setView} topic={selected}/>}
        </>);
}

export default Topics;