import video from "../data/video.js";
import Video from "./Video.js";
import Votes from "./Votes.js";
import CommentList from "./CommentList.js";

function App() {
    console.log("Here's your data:");
    console.table(video);

    return (
        <div className="App"> 
            <Video 
                title={video.title} 
                embedUrl={video.embedUrl}
                views={video.views} 
                createdAt={video.createdAt}
            />

            <Votes upVotes={video.upvotes} downVotes={video.downvotes}/>

            <CommentList comments={video.comments}/>
        </div>
    );
}

export default App;
