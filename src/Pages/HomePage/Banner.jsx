import React from "react";
import "../../styles/Styles.scss";

export const Banner = () => {
  return (
    <div className="banner">
      <h1>Nuestro indispensable</h1>
      <hr />
      <img
        className="banner-image"
        src="https://static.crunchyroll.com/fms/desktop_large/1050x350/c5ef06bd-6cbd-4d09-9f43-bc4a4441e5ef.png"
        alt=""
      />
    </div>
  );
};
