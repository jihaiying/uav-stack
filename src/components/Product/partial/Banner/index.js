import React, { Component } from "react";
import css from "./assets/Banner.css";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
class SupportPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
      title: formatMessage({ id: "documentTab_download_title2" }),
      tip: formatMessage({ id: "product_banner_tip" }),
      use: formatMessage({ id: "product_banner_use" })
    });
  }

  render() {
    const { title, tip, use } = this.state;
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          <p className={css.org}>{tip}</p>
          <Link to={"/download"} className={css.email}>
            {use}
          </Link>
        </div>
      </div>
    );
  }
}

export default injectIntl(SupportPanel);
