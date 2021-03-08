import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';
import useStyles from '../../Style/Style'
const PostDetail = () => {
    const classes = useStyles();
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
        <Container maxWidth="md">
            <Grid item className={classes.postDetail}>
                <Card variant="outlined" className={classes.cardDetail}>
                    <Typography variant="h3">User Details Info</Typography>
                   <CardContent>
                        <h1>User ID: {post.id}</h1>
                        <p>title: {post.title}</p>
                        <p>body: {post.body}</p>
                        <b>Number of Comments: {comment.length}</b>
                        <h1>Comment Details</h1>
                        {
                            comment.map(cmnt => <Comments comment={cmnt}></Comments>)
                        }
                   </CardContent>
                </Card>
            </Grid>
        </Container>
    );
};

export default PostDetail;