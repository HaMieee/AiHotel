import React from 'react'
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
let cx = classNames.bind(styles);

function Blog() {
  return (
    <div className={cx('blog')}>
        <div className={cx('container')}>
            <h2>Blog về khách sạn</h2>
            <div className={cx('container_text')}>
                <span>
                 Hãy cùng AiHotel<br></br>
                khám phá những điều thật  thú vị nhé!
                </span>
            </div>
        </div>
        <div className={cx('blog_img')}>
          <img src='src\img\blog1.png' alt=''/>
          <img src='src\img\blog2.png' alt=''/>
          <img src='src\img\blog3.png' alt=''/>
          <img src='src\img\blog4.png' alt=''/>
          <img src='src\img\blog5.png' alt=''/>
        </div>
    </div>
  )
}

export default Blog