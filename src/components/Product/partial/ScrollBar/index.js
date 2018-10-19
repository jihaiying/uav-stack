import React, { Component } from "react";
import css from "./assets/ScrollBar.css";
import { injectIntl } from "react-intl";

class ScrollBar extends Component {
  constructor(props) {
    super(props);
    this.scrollHandler = this.scrollHandler.bind(this);
    this.state = {
      top: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.scrollHandler);
  };

  scrollHandler(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    this.setState({
      top: scrollTop
    });
  }
  scrollToAnchor = anchorName => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  render() {
    const { formatMessage } = this.props.intl;
    const fix = this.state.top > 400 ? "fixed" : "static";
    const data = [
      formatMessage({ id: "product_advangtage_title" }),
      formatMessage({ id: "product_introductPanel_title" }),
      formatMessage({ id: "product_outline_title" }),
      formatMessage({ id: "product_help_title" })
    ];
    return (
      <div className={css.container} style={{ position: fix }}>
        <div className={css.content}>
          {data.map((item, key) => (
            <a
              key={key}
              className={css.tag}
              onClick={() => this.scrollToAnchor(item)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default injectIntl(ScrollBar);
