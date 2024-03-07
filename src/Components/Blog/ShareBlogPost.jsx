import React, { useState, useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
function ShareBlogPost({ blogHeading }) {
  const [copyValue, setCopyValue] = useState("share");
  const [copied, setCopied] = useState(false);
  const copiedToClip = () => toast.success("Copied to clipboard");
  useEffect(() => {
    // Get the current URL
    // const currentUrl = window.location.href;
    // console.log("copied link current ",currentUrl)
    // const blogUrl = ${currentUrl}?q=${blogHeading.toString()};
    // console.log("copied link blogUrl ",blogUrl)
    // setCopyValue(blogUrl);
    // console.log("Current URL:", blogUrl);
    const urlParams = new URLSearchParams(window.location.search);
    const qParamValue = urlParams.get("q");
    const desiredValue = blogHeading;
    if (qParamValue === desiredValue) {
      const currentUrl = window.location.href;
      setCopyValue(currentUrl);
    } else {
      urlParams.set("q", desiredValue);
      const newUrl = `${window.location.origin}${
        window.location.pathname
      }?${urlParams.toString()}`;
      setCopyValue(newUrl);
    }
  }, []);

  useEffect(() => {
    if (copied) {
      copiedToClip();
      setTimeout(() => setCopied(false), 2500);
    }
  }, [copied]);
  return (
    <>
      <div className="d-flex align-items-center">
        <CopyToClipboard text={copyValue} onCopy={() => setCopied(true)}>
          {/* <ShareIcon /> share */}
          <button className="sharebtn">
            <ShareIcon />
          </button>
        </CopyToClipboard>
      </div>
      <ToastContainer />
    </>
  );
}

export default ShareBlogPost;
