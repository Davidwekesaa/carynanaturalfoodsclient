import React, { useState } from "react";
import notimage from "../../assets/notImge.png";
import { useStateValue } from "../../store/StateProvider";
import { formatDate } from "../utls/ExportFunction";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ReplyIcon from "@mui/icons-material/Reply";
import Reply from "./Reply";
function GetComments({
  comment,
  replies,
  allComments,
  searchId,
  setSinglePageRefresh,
}) {
  const [viewReply, setViewReply] = useState(false);
  const [vReply, setVReply] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const getReplies = (commentId) => {
    return allComments?.filter(
      (backendComment) => backendComment?.parentId === commentId
    );
  };
  const handleToggle = () => {
    setViewReply(!viewReply); // Toggles the state
  };
  const handleToggleReply = () => {
    setVReply(!vReply); // Toggles the state
  };
  return (
    <div id="comment-1" class="comment" key={comment?.commentId}>
      <div class="d-flex">
        <div class="comment-img gg">
          <img
            src={user === null ? notimage : user?.profile}
            alt=""
            className="img-comment"
          />
        </div>
        <div>
          <div className="dpf">
            <h5>{comment?.name}</h5>
            <time datetime="2020-01-01">
              {formatDate(comment?.commentDAte)}
            </time>
          </div>
          <p>{comment?.comment}</p>
          <div className="replysu">
            <div className="replysu hkuy" onClick={(e) => handleToggle()}>
              {viewReply ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              <h1>replies</h1>
            </div>
            <div className="replysu hkuy" onClick={(e) => handleToggleReply()}>
              <ReplyIcon />
              <h1>reply</h1>
            </div>
          </div>
        </div>
      </div>
      {vReply && (
        <Reply
          setSinglePageRefresh={setSinglePageRefresh}
          searchId={searchId}
          commentId={comment?.commentId}
        />
      )}
      {replies?.length > 0 && viewReply && (
        <div class="coent">
          {replies?.map((reply) => (
            <GetComments
              comment={reply}
              replies={getReplies(reply?.commentId)}
              allComments={allComments}
              setSinglePageRefresh={setSinglePageRefresh}
              searchId={searchId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default GetComments;
