import React, { Component } from "react";
import css from "./assets/UpdateTab.css";
import { FormattedMessage, injectIntl } from "react-intl";

class UpdateTab extends Component {
  render() {
    const updateData = window.updateData;
    const fix = updateData.fix ? (
      <div className={css.tab}>
        <div>
          <FormattedMessage id="updateTab_fix_title" />
        </div>
        {updateData.fix.map((item, key) => (
          <div key={key}>{item}</div>
        ))}
      </div>
    ) : (
      <div className={css.tab} />
    );
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.tab}>
            <div>
              <FormattedMessage id="updateTab_update_title" />
            </div>
            <a href={updateData.href} target="_blank">
              {updateData.href}
            </a>
            {updateData.update.map((item, key) => (
              <div key={key}>{item}</div>
            ))}
          </div>
          {fix}
        </div>
      </div>
    );
  }
}

export default injectIntl(UpdateTab);
