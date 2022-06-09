import React, { useState } from 'react';
import Comment from './Comment';

function CommentList( { comments }) {
    const [showComments, setShowComments] = useState(true);

    function handleButtonClick(event) {
        setShowComments(!showComments);
    }

    return (
        <div className="commentList-container">
            <button onClick={handleButtonClick}>
                {showComments ? "Hide comments" : "Show comments"}
            </button>
            <hr/>

            {showComments ?
                comments.map(comment => {
                    return (
                        <Comment 
                            key={comment.id} 
                            user={comment.user} 
                            comment={comment.comment}
                            commentUpVotes={comment.upvotes}
                            commentDownVotes={comment.downvotes}
                        />
                    )
                })
                :
                null
            }
        </div>
    )
}

export default CommentList;
