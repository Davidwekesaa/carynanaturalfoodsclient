import React from "react";

function BannerName({ name, bannername }) {
  return (
    <div className="bannerContent">
      <h3>Hello {name}</h3>
      <p>{bannername}</p>
    </div>
  );
}

export default BannerName;
