import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDate } from "../utls/ExportFunction";

function BlogRecentPost({ setsearchId }) {
  const [recentblogs, setRecentblogs] = useState([]);
  useEffect(() => {
    const fetchRecentPosts = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}Blog/recent/blogs`)
        .then((product) => {
          setRecentblogs(product.data);
          console.log("blogs", recentblogs);
        })
        .catch((error) => {});
    };

    fetchRecentPosts();
  }, []);

  if (recentblogs?.length === 0) {
    return (
      <>
        <h3 className="sidebar-title">Recent Posts</h3>
        <div className="sidebar-item recent-posts">
          <div className="post-item clearfix"></div>
        </div>
      </>
    );
  }
  return (
    <>
      <h3 className="sidebar-title">Recent Posts</h3>
      <div className="sidebar-item recent-posts">
        {recentblogs?.map((rcb) => (
          <div className="post-item clearfix">
            <img src={rcb?.blogImage} alt="" />
            <h4 className="recentb" onClick={(e) => setsearchId(rcb?._id)}>
              {rcb?.blogHeading}
            </h4>
            <time datetime="2020-01-01">{formatDate(rcb?.blogDAte)}</time>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogRecentPost;
