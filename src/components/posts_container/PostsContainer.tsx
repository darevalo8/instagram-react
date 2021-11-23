import { postsList } from '../../services/postsService'
import { Post } from '../post/Post'

export const PostsContainer = () => {

    const posts = postsList;
    return (
        <>
            {posts.map((post) => 
                (<Post username={post.username} description={post.description} 
                img={post.img} likes={post.likes} profilePic={post.profilePic} 
                key={post.id} time={post.time}/>))}
        </>
    )
}
