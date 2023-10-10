import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import PageTo from "./PageTo";
import BlogSearch from "./BlogSearch";
import BlogRecentPost from "./BlogRecentPost";
import axios from "axios";
import SinglePost from "./SinglePost";
import Footer from "../Footer/Footer";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [recentblogs, setrecentBlogs] = useState([]);
  const [searchId, setsearchId] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setrowsPerPage] = useState(3);
  const [pages, setPages] = useState();
  useEffect(() => {
    const fetchBlogs = async () => {
      await axios
        .get(
          `${process.env.REACT_APP_Server_Url}Blog?p=${parseInt(
            page
          )}&limit=${parseInt(rowsPerPage)}`
        )
        .then((product) => {
          setBlogs(product?.data?.getAllBlogs);
          setPages(product?.data?.numberOfPages);
          console.log("blogs", product);
        })
        .catch((error) => {});
    };
    const fetchRecentPosts = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}Blog/recent/blogs`)
        .then((product) => {
          setrecentBlogs(product.data);
          console.log("blogs", blogs);
        })
        .catch((error) => {});
    };

    fetchBlogs();
    fetchRecentPosts();
  }, [page, rowsPerPage]);

  if (blogs?.length === 0 || recentblogs?.length === 0) {
    return (
      <>
        <main id="main " className="do">
          <section id="breadcrumbs" className="breadcrumbs">
            <div className="container" data-aos="fade-up">
              <h1>No Post Yet...</h1>
            </div>
          </section>
        </main>
      </>
    );
  }
  return (
    <>
      <main id="main " className="do">
        <section id="breadcrumbs" className="breadcrumbs">
          {/* <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Blog</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Blog</li>
              </ol>
            </div>
          </div> */}
        </section>
        <section id="blog" className="blog ">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8 entries">
                {searchId?.trim()?.length !== 0 ? (
                  <SinglePost searchId={searchId} setsearchId={setsearchId} />
                ) : (
                  <>
                    {blogs?.map((blg) => (
                      <SingleBlog blg={blg} setsearchId={setsearchId} />
                    ))}
                    <PageTo
                      setPage={setPage}
                      setrowsPerPage={setrowsPerPage}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      totalPages={pages}
                    />
                  </>
                )}
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <BlogSearch />
                  <BlogRecentPost setsearchId={setsearchId} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
