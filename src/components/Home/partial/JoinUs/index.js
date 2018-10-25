import React, { Component } from "react";
import css from "./assets/JoinUs.css";
import { injectIntl } from "react-intl";
import book from "./assets/book.png";
import down from "./assets/down.png";

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
      title: formatMessage({ id: "JoinUs_title" }),
      tip: formatMessage({ id: "JoinUS_tip" }),
      manual: formatMessage({ id: "JoinUs_manual" }),
      manual_link: formatMessage({ id: "JoinUs_manual_link" }),
      download: formatMessage({ id: "JoinUs_download" }),
      download_link: formatMessage({ id: "JoinUs_download_link" })
    });
  }

  render() {
    const {
      title,
      tip,
      manual,
      manual_link,
      download,
      download_link
    } = this.state;
    return (
      <div className={css.container}>
        <div id="JoinUs" className={css.anchor} />
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          <div className={css.line} />
          <p>{tip}</p>
          <a target="_blank" href={manual_link} className={css.tab}>
            <img src={book} alt="book" className={css.img} />
            <span>{manual}</span>
          </a>
          <a target="_blank" href={download_link} className={css.tab}>
            <img src={down} alt="download" className={css.img} />
            <span>{download}</span>
          </a>
        </div>
      </div>
    );
  }
}

export default injectIntl(JoinUs);
