import "./Post.css"

interface PostInterface {
    img?: string,
    username?: string,
    description?: string,
    profilePic?: string,
    likes?: number,
    time?: string
}

export const Post = (post: PostInterface) => {
    return (
        <div className="post-card">
            <div className="info">
                <div className="user">
                    <div className="profile-pic">
                        <img src={post.profilePic} alt="" />
                    </div>
                    <p className="username">{post.username}</p>
                </div>
                <img src="./assets/img/option.png" className="options" alt="" />
            </div>
            <img src={post.img} 
                 className="post-image" alt="" />
            <div className="post-container">
                <div className="reaction-wrapper">
                    <img src="./assets/img/like.png" alt="" className="icon" />
                    <img src="./assets/img/comment.png" alt="" className="icon" />
                    <img src="./assets/img/send.png" alt="" className="icon" />
                    <img src="./assets/img/save.png" alt="" className="save icon" />
                </div>
                <p className="likes">{post.likes} Me gusta</p>
                <p className="description"><span>{post.username}</span>{post.description}</p>
                <p className="post-time">{post.time}</p>
            </div>
            <hr className="horizontal-separation"/>
            <div className="comment-wrapper">
                <img src="./assets/img/smile.png" className="icon" alt="" />
                <input type="text" className="comment-box" placeholder="Agregar un comentario..." />
                <button className="comment-btn">Publicar</button>
            </div>
        </div>
    )
}
