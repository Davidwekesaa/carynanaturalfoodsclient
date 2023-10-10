import React from "react";
import { formatDate } from "../utls/ExportFunction";
import notimage from "../../assets/notImge.png";
import { useStateValue } from "../../store/StateProvider";

function BlogComment({ comments }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <>
      {comments?.map((comment) => (
        <div id="comment-1" class="comment">
          <div class="d-flex">
            <div class="comment-img gg">
              <img src={user === null ? notimage : user?.profile} alt="" />
            </div>
            <div>
              <h5>
                <a href="">{comment?.name}</a>
              </h5>
              <time datetime="2020-01-01">
                {formatDate(comment?.commentDAte)}
              </time>
              <p>{comment?.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogComment;
