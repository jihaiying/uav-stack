import React, { Component } from "react";
import css from "./assets/Outline.css";
import outline from "./assets/Outline.png";
import { injectIntl } from "react-intl";

class Outline extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div className={css.container}>
        <div
          id={formatMessage({ id: "product_outline_title" })}
          className={css.anchor}
        />
        <div className={css.title}>
          {formatMessage({ id: "product_outline_title" })}
        </div>
        <img
          className={css.img}
          src={outline}
          alt={formatMessage({ id: "product_outline_title" })}
        />
      </div>
    );
  }
}
export default injectIntl(Outline);
