import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "./assets/DocumentTab.css";
import downloadpic from "./assets/download.png";
import { FormattedMessage, injectIntl } from "react-intl";

class DocumentTab extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    const { download, help, paper } = {
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
      ],
      help: [
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
      ],
      paper: [
        {
          title: formatMessage({ id: "document_12_title" }),
          link: formatMessage({ id: "document_12_link" })
        },
        {
          title: formatMessage({ id: "document_1_title" }),
          link: formatMessage({ id: "document_1_link" })
        },
        {
          title: formatMessage({ id: "document_2_title" }),
          link: formatMessage({ id: "document_2_link" })
        },
        {
          title: formatMessage({ id: "document_3_title" }),
          link: formatMessage({ id: "document_3_link" })
        },
        {
          title: formatMessage({ id: "document_4_title" }),
          link: formatMessage({ id: "document_4_link" })
        },
        {
          title: formatMessage({ id: "document_5_title" }),
          link: formatMessage({ id: "document_5_link" })
        },
        {
          title: formatMessage({ id: "document_6_title" }),
          link: formatMessage({ id: "document_6_link" })
        }
      ]
    };

    var downloadhtml = (
      <div className={css.tab}>
        <h1 className={css.title}>
          <FormattedMessage id="download" />
        </h1>
        <Link to={"/download"} className={css.right}>
          <FormattedMessage id="documentTab_more" /> >
        </Link>
        <div className={css.line} />
        <h2 className={css.title2}>
          <FormattedMessage id="documentTab_download_title2" />
        </h2>
        {download.map((item, key) => (
          <div className={css.document_line} key={key}>
            <a href={item.link} target="_blank">
              <img
                src={downloadpic}
                alt="download"
                className={css.img}
                target="_blank"
              />
              <div className={css.download_title}>{item.title}</div>
              <div className={css.document_tip}>{item.tip}</div>
              <div className={css.document_tip}>{item.tip2}</div>
            </a>
          </div>
        ))}
      </div>
    );

    var helphtml = (
      <div className={css.tab}>
        <h1 className={css.title}>
          <FormattedMessage id="documentTab_help_title" />
        </h1>
        <Link to={"/document"} className={css.right}>
          <FormattedMessage id="documentTab_more" /> >
        </Link>
        <div className={css.line} />
        {help.map((item, key) => (
          <a
            key={key}
            target="_blank"
            href={item.link}
            className={css.paper_line}
          >
            <div className={css.help_title}>{item.title}</div>
          </a>
        ))}
      </div>
    );

    var paperhtml = (
      <div className={css.tab}>
        <h1 className={css.title}>
          <FormattedMessage id="documentTab_paper_title" />
        </h1>
        <Link to={"/document"} className={css.right}>
          <FormattedMessage id="documentTab_more" /> >
        </Link>
        <div className={css.line} />
        {paper.map((item, key) => (
          <a
            key={key}
            target="_blank"
            href={item.link}
            className={css.paper_line}
          >
            <p className={css.document_title}>{"● " + item.title}</p>
          </a>
        ))}
      </div>
    );

    return (
      <div className={css.container}>
        <div className={css.content}>
          {downloadhtml}
          {helphtml}
          {paperhtml}
        </div>
      </div>
    );
  }
}
export default injectIntl(DocumentTab);
