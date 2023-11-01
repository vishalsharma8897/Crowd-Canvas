import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
const [like ,setLike]  = useState(post.like);
const [clicked ,setClicked] = useState(false);
const likeHandler =()=>{
     if(!clicked)
     {
       setLike((prev)=>prev+1);
       setClicked(true);
     }
     else{
      setLike((prev)=>prev-1);
      setClicked(false);
     }
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">3min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{`${like} people liked it`}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{`${post?.comment} comments`}</span>
          </div>
        </div>
      </div>  
    </div>
  );
}