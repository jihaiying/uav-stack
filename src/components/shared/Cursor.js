import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import css from "./assets/Header.css";

class Cursor extends Component {
  render() {
    return (
      <Link to={"/"} className={css.cursor}>
        ▲<br />
        <FormattedMessage id="top" />
      </Link>
    );
  }
}

export default Cursor;
