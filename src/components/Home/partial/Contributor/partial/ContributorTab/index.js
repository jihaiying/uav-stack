import React, { Component } from "react";
import css from "./assets/ContributorTab.css";
import cx from "classnames";

class ContributorTab extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={cx(css.container, "swiper-slide")}>
        <a className={css.link} href={"https://github.com/" + data.gitid}>
          <img className={css.img} src={data.pic} alt={data.name} />
          <div className={css.title}>{data.name}</div>
        </a>
        <ul className={css.descCon}>
          {data.tips.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContributorTab;
