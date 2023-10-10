import React from "react";

function BlogSearch() {
  return (
    <>
      {" "}
      <h3 className="sidebar-title">Search</h3>
      <div className="sidebar-item search-form">
        <form action="">
          <input type="text" />
          <button type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default BlogSearch;
