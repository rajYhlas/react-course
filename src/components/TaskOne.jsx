import { useState } from "react";
import AddPost from "./AddPost";
import ShowPost from "./ShowPost";

let randomID = 1;

const TaskOne = () => {
    const [posts, setPosts] = useState([{id: 0, title: 'Hello World'}]);

    const onAddPost = (postTitle) => {
        setPosts([...posts, {id: randomID++, title: postTitle}])
    }

    const onRemovePostById = (id) => {
        setPosts((posts) => posts.filter(post => post.id !== id))
    }

    const onUpdatePostById = (id, newTitle) => {
        setPosts()
    }

    return(
        <>
        <AddPost onAddPost={onAddPost}/>
        {posts.map(post => (<ShowPost 
        {...post} 
        key={post.id} 
        onRemovePostById={onRemovePostById}
        onUpdatePostById={onUpdatePostById}/>))}
        </>
    )
}

export default TaskOne;