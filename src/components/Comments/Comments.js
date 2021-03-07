import React from 'react';

const Comments = (props) => {
    const comment = props.comment;
    return (
        <div>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
        </div>
    );
};

export default Comments;