import React, {FC, memo} from "react"
import AddPostForm, {AddPostFormValuesType} from "./AddPostForm/AddPostForm";

type PropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

const MyPosts: FC<PropsType> = props => {
    let postsElements = [...props.posts]
        .reverse()
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postBlock}>
            <h3>My Post</h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
)

const MyPostsMemorized = memo(MyPosts)

export default MyPostsMemorized