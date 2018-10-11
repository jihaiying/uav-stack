import React, { Component } from "react";
import { Link } from "react-router-dom";
import LanguageSwitchBtn from "./partial/LanguageSwitchBtn";
import { FormattedMessage } from "react-intl";
import css from "./assets/Header.css";
import logo from "./assets/logo.png";

class Header extends Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.title}>
            <img src={logo} alt="download" />
            <span>UAV Stack</span>
          </div>
          <div className={css.tag}>
            <Link to={"/"} className={css.link}>
              <FormattedMessage id="home" />
            </Link>
          </div>
          <div className={css.tag}>
            <Link to={"/product"} className={css.link}>
              <FormattedMessage id="product" />
            </Link>
          </div>
          <div className={css.tag}>
            <Link to={"/download"} className={css.link}>
              <FormattedMessage id="download" />
            </Link>
          </div>
          <div className={css.tag}>
            <a href={"https://github.com/uavorg"} className={css.link}>
              GitHub
            </a>
          </div>
          <div className={css.language}>
            <LanguageSwitchBtn className={css.tag} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
