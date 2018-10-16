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
            <div>
              <FormattedMessage id="updateTab_update_title" />
            </div>
            <a href={href}>{href}</a>
            {update.map((item, key) => (
              <div key={key}>{item}</div>
            ))}
          </div>
          <div className={css.tab}>
            <div>
              <FormattedMessage id="updateTab_fix_title" />
            </div>
            {fix.map((item, key) => (
              <div key={key}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(UpdateTab);
