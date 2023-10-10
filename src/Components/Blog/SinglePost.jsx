import React, { useEffect, useState } from "react";
import BlogComment from "./BlogComment";
import Comment from "./Comment";
import axios from "axios";
import { formatDate } from "../utls/ExportFunction";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

function SinglePost({ searchId, setsearchId }) {
  const [searchedPost, setsearchedPost] = useState([]);
  const [singlepageRefresh, setSinglePageRefresh] = useState("");
  useEffect(() => {
    const getAllCategory = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}Blog/${searchId}`)
        .then((category) => {
          setsearchedPost(category?.data);
          console.log("search id", searchId, "search data ", searchedPost);
        })
        .catch((error) => {});
    };
    getAllCategory();
  }, [searchId, singlepageRefresh]);
  return (
    <>
      <div className="subMenuContainer">
        <div className="viewAll">
          <button className="pages-css" onClick={(e) => setsearchId("")}>
            <i className="ppph">
              <ChevronLeftIcon />
            </i>
            <p>Back</p>
          </button>
        </div>
      </div>
      <article class="entry entry-single">
        <div class="entry-img">
          <img src={searchedPost?.blogImage} alt="" class="img-fluid" />
        </div>

        <h2 class="entry-title">
          <a href="blog-single.html">{searchedPost?.blogHeading}</a>
        </h2>

        <div class="entry-meta">
          <ul>
            <li class="d-flex align-items-center">
              <i class="bi bi-person"></i>{" "}
              <a href="blog-single.html">{searchedPost?.blogOwner}</a>
            </li>
            <li class="d-flex align-items-center">
              <i class="bi bi-clock"></i>{" "}
              <a href="blog-single.html">
                <time datetime="2020-01-01">
                  {formatDate(searchedPost?.blogDAte)}
                </time>
              </a>
            </li>
            <li class="d-flex align-items-center">
              <i class="bi bi-chat-dots"></i>{" "}
              <a href="blog-single.html">
                {searchedPost?.blogComments?.length} Comments
              </a>
            </li>
          </ul>
        </div>

        <div class="entry-content">
          <p>{searchedPost?.blogBody}</p>
        </div>
      </article>
      <div class="blog-comments">
        <h4 class="comments-count">
          {searchedPost?.blogComments?.length} Comments
        </h4>

        <BlogComment comments={searchedPost?.blogComments} />

        <Comment
          searchId={searchId}
          setSinglePageRefresh={setSinglePageRefresh}
        />
      </div>
    </>
  );
}

export default SinglePost;
