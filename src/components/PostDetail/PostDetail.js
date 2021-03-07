import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const[comment, setComment] = useState([]);
    useEffect(() =>{
        const url= `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [])

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComment(data))
    }, [])
    return (
        <div>
            <h1>User ID: {post.id}</h1>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <b>Number of Comments: {comment.length}</b>
            <h1>Comment Details</h1>
            {
                comment.map(cmnt => <Comments comment={cmnt}></Comments>)
            }
        </div>
    );
};

export default PostDetail;