import React, { Component } from "react";
import Header2 from "../../../shared/Header2";
import css from "./assets/Head.css";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import Button from "antd/lib/button";

class Head extends Component {
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
        <Header2 position="static" />
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          <p className={css.org}>{tip}</p>
          <Link to={"/download"}>
            <Button type="primary" className={css.email}>
              {use}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default injectIntl(Head);
