import React from 'react';

function Video({ title, embedUrl, views, createdAt }) {
    return (
        <div className="video-container">
            <iframe
                width="919"
                height="525"
                // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{title}</h1>
            <div className="video-details">
                <p>{views} Views | Uploaded {createdAt}</p>
            </div>
        </div>
    )
}

export default Video;