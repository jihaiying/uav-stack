import React, { Component } from "react";
import css from "./assets/IntroductionTab.css";

class AdvangtageTab extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={css.container}>
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

export default AdvangtageTab;
