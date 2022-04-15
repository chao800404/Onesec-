/** @format */

import { useState } from "react";
import Spinner from "../spinner/spinner.component";

const PreLoadImage = ({ text, url, className = null }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className={className} style={{ position: "relative" }}>
      {loading ? null : (
        <Spinner
          style={{
            position: "absolute",
            hidden: "100%",
            top: 0,
            left: 0,
            backgroundColor: "#999",
            height: "100%",
            zIndex: 30,
            minHeight: "20rem",
          }}
        />
      )}
      <img
        style={{ width: "100%", height: "100%" }}
        alt={text}
        src={url}
        onLoad={() => setLoading((preLoad) => (preLoad = true))}
      />
    </div>
  );
};

export default PreLoadImage;
