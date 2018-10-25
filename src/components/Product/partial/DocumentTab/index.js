import React, { Component } from "react";
import css from "./assets/DocumentTab.css";
import { injectIntl } from "react-intl";

class DocumentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
      data: [
        {
          title: formatMessage({ id: "product_help_1_tip" }),
          link: formatMessage({ id: "product_help_1_link" })
        },
        {
          title: formatMessage({ id: "product_help_2_tip" }),
          link: formatMessage({ id: "product_help_2_link" })
        },
        {
          title: formatMessage({ id: "product_help_3_tip" }),
          link: formatMessage({ id: "product_help_3_link" })
        }
      ]
    });
  }
  render() {
    const { formatMessage } = this.props.intl;
    const { data } = this.state;
    return (
      <div className={css.container}>
        <div
          id={formatMessage({ id: "product_help_title" })}
          className={css.anchor}
        />
        <div className={css.title}>
          {formatMessage({ id: "product_help_title" })}
        </div>
        {data.map((item, key) => (
          <a href={item.link} target="_blank" key={key} className={css.tab}>
            {item.title}
          </a>
        ))}
      </div>
    );
  }
}
export default injectIntl(DocumentTab);
