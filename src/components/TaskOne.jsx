import { useEffect, useState } from "react";
import AddPost from "./AddPost";
import ShowPost from "./ShowPost";
import axios from "../api/axios";

const TaskOne = () => {
    const [posts, setPosts] = useState([]);

    const onAddPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const onRemovePostById = async (id) => {
        await axios.delete(`/posts/${id}`)
        setPosts((posts) => posts.filter(post => post.id !== id))
    }

    const onUpdatePostById = (id, newTitle) => {
        setPosts()
    }

    const fetchPost = async () => {
        const { data } = await axios.get('/posts');
        setPosts(data);
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return (
        <>
            <AddPost onAddPost={onAddPost} />
            {posts.map(post => (<ShowPost
                {...post}
                key={post.id}
                onRemovePostById={onRemovePostById}
                onUpdatePostById={onUpdatePostById} />))}
        </>
    )
}

export default TaskOne;