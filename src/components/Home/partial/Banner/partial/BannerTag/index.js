import React, { Component } from "react";
import css from "./assets/BannerTag.css";
import Dialog from "../Dialog";
import cx from "classnames";

class BannerTag extends Component {
  render() {
    const { data } = this.props;
    return (
      <div
        className={cx(css.container, "swiper-slide")}
        style={{ backgroundImage: "url(" + data.bg + ")" }}
      >
        <div className={css.center}>
          <div className={css.text}>
            <p className={css.title}>{data.title}</p>
            <ul className={css.descCon}>
              {data.word.map((item, key) => (
                <li key={key}>
                  {item.title}
                  {item.desc &&
                    item.desc.map((desc, key) => <p key={key}>{desc}</p>)}
                </li>
              ))}
            </ul>
          </div>
          <Dialog />
        </div>
      </div>
    );
  }
}

export default BannerTag;
