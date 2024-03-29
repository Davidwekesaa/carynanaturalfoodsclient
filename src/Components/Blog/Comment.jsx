import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../store/StateProvider";

function Comment({ searchId, setSinglePageRefresh }) {
  const [{ user }, dispatch] = useStateValue();
  const [userName, setUserName] = useState(user?.userName);
  const [userComment, setUserComment] = useState("");
  const commentAdded = () => toast.success("comment added");
  const addComment = async (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 && userComment.trim().length === 0) {
    } else {
      await axios
        .put(`${process.env.REACT_APP_Server_Url}Blog/comment/${searchId}`, {
          name: userName,
          comment: userComment,
        })
        .then((product) => {
          commentAdded();
          setUserName("");
          setUserComment("");
          setSinglePageRefresh(uuidv4());
        })
        .catch((error) => {});
    }
  };
  return (
    <>
      <div class="reply-form">
        <h4>Leave a Comment</h4>
        <p>Required fields are marked * </p>
        <div>
          <div class="row">
            <div class="col-md-6 form-group">
              <input
                name="name"
                type="text"
                class="form-control"
                placeholder="Your Name*"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            {/* <div class="col-md-6 form-group">
            <input
              name="email"
              type="text"
              class="form-control"
              placeholder="Your Email*"
            />
          </div> */}
          </div>
          {/* <div class="row">
          <div class="col form-group">
            <input
              name="website"
              type="text"
              class="form-control"
              placeholder="Your Website"
            />
          </div>
        </div> */}
          <div class="row">
            <div class="col form-group">
              <textarea
                name="comment"
                class="form-control"
                placeholder="Your Comment*"
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
              />
            </div>
          </div>
          <button onClick={(e) => addComment(e)} class="btn btn-primary">
            Post Comment
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Comment;
