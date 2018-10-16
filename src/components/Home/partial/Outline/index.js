import React, { Component } from "react";
import css from "./assets/OutlineTab.css";
import outline from "./assets/Outline.png";
import { FormattedMessage } from "react-intl";

class OutlineTab extends Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.title}>
          <FormattedMessage id="outline_title" />
        </div>
        <div className={css.line} />
        <img className={css.img} src={outline} alt="outline" />
      </div>
    );
  }
}

export default OutlineTab;
