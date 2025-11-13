function Post({ title, text }) {
    return (
        <div className="flex flex-col justify-between mt-2">
            <div className="fill-green-500">{ title }</div>
            <div>{ text }</div>
        </div>
    );
}

export default Post;