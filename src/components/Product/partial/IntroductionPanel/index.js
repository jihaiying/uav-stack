import React, { Component } from "react";
import css from "./assets/IntroductionPannel.css";
import IntroductionTab from "./partial/IntroductionTab";
import { injectIntl } from "react-intl";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";
import pic5 from "./assets/pic5.png";
import pic6 from "./assets/pic6.png";
import pic7 from "./assets/pic7.png";
import pic8 from "./assets/pic8.png";

class IntroductionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  setCount(c, e) {
    this.setState(prevState => ({
      count: c
    }));
  }

  render() {
    const { count } = this.state;
    const { formatMessage } = this.props.intl;
    const title = formatMessage({ id: "product_introductPanel_title" });
    const data = [
      {
        title: formatMessage({ id: "product_introductTab_1_title" }),
        tips: [formatMessage({ id: "product_introductTab_1_tip" })],
        pic: pic1
      },
      {
        title: formatMessage({ id: "product_introductTab_2_title" }),
        tips: [formatMessage({ id: "product_introductTab_2_tip" })],
        pic: pic2
      },
      {
        title: formatMessage({ id: "product_introductTab_3_title" }),
        tips: [formatMessage({ id: "product_introductTab_3_tip" })],
        pic: pic3
      },
      {
        title: formatMessage({ id: "product_introductTab_4_title" }),
        tips: [formatMessage({ id: "product_introductTab_4_tip" })],
        pic: pic4
      },
      {
        title: formatMessage({ id: "product_introductTab_5_title" }),
        tips: [formatMessage({ id: "product_introductTab_5_tip" })],
        pic: pic5
      },
      {
        title: formatMessage({ id: "product_introductTab_6_title" }),
        tips: [
          formatMessage({ id: "product_introductTab_6_tip" }),
          formatMessage({ id: "product_introductTab_6_tip_2" })
        ],
        pic: pic6
      },
      {
        title: formatMessage({ id: "product_introductTab_7_title" }),
        tips: [
          formatMessage({ id: "product_introductTab_7_tip" }),
          formatMessage({ id: "product_introductTab_7_tip_2" }),
          formatMessage({ id: "product_introductTab_7_tip_3" })
        ],
        pic: pic7
      },
      {
        title: formatMessage({ id: "product_introductTab_8_title" }),
        tips: [
          formatMessage({ id: "product_introductTab_8_tip" }),
          formatMessage({ id: "product_introductTab_8_tip_2" })
        ],
        pic: pic8
      }
    ];
    return (
      <div className={css.container}>
        <div id={title} className={css.anchor} />
        <div className={css.content}>
          <h1 className={css.title}>{title}</h1>
          {data.map((item, key) => (
            <h2
              className={key === count ? css.selected : css.tab}
              key={key}
              onClick={this.setCount.bind(this, key)}
            >
              {item.title}
              <div className={css.line} />
            </h2>
          ))}
          {data.map((item, key) => (
            <IntroductionTab key={key} data={item} hide={key !== count} />
          ))}
        </div>
      </div>
    );
  }
}

export default injectIntl(IntroductionPanel);
