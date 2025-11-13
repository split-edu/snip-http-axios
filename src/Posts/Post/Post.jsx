function Post({ title, text }) {
    return (
        <div className="flex flex-col justify-between m-4">
            <div className="text-green-300">{ title }</div>
            <div>{ text }</div>
        </div>
    );
}

export default Post;