import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header1 from "../shared/Header1";
import ContactUs from "../shared/ContactUs";
import css from "./assets/Download.css";

import { FormattedMessage, injectIntl, intlShape } from "react-intl";

class Download extends Component {
  render() {
    window.scroll(0, 0);
    const { formatMessage } = this.props.intl;
    const { popup_href, join, popup_os, download } = {
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

      join: {
        title: formatMessage({ id: "JoinUs_title" }),
        tip: formatMessage({ id: "JoinUS_tip" }),
        manual: formatMessage({ id: "JoinUs_manual" }),
        manual_link: formatMessage({ id: "JoinUs_manual_link" }),
        download: formatMessage({ id: "JoinUs_download" }),
        download_link: formatMessage({ id: "JoinUs_download_link" })
      },

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
    };

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
            <div className={css.head}>
              <FormattedMessage id="download_head" />
            </div>
            <div className={css.body}>
              <div className={css.head2}>
                <FormattedMessage id="popup_title2" />
              </div>
              <div className={css.tip}>
                <FormattedMessage id="popup_tip" />
                <FormattedMessage id="popup_tip2" />
                <FormattedMessage id="popup_tip3" />
                <a className={css.link} href={popup_href} target="_blank">
                  <FormattedMessage id="popup_tip_link" />
                </a>
              </div>
              {popup_os.map((item, key) => (
                <div key={key} className={css.pad}>
                  <div className={css.head3}>{item.title}</div>
                  <a
                    type="primary"
                    href={item.link}
                    className={css.email}
                    target="_blank"
                  >
                    <FormattedMessage id="download" />
                  </a>
                </div>
              ))}
            </div>

            <div className={css.head}>
              <FormattedMessage id="documentTab_download_title2" />
            </div>
            {download.map((item, key) => (
              <div key={key} className={css.pad2}>
                <div className={css.head3}>{item.title}</div>
                <div className={css.tip2}>
                  <div>{item.tip}</div>
                  <div>{item.tip2}</div>
                </div>
                <a
                  type="primary"
                  href={item.link}
                  className={css.email}
                  target="_blank"
                >
                  <FormattedMessage id="download" />
                </a>
              </div>
            ))}
          </div>
          <div className={css.tip4} />
          <div className={css.head}>{join.title}</div>
          <div className={css.body}>
            <div className={css.head2}>{join.tip}</div>
            <div className={css.tip3} />
            <div className={css.pad}>
              <div className={css.head3}>{join.manual}</div>
              <a
                type="primary"
                href={join.manual_link}
                className={css.email}
                target="_blank"
              >
                <FormattedMessage id="download" />
              </a>
            </div>
            <div className={css.pad}>
              <div className={css.head3}>{join.download}</div>
              <a
                type="primary"
                href={join.download_link}
                className={css.email}
                target="_blank"
              >
                <FormattedMessage id="download" />
              </a>
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
