import React, { Component } from "react";
import css from "./assets/UpdateTab.css";
import { FormattedMessage, injectIntl } from "react-intl";

class UpdateTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: [],
      fix: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
      href: formatMessage({ id: "updateTab_update_href" }),
      update: [
        formatMessage({ id: "updateTab_update_tip_1" }),
        formatMessage({ id: "updateTab_update_tip_2" })
      ],
      fix: [
        formatMessage({ id: "updateTab_fix_tip_1" }),
        formatMessage({ id: "updateTab_fix_tip_2" })
      ]
    });
  }
  render() {
    const { href, update, fix } = this.state;
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.tab}>
            <p>
              {" "}
              <FormattedMessage id="updateTab_update_title" />
            </p>
            <a href={href}>{href}</a>
            {update.map((item, key) => (
              <p key={key}>{item}</p>
            ))}
          </div>
          <div className={css.tab}>
            <p>
              {" "}
              <FormattedMessage id="updateTab_fix_title" />
            </p>
            {fix.map((item, key) => (
              <p key={key}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(UpdateTab);
