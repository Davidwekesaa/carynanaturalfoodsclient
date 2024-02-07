import React, { useEffect, useState } from "react";
import BlogComment from "./BlogComment";
import Comment from "./Comment";
import axios from "axios";
import { formatDate } from "../utls/ExportFunction";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";
import ShareBlogPost from "./ShareBlogPost";

function SinglePost({ searchedPost, setsearchedPost }) {
  // const [searchedPost, setsearchedPost] = useState([]);
  const [singlepageRefresh, setSinglePageRefresh] = useState("");
  // useEffect(() => {
  //   const getAllCategory = async () => {
  //     await axios
  //       .get(`${process.env.REACT_APP_Server_Url}Blog/${searchId}`)
  //       .then((category) => {
  //         setsearchedPost(category?.data);
  //         console.log("search id", searchId, "search data ", searchedPost);
  //       })
  //       .catch((error) => {});
  //   };
  //   getAllCategory();
  // }, [searchId, singlepageRefresh]);
  console.log("searchedPost", searchedPost[0]?._id);
  return (
    <>
      <div className="subMenuContainer">
        <div className="viewAll">
          <button className="pages-css" onClick={(e) => setsearchedPost([])}>
            <i className="ppph">
              <ChevronLeftIcon />
            </i>
            <p>Back</p>
          </button>
        </div>
      </div>
      <article class="entry entry-single">
        <div class="entry-img imgwithsd">
          <img src={searchedPost[0]?.blogImage} alt="" class="img-fluid" />
        </div>

        <h2 class="entry-title">
          <a href="blog-single.html">{searchedPost[0]?.blogHeading}</a>
        </h2>

        <div class="entry-meta">
          <ul>
            <li class="d-flex align-items-center">
              <i class="bi bi-person"></i>{" "}
              <a href="blog-single.html">{searchedPost[0]?.blogOwner}</a>
            </li>
            <li class="d-flex align-items-center">
              <i class="bi bi-clock"></i>{" "}
              <a href="blog-single.html">
                <time datetime="2020-01-01">
                  {formatDate(searchedPost[0]?.blogDAte)}
                </time>
              </a>
            </li>
            <li class="d-flex align-items-center">
              <i class="bi bi-chat-dots"></i>{" "}
              <a href="blog-single.html">
                {searchedPost[0]?.blogComments?.length} Comments
              </a>
            </li>

            <li className="d-flex align-items-center">
              <ShareBlogPost blogHeading={searchedPost[0]?.blogHeading} />
            </li>
          </ul>
        </div>

        {/* <div class="entry-content">
          <p>{he.decode(he.encode(searchedPost?.blogBody))}</p>
        </div> */}
        <span
          class="entry-content"
          dangerouslySetInnerHTML={{ __html: searchedPost[0]?.blogBody }}
        />
      </article>
      <div class="blog-comments">
        <h4 class="comments-count">
          {searchedPost[0]?.blogComments?.length} Comments
        </h4>

        <BlogComment comments={searchedPost[0]?.blogComments} />

        <Comment
          searchId={searchedPost[0]?._id}
          setSinglePageRefresh={setSinglePageRefresh}
        />
      </div>
    </>
  );
}

export default SinglePost;
