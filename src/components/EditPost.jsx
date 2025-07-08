import { useState } from "react";

const EditPost = (props) => {
    const [editPostTitle, setEditPostTitle] = useState(props.title)

    const onChangeTitle = (e) => {
        setEditPostTitle(e.target.value);
    }

    const onSubmit = () => {
        
    }

    return (
        <>
            <input value={editPostTitle} onChange={onChangeTitle} />
            <button onClick={onSubmit}>Submit</button>
        </>
    )
}

export default EditPost
