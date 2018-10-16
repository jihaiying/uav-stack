import React, { Component } from "react";
import css from "./assets/ContactUs.css";
import qrcode from "./assets/qrcode.jpg";
import { injectIntl } from "react-intl";
class SupportPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
      title: formatMessage({ id: "contactUs_title" }),
      account: [
        formatMessage({ id: "contactUs_tip_1" }),
        formatMessage({ id: "contactUs_tip_2" })
      ],
      mail: formatMessage({ id: "contactUs_mail" })
    });
  }

  render() {
    const { title, account, mail } = this.state;
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          <div className={css.line} />
          <div className={css.tab}>
            {account.map((item, key) => (
              <p key={key}>{item}</p>
            ))}
            <img src={qrcode} alt="download" className={css.img} />
          </div>
          <div className={css.tab}>
            <p>
              UAVStack Organization
              <br />
              Beijing China
            </p>
            <a href="mailto:uavstacksupport@163.com" className={css.email}>
              {mail}
            </a>
          </div>
        </div>
        <p className={css.org}>© 2016-2018 UAVStack Organization</p>
      </div>
    );
  }
}

export default injectIntl(SupportPanel);
