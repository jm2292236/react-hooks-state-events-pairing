import React from 'react';
import Votes from './Votes';

function Comment({ user, comment, commentUpVotes, commentDownVotes }) {
    return (
        <div className="comment-container">
            <h2>{user}</h2>
            <p>{comment}</p>

            <Votes upVotes={commentUpVotes} downVotes={commentDownVotes}/>
        </div>
    )
}

export default Comment;