import React from "react";

function BannerName({ name,bannername }) {
  return (
    <div className="bannerContent">
      <h3>Hello {name}</h3>
      <p>
        {/* This is 100% pure honey,harvested from Baringo's expansive forests. <br/>
        Its naturally processed and packed,with no additives used. Enjoy this thick
        and smooth product,full of natural taste of sweetness. */}
        {bannername}
      </p>
    </div>
  );
}

export default BannerName;
