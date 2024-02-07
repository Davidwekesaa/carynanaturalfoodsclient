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
    const currentUrl = window.location.href;
    const blogUrl = `${currentUrl}?q=${blogHeading.toString()}`;

    setCopyValue(blogUrl);
    console.log("Current URL:", blogUrl);
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
