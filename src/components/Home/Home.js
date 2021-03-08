import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <>
            <Typography variant="h3" align="center" gutterBottom>User Posts</Typography>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </>
    );
};

export default Home;