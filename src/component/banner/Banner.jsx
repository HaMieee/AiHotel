import React from "react";
import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

let cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx("banner ")}>
      <div className={cx("banner_img")}>
        <div>
          <img src="\src\img\banner1.png" alt="banner1"></img>
        </div>
        <div>
          {" "}
          <img src="src\img\banner2.png" alt="banner2"></img>
        </div>
        <div>
          <img src="src\img\banner3.png" alt="banner3"></img>
        </div>
        <div>
          {" "}
          <img src="src\img\banner4.png" alt="banner4"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
