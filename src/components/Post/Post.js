import { Button, Card, CardActions, CardContent, Container, Grid } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import useStyles from '../../Style/Style';
const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComments = (id) =>{
        const url = `post/${id}`;
        history.push(url);
    }
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Grid container spacing={4}>
                <Grid item >
                   <Card className={classes.card} variant="outlined">
                        <CardContent className={classes.cardContent}>
                            <h2>ID: {id}</h2>
                            <h3>Title: {title}</h3>
                            <p> {body}</p>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" onClick={() => showComments(id)} color="primary">
                                   Show User Posts  
                            </Button>
                        </CardActions>
                   </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Post;