import React from "react";

function BannerName({ name }) {
  return (
    <div className="bannerContent">
      <h3>Hello {name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
}

export default BannerName;
