import React from "react";
import { formatDate, trancateWords } from "../utls/ExportFunction";

function SingleBlog({ blg, setsearchId }) {
  return (
    <>
      <article className="entry">
        <div className="entry-img">
          <img src={blg?.blogImage} alt="" className="img-fluid" />
        </div>

        <h2 className="entry-title">
          <a href="blog-single.html">{blg?.blogHeading}</a>
        </h2>

        <div className="entry-meta">
          <ul>
            <li className="d-flex align-items-center">
              <i className="bi bi-person"></i>
              <a href="blog-single.html">{blg?.blogOwner}</a>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-clock"></i>
              <a href="blog-single.html">
                <time datetime="2020-01-01">{formatDate(blg?.blogDAte)}</time>
              </a>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-chat-dots"></i>
              <a href="blog-single.html">
                {blg?.blogComments?.length} Comments
              </a>
            </li>
          </ul>
        </div>

        <div className="entry-content">
          {/* <p>{trancateWords(blg?.blogBody)}</p> */}
          <span
            class="entry-content"
            dangerouslySetInnerHTML={{ __html: blg?.blogBody }}
          />
          <div className="read-more">
            <button onClick={(e) => setsearchId(blg?._id)}>Read More</button>
          </div>
        </div>
      </article>
    </>
  );
}

export default SingleBlog;
