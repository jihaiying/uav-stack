import React, { Component } from "react";
import css from "./assets/SupportPanel.css";
import SupportTab from "./partial/SupportTab";
import { injectIntl } from "react-intl";
class SupportPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
      title: formatMessage({ id: "supportPanel_title" }),
      data: [
        {
          title: formatMessage({ id: "supportTab_1_title" }),
          tips: [
            formatMessage({ id: "supportTab_1_tip_1" }),
            formatMessage({ id: "supportTab_1_tip_2" }),
            formatMessage({ id: "supportTab_1_tip_3" }),
            formatMessage({ id: "supportTab_1_tip_4" })
          ]
        },
        {
          title: formatMessage({ id: "supportTab_2_title" }),
          tips: [
            formatMessage({ id: "supportTab_2_tip_1" }),
            formatMessage({ id: "supportTab_2_tip_2" }),
            formatMessage({ id: "supportTab_2_tip_3" }),
            formatMessage({ id: "supportTab_2_tip_4" }),
            formatMessage({ id: "supportTab_2_tip_5" })
          ]
        },
        {
          title: formatMessage({ id: "supportTab_3_title" }),
          tips: [
            formatMessage({ id: "supportTab_3_tip_1" }),
            formatMessage({ id: "supportTab_3_tip_2" }),
            formatMessage({ id: "supportTab_3_tip_3" }),
            formatMessage({ id: "supportTab_3_tip_4" }),
            formatMessage({ id: "supportTab_3_tip_5" })
          ]
        },
        {
          title: formatMessage({ id: "supportTab_4_title" }),
          tips: [
            formatMessage({ id: "supportTab_4_tip_1" }),
            formatMessage({ id: "supportTab_4_tip_2" }),
            formatMessage({ id: "supportTab_4_tip_3" }),
            formatMessage({ id: "supportTab_4_tip_4" }),
            formatMessage({ id: "supportTab_4_tip_5" })
          ]
        },
        {
          title: formatMessage({ id: "supportTab_5_title" }),
          tips: [
            formatMessage({ id: "supportTab_5_tip_1" }),
            formatMessage({ id: "supportTab_5_tip_2" }),
            formatMessage({ id: "supportTab_5_tip_3" })
          ]
        },
        {
          title: formatMessage({ id: "supportTab_6_title" }),
          tips: [
            formatMessage({ id: "supportTab_6_tip_1" }),
            formatMessage({ id: "supportTab_6_tip_2" }),
            formatMessage({ id: "supportTab_6_tip_3" }),
            formatMessage({ id: "supportTab_6_tip_4" })
          ]
        }
      ]
    });
  }

  render() {
    const { title, data } = this.state;
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          <div className={css.line} />
          <div className={css.divider} />
          {data.map((item, key) => (
            <SupportTab key={key} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default injectIntl(SupportPanel);
