import { useEffect, useState } from "react";
import Post from "./Post/Post.jsx";

function Posts() {
    const [postovi, postaviPostove] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => postaviPostove(data));
    }, []);

    return (
        <>
            { postovi.length > 0 && postovi.map(post => (
                <Post title={post.title} text={post.text} />
            )) }
        </>
    );
}

export default Posts;