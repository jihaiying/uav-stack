import React, { Component } from "react";
import css from "./assets/OutlineTab.css";
import outline from "./assets/Outline.png";
import { FormattedMessage } from "react-intl";

class OutlineTab extends Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.title}>
          <FormattedMessage id="outlineTab_title" />
        </div>
        <div className={css.line} />
        <img className={css.img} src={outline} alt="应用运维解决方案" />
      </div>
    );
  }
}

export default OutlineTab;
