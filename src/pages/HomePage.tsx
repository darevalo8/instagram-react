import { Navbar } from '../components/navbar/Navbar';
import { PostsContainer } from '../components/posts_container/PostsContainer';
import { StatusBar } from '../components/status_bar/StatusBar';
import { Suggestions } from '../components/suggestions/Suggestions';

export const HomePage = () => {
    
    return (
        <>
            <Navbar/>
            <section className="main">
                <div className="wrapper">
                    <div className="left-col">
                        <StatusBar/>
                        <PostsContainer/>
                    </div>
                    <div className="right-col">
                        <Suggestions/>
                    </div>
                </div>
            </section>
        </>
    )
}
