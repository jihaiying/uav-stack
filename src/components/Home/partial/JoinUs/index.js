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
      download: formatMessage({ id: "JoinUs_download" })
    });
  }

  render() {
    const { title, tip, manual, download } = this.state;
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          <div className={css.line} />
          <p>{tip}</p>
          <a
            target="_blank"
            href={"https://pan.baidu.com/s/1o81LNS2#list/path=%2F"}
            className={css.tab}
          >
            <img src={book} alt="book" className={css.img} />
            <span>{manual}</span>
          </a>
          <a
            target="_blank"
            href={"https://pan.baidu.com/s/1o81LNS2#list/path=%2F"}
            className={css.tab}
          >
            <img src={down} alt="download" className={css.img} />
            <span>{download}</span>
          </a>
        </div>
      </div>
    );
  }
}

export default injectIntl(JoinUs);
