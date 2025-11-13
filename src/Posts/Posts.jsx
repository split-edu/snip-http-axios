import { useEffect, useState } from "react";
import Post from "./Post/Post.jsx";
import axios from "axios";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/posts")
            .then(data => {
                console.log(data);
                return data;
            })
            .then(data => setPosts(data.data));
    }, []);

    return (
        <>
            { posts.length > 0 && posts.map(post => (
                <Post title={post.title} text={post.body} />
            )) }
        </>
    );
}

export default Posts;