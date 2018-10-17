import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "./assets/DocumentTab.css";
import downloadpic from "./assets/download.png";
import { FormattedMessage, injectIntl } from "react-intl";

class DocumentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      download: [],
      document: [],
      paper: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
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
      document: [
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
        }
      ],
      paper: [
        {
          title: formatMessage({ id: "document_6_title" }),
          link: formatMessage({ id: "document_6_link" })
        },
        {
          title: formatMessage({ id: "document_7_title" }),
          link: formatMessage({ id: "document_7_link" })
        },
        {
          title: formatMessage({ id: "document_8_title" }),
          link: formatMessage({ id: "document_8_link" })
        },
        {
          title: formatMessage({ id: "document_9_title" }),
          link: formatMessage({ id: "document_9_link" })
        },
        {
          title: formatMessage({ id: "document_10_title" }),
          link: formatMessage({ id: "document_10_link" })
        },
        {
          title: formatMessage({ id: "document_11_title" }),
          link: formatMessage({ id: "document_11_link" })
        }
      ]
    });
  }
  render() {
    const { download, document, paper } = this.state;

    var downloadhtml = (
      <div className={css.tab}>
        <span className={css.title}>
          <FormattedMessage id="download" />
        </span>
        <Link to={"/download"} className={css.right}>
          <FormattedMessage id="documentTab_more" /> >
        </Link>
        <div className={css.line} />
        <p className={css.title2}>
          <FormattedMessage id="documentTab_download_title2" />
        </p>
        {download.map((item, key) => (
          <a key={key} link={item.link} className={css.paper_line}>
            <img src={downloadpic} alt="download" className={css.img} />
            <p className={css.document_title}>{item.title}</p>
            <div className={css.document_tip}>{item.tip}</div>
            <div className={css.document_tip}>{item.tip2}</div>
          </a>
        ))}
      </div>
    );

    var documenthtml = (
      <div className={css.tab}>
        <span className={css.title}>
          <FormattedMessage id="documentTab_document_title" />
        </span>
        <Link to={"/document"} className={css.right}>
          <FormattedMessage id="documentTab_more" /> >
        </Link>
        <div className={css.line} />
        {document.map((item, key) => (
          <a key={key} href={item.link} className={css.paper_line}>
            <p className={css.documentTab_title}>{item.title}</p>
          </a>
        ))}
      </div>
    );

    var paperhtml = (
      <div className={css.tab}>
        <span className={css.title}>
          <FormattedMessage id="documentTab_paper_title" />
        </span>
        <Link to={"/document"} className={css.right}>
          <FormattedMessage id="documentTab_more" /> >
        </Link>
        <div className={css.line} />
        {paper.map((item, key) => (
          <a key={key} href={item.link} className={css.paper_line}>
            <p className={css.documentTab_title}>{"● " + item.title}</p>
          </a>
        ))}
      </div>
    );

    return (
      <div className={css.container}>
        <div className={css.content}>
          {downloadhtml}
          {documenthtml}
          {paperhtml}
        </div>
      </div>
    );
  }
}
export default injectIntl(DocumentTab);
