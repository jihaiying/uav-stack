import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LanguageSwitchBtn from "../LanguageSwitchBtn";
import { FormattedMessage } from "react-intl";
import css from "../Header/assets/Header.css";
import logo from "../Header/assets/logo.png";

class Header1 extends Component {
  render() {
    var h = this.props.hide ? "0" : "70px";
    return (
      <div className={css.container} style={{ height: h }}>
        <div className={css.content}>
          <div className={css.title}>
            <img src={logo} alt="download" />
            <span>UAVStack</span>
          </div>
          <div className={css.tag}>
            <NavLink
              exact
              to={"/"}
              activeClassName={css.selected}
              className={css.link}
            >
              <FormattedMessage id="home" />
              <div className={css.line} />
            </NavLink>
          </div>
          <div className={css.tag}>
            <NavLink
              to={"/product"}
              activeClassName={css.selected}
              className={css.link}
            >
              <FormattedMessage id="product" />
              <div className={css.line} />
            </NavLink>
          </div>
          <div className={css.tag}>
            <NavLink
              to={"/download"}
              activeClassName={css.selected}
              className={css.link}
            >
              <FormattedMessage id="download" />
              <div className={css.line} />
            </NavLink>
          </div>
          <div className={css.tag}>
            <NavLink
              to={"/document"}
              activeClassName={css.selected}
              className={css.link}
            >
              <FormattedMessage id="document" />
              <div className={css.line} />
            </NavLink>
          </div>
          <div className={css.tag}>
            <a
              href={" https://github.com/uavorg/uavstack"}
              className={css.link}
              target="_blank"
            >
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

export default Header1;
