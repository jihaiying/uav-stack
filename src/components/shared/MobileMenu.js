import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logom from "./assets/logom.png";
import LanguageSwitchBtn from "./LanguageSwitchBtn.js";
import { FormattedMessage } from "react-intl";
import css from "./assets/Header.css";
import Icon from "antd/lib/icon";

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleClick = e => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show
    });
  };

  onMaskClick = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { show } = this.state;
    const menu = (
      <div className={css.menu}>
        <NavLink
          exact
          to={"/"}
          activeClassName={css.selected}
          className={css.link}
        >
          <FormattedMessage id="home" />
          <div className={css.line} />
        </NavLink>
        <NavLink
          to={"/product"}
          activeClassName={css.selected}
          className={css.link}
        >
          <FormattedMessage id="product" />
          <div className={css.line} />
        </NavLink>
        <NavLink
          to={"/download"}
          activeClassName={css.selected}
          className={css.link}
        >
          <FormattedMessage id="download" />
          <div className={css.line} />
        </NavLink>
        <NavLink
          to={"/document"}
          activeClassName={css.selected}
          className={css.link}
        >
          <FormattedMessage id="document" />
          <div className={css.line} />
        </NavLink>
      </div>
    );
    return (
      <div>
        <div className={css.mobile_container}>
          <div onClick={this.handleClick} className={css.nav}>
            <Icon type="bars" />
          </div>
          <Link to={"/"} className={css.title}>
            <img src={logom} alt="download" />
            <span>UAVStack</span>
          </Link>
          <LanguageSwitchBtn />
        </div>
        {show ? menu : null}
      </div>
    );
  }
}

export default MobileMenu;
