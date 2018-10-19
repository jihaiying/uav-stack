import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header1 from "../shared/Header1";
import ContactUs from "../shared/ContactUs";
import css from "./assets/Download.css";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup_os: [],
      download: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
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
      ],

      download: [
        {
          title: formatMessage({ id: "documentTab_download_line_1_title" }),
          tip: formatMessage({ id: "documentTab_download_line_1_tip" }),
          link: formatMessage({ id: "documentTab_download_line_1_link" })
        },
        {
          title: formatMessage({ id: "documentTab_download_line_2_title" }),
          tip: formatMessage({ id: "documentTab_download_line_2_tip" }),
          link: formatMessage({ id: "documentTab_download_line_2_link" })
        },
        {
          title: formatMessage({ id: "documentTab_download_line_3_title" }),
          tip: formatMessage({ id: "documentTab_download_line_3_tip" }),
          link: formatMessage({ id: "documentTab_download_line_3_link" })
        },
        {
          title: formatMessage({ id: "documentTab_download_line_4_title" }),
          tip: formatMessage({ id: "documentTab_download_line_4_tip" }),
          tip2: formatMessage({ id: "documentTab_download_line_4_tip2" }),
          link: formatMessage({ id: "documentTab_download_line_4_link" })
        }
      ]
    });
  }
  render() {
    window.scroll(0, 0);
    const { formatMessage } = this.props.intl;
    const { popup_href, popup_os, download } = this.state;
    return (
      <div>
        <Helmet>
          <title>
            {formatMessage({
              id: "download"
            })}
          </title>
        </Helmet>
        <Header1 />
        <div className={css.container}>
          <div className={css.content}>
            <h1 className={css.head}>
              <FormattedMessage id="download_head" />
            </h1>
            <div className={css.body}>
              <h2 className={css.head2}>
                <FormattedMessage id="popup_title2" />
              </h2>
              <p>
                <FormattedMessage id="popup_tip" />
                <FormattedMessage id="popup_tip2" />
                <FormattedMessage id="popup_tip3" />
                <a href={popup_href}>
                  <FormattedMessage id="popup_tip_link" />
                </a>
              </p>
              {popup_os.map((item, key) => (
                <div key={key} className={css.pad}>
                  <div className={css.head2}>{item.title}</div>
                  <a href={item.link} className={css.email}>
                    <FormattedMessage id="download" />
                  </a>
                </div>
              ))}
            </div>
            <h1 className={css.head}>
              <FormattedMessage id="documentTab_download_title2" />
            </h1>
            <div className={css.body}>
              {download.map((item, key) => (
                <div key={key} className={css.pad2}>
                  <div className={css.head2}>{item.title}</div>
                  <div className={css.tip}>
                    <div>{item.tip}</div>
                    <div>{item.tip2}</div>
                  </div>
                  <a href={item.link} className={css.email}>
                    <FormattedMessage id="download" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactUs />
      </div>
    );
  }
}

Download.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Download);
