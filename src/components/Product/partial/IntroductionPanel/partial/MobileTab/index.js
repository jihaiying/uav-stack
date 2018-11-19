import React, { Component } from "react";
import css from "./assets/MobileTab.css";

class MobileTab extends Component {
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

  render() {
    const { show } = this.state;
    const menu = <div className={css.menu} />;
    return (
      <div>
        <div className={css.container} />
        {show ? menu : null}
      </div>
    );
  }
}

export default MobileTab;
