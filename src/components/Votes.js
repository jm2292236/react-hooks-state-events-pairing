import React, { useState } from 'react';

function Votes({ upVotes, downVotes }) {
    const [upVotesDisplay, setUpVotesDisplay] = useState(upVotes);
    const [downVotesDisplay, setDownVotesDisplay] = useState(downVotes);

    function handleUpVotesClick(event) {
        setUpVotesDisplay(upVotesDisplay => upVotesDisplay + 1);
    }
    
    
    function handleDownVotesClick(event) {
        setDownVotesDisplay(downVotesDisplay === 0 ? 0 : downVotesDisplay - 1);
    }


    return (
        <div className="votes-container">
            <button onClick={handleUpVotesClick}>
                {upVotesDisplay}👍
            </button>

            <button onClick={handleDownVotesClick}>
                {downVotesDisplay}👎
            </button>
        </div>
    )
}

export default Votes;
