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
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({
      top: scrollTop
    });
  }
  scrollToAnchor = anchorName => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };

  render() {
    const fix = this.state.top > 400 ? 0 : 400 - this.state.top;
    const data = this.props.data;
    return (
      <div className={css.container} style={{ marginTop: fix }}>
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
