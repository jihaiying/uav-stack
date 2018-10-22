import React, { Component } from "react";
import css from "./assets/Dialog.css";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";
import { Modal } from "antd";

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = {
      visible: false,
      popup_os: []
    };
  }
  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
      visible: false,
      popup_href: formatMessage({ id: "popup_link" }),
      popup_os: [
        {
          title: formatMessage({ id: "popup_windows" }),
          link: formatMessage({ id: "popup_windows_link" })
        },
        {
          title: formatMessage({ id: "popup_mac" }),
          link: formatMessage({ id: "popup_mac_link" })
        },
        {
          title: formatMessage({ id: "popup_linux" }),
          link: formatMessage({ id: "popup_linux_link" })
        }
      ]
    });
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { popup_href, popup_os } = this.state;
    return (
      <div>
        <a className={css.button} onClick={this.showModal}>
          <FormattedMessage id="popup_title" />
        </a>
        <Modal
          visible={this.state.visible}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={800}
        >
          <div className={css.pad}>
            <h1 className={css.head}>
              <FormattedMessage id="popup_title" />
            </h1>
            <h2 className={css.head2}>
              <FormattedMessage id="popup_title2" />
            </h2>
            <div>
              <FormattedMessage id="popup_tip" />
            </div>
            <div>
              <FormattedMessage id="popup_tip2" />
            </div>
            <div>
              <FormattedMessage id="popup_tip3" />
              <a target="_blank" href={popup_href}>
                <FormattedMessage id="popup_tip_link" />
              </a>
            </div>
          </div>
          <div className={css.pad2}>
            {popup_os.map((item, key) => (
              <a
                key={key}
                href={item.link}
                target="_blank"
                className={css.email}
              >
                {item.title}
              </a>
            ))}
          </div>
        </Modal>
      </div>
    );
  }
}

Dialog.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(Dialog);
