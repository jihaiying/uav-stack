import React, { Component } from "react";
import css from "./assets/AdvangtagePanel.css";
import AdvangtageTab from "./partial/AdvangtageTab";
import { injectIntl } from "react-intl";
import cell from "./assets/cells.png";
import cpu from "./assets/cpu.png";
import phone from "./assets/phone.png";
import transfer from "./assets/transfer.png";
import view from "./assets/view.png";

class AdvangtagePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
      title: formatMessage({ id: "product_advangtage_title" }),
      data: [
        {
          title: formatMessage({ id: "product_advangtage_tip_1" }),
          bg: cell
        },
        {
          title: formatMessage({ id: "product_advangtage_tip_2" }),
          bg: phone
        },
        {
          title: formatMessage({ id: "product_advangtage_tip_3" }),
          bg: transfer
        },
        {
          title: formatMessage({ id: "product_advangtage_tip_4" }),
          bg: cpu
        },
        {
          title: formatMessage({ id: "product_advangtage_tip_5" }),
          bg: view
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
          {data.map((item, key) => (
            <AdvangtageTab key={key} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default injectIntl(AdvangtagePanel);
