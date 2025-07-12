import { useState } from "react"
import axios from "../api/axios";

const AddPost = (props) => {
    const [newPostTitle, setNewPostTitle] = useState('')

    const onChangeTitle = (e) => {
        setNewPostTitle(e.target.value);
    }

    const onSubmit = async () => {
        const {data} = await axios.post('/posts', {title: newPostTitle});
        props.onAddPost(data);
        setNewPostTitle('')
    }

    return(
        <>
        <input value={newPostTitle} onChange={onChangeTitle}/>
        <button onClick={onSubmit}>Submit</button>
        </>
    )
}

export default AddPost