import React, { Component } from "react";
import css from "./assets/ProductPanel.css";
import ProductTab from "./partial/ProductTab";
import uem from "./assets/UEM.png";
import container from "./assets/Container.png";
import apm from "./assets/APM.png";
import hit from "./assets/HIT.png";
import monitor from "./assets/Monitor.png";
import mscp from "./assets/MSCP.png";
import servicegovern from "./assets/ServiceGovern.png";
import { injectIntl } from "react-intl";

class ProductPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        tips: []
      },
      data: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
      title: {
        title: formatMessage({ id: "productPanel_title" }),
        tips: [
          formatMessage({ id: "productPanel_tip_1" }),
          formatMessage({ id: "productPanel_tip_2" }),
          formatMessage({ id: "productPanel_tip_3" }),
          formatMessage({ id: "productPanel_tip_4" })
        ]
      },
      data: [
        {
          title: formatMessage({ id: "productTab_1_title" }),
          tips: [
            formatMessage({ id: "productTab_1_tip_1" }),
            formatMessage({ id: "productTab_1_tip_2" }),
            formatMessage({ id: "productTab_1_tip_3" }),
            formatMessage({ id: "productTab_1_tip_4" })
          ],
          bg: monitor,
          width: 350,
          site: "/product"
        },
        {
          title: formatMessage({ id: "productTab_2_title" }),
          tips: [
            formatMessage({ id: "productTab_2_tip_1" }),
            formatMessage({ id: "productTab_2_tip_2" })
          ],
          bg: apm,
          width: 350
        },
        {
          title: formatMessage({ id: "productTab_3_title" }),
          tips: [
            formatMessage({ id: "productTab_3_tip_1" }),
            formatMessage({ id: "productTab_3_tip_2" }),
            formatMessage({ id: "productTab_3_tip_3" }),
            formatMessage({ id: "productTab_3_tip_4" }),
            formatMessage({ id: "productTab_3_tip_5" })
          ],
          bg: servicegovern,
          width: 350
        },
        {
          title: formatMessage({ id: "productTab_4_title" }),
          tips: [
            formatMessage({ id: "productTab_4_tip_1" }),
            formatMessage({ id: "productTab_4_tip_2" })
          ],
          bg: uem,
          width: 350
        },
        {
          title: formatMessage({ id: "productTab_5_title" }),
          tips: [
            formatMessage({ id: "productTab_5_tip_1" }),
            formatMessage({ id: "productTab_5_tip_2" })
          ],
          bg: container,
          width: 350
        },
        {
          title: formatMessage({ id: "productTab_6_title" }),
          tips: [
            formatMessage({ id: "productTab_6_tip_1" }),
            formatMessage({ id: "productTab_6_tip_2" }),
            formatMessage({ id: "productTab_6_tip_3" })
          ],
          bg: hit,
          width: 350,
          site: "/product"
        },
        {
          title: formatMessage({ id: "productTab_7_title" }),
          tips: [
            formatMessage({ id: "productTab_7_tip_1" }),
            formatMessage({ id: "productTab_7_tip_2" }),
            formatMessage({ id: "productTab_7_tip_3" }),
            formatMessage({ id: "productTab_7_tip_4" })
          ],
          bg: mscp,
          width: 1110
        }
      ]
    });
  }

  render() {
    const { title, data } = this.state;
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.title}>{title.title}</div>
          <div className={css.line} />
          {title.tips.map((item, key) => (
            <p key={key} className={css.tip}>
              {item}
            </p>
          ))}
          <div className={css.divider} />
          {data.map((item, key) => (
            <ProductTab key={key} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default injectIntl(ProductPanel);
