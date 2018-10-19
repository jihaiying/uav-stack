import React, { Component } from "react";
import css from "./assets/IntroductionTab.css";

class IntroductTab extends Component {
  render() {
    const { data, hide } = this.props;
    var value = hide ? 0 : 0.99;
    return (
      <div className={css.container} style={{ opacity: value }}>
        {data.tips.map((item, key) => (
          <div key={key} className={css.title}>
            {item}
          </div>
        ))}
        <img className={css.img} src={data.pic} alt={data.title} />
      </div>
    );
  }
}

export default IntroductTab;
