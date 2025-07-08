import { useState } from "react"
import EditPost from "./EditPost"

const ShowPost = (props) => {
  const [editPost, setEditPost] = useState(false)

  const onRemove = () => {
    props.onRemovePostById(props.id)
  }

  const onEditAction = () => {
    setEditPost(!editPost)
  }

  const onEdit = (newTitle) => {

  }

  return (
    <div>
      {editPost
          ? <EditPost title={props.title} onEdit={onEdit}/>
          : <span>{props.title}</span>}
      <button onClick={onRemove}>Delete</button>
      <button onClick={onEditAction}>Edit</button>
    </div>
  )
}

export default ShowPost
