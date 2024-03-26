import React, { useState } from "react";
import {
  formatDate,
  trancateWords,
  updateSearchParams,
} from "../utls/ExportFunction";
import ShareBlogPost from "./ShareBlogPost";

function SingleBlog({ blg, setsearchId }) {
  // const [searchTerm, setSearchTerm] = useState("dav");
  // const updateSearchParams = (e, bhad) => {
  //   e.preventDefault();
  //   const params = new URLSearchParams(window.location.search);
  //   params.set("q", bhad); // 'q' is the parameter name, change it accordingly
  //   const newUrl = `${window.location.pathname}?${params.toString()}`;
  //   // Update the URL without refreshing the page
  //   window.history.pushState({}, "", newUrl);
  //   window.location.reload();
  // };
  return (
    <>
      <article className="entry">
        <div className="imgwithsd">
          <img src={blg?.blogImage} alt="" className="imgwithsd" />
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

            <li className="d-flex align-items-center">
              <ShareBlogPost blogHeading={blg?.blogHeading} />
            </li>
          </ul>
        </div>

        <div className="entry-content">
          {/* <p>{trancateWords(blg?.blogBody)}</p> */}
          <p
            class="entry-content"
            style={{
              wordWrap: "break-word",
              width: "100%",
              overflowWrap: "break-word",
            }}
            dangerouslySetInnerHTML={{ __html: trancateWords(blg?.blogBody) }}
          />
          <div className="read-more">
            {/* <button onClick={(e) => setsearchId(blg?._id)}>Read More</button> */}
            <button onClick={(e) => updateSearchParams(e, blg?.blogHeading)}>
              Read More
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default SingleBlog;
