import React, { Component } from "react";
import Header1 from "../Header1";
import Header2 from "../Header2";

class Header extends Component {
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

  render() {
    const top = this.state.top;
    return (
      <div>
        <Header1 hide={top <= 50} />
        <Header2 hide={top > 50} />
      </div>
    );
  }
}

export default Header;
