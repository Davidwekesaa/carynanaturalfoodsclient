import React from "react";
import { formatDate } from "../utls/ExportFunction";
import notimage from "../../assets/notImge.png";
import { useStateValue } from "../../store/StateProvider";
import GetComments from "./GetComments";

function BlogComment({ comments, searchId, setSinglePageRefresh }) {
  const [{ user }, dispatch] = useStateValue();
  const rootComments = comments?.filter(
    (backendComment) => backendComment?.parentId === null
  );
  const getReplies = (commentId) => {
    return comments?.filter(
      (backendComment) => backendComment?.parentId === commentId
    );
  };
  return (
    <>
      {rootComments?.map((comment) => (
        // <div id="comment-1" class="comment" key={comment?.commentId}>
        //   <div class="d-flex">
        //     <div class="comment-img gg">
        //       <img src={user === null ? notimage : user?.profile} alt="" />
        //     </div>
        //     <div>
        //       <h5>
        //         <a href="">{comment?.name}</a>
        //       </h5>
        //       <time datetime="2020-01-01">
        //         {formatDate(comment?.commentDAte)}
        //       </time>
        //       <p>{comment?.comment}</p>
        //     </div>
        //   </div>
        // </div>
        <GetComments
          comment={comment}
          replies={getReplies(comment?.commentId)}
          allComments={comments}
          setSinglePageRefresh={setSinglePageRefresh}
          searchId={searchId}
        />
      ))}
    </>
  );
}

export default BlogComment;
