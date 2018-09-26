import React, { Component } from "react";
import { Link } from "react-router-dom";
import css from "./assets/Document.css";
import downloadpic from "./assets/download.png";
import { FormattedMessage, injectIntl } from "react-intl";

class Document extends Component {
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
          title: formatMessage({ id: "documentTab_download_line1_title" }),
          tip: formatMessage({ id: "documentTab_download_line1_tip" }),
          link: formatMessage({ id: "documentTab_download_line1_link" })
        },
        {
          title: formatMessage({ id: "documentTab_download_line1_title" }),
          tip: formatMessage({ id: "documentTab_download_line1_tip" }),
          link: formatMessage({ id: "documentTab_download_line1_link" })
        }
      ],
      document: [
        {
          title: formatMessage({ id: "documentTab_document_line1_title" }),
          time: formatMessage({ id: "documentTab_document_line1_time" }),
          link: formatMessage({ id: "documentTab_document_line1_link" })
        },
        {
          title: formatMessage({ id: "documentTab_document_line1_title" }),
          time: formatMessage({ id: "documentTab_document_line1_time" }),
          link: formatMessage({ id: "documentTab_document_line1_link" })
        }
      ],
      paper: [
        {
          title: formatMessage({ id: "documentTab_paper_line1_title" }),
          link: formatMessage({ id: "documentTab_paper_line1_link" })
        },
        {
          title: formatMessage({ id: "documentTab_paper_line1_title" }),
          link: formatMessage({ id: "documentTab_paper_line1_link" })
        }
      ]
    });
  }
  render() {
    const { download, document, paper } = this.state;

    var downloadhtml = (
      <div className={css.tab}>
        <span className={css.title}>
          <FormattedMessage id="documentTab_download_title" />
        </span>
        <Link to={"/download"} className={css.right}>
          <FormattedMessage id="documentTab_more" /> >
        </Link>
        <div className={css.line} />
        <p className={css.title2}>
          <FormattedMessage id="documentTab_download_title2" />
        </p>
        {download.map((item, key) => (
          <a key={key} href={item.link} className={css.download_link}>
            <img src={downloadpic} alt="download" className={css.img} />
            <p className={css.document_title}>{item.title}</p>
            <p className={css.document_tip}>{item.tip}</p>
          </a>
        ))}
      </div>
    );

    var documenthtml = (
      <div className={css.tab}>
        <span className={css.title}>
          <FormattedMessage id="documentTab_document_title" />
        </span>
        <Link to={"/download"} className={css.right}>
          <FormattedMessage id="documentTab_more" /> >
        </Link>
        <div className={css.line} />
        {document.map((item, key) => (
          <a key={key} href={item.link} className={css.document_link}>
            <p className={css.time}>{item.time}</p>
            <p className={css.document_title}>{item.title}</p>
          </a>
        ))}
      </div>
    );

    var paperhtml = (
      <div className={css.tab}>
        <span className={css.title}>
          <FormattedMessage id="documentTab_paper_title" />
        </span>
        <Link to={"/download"} className={css.right}>
          <FormattedMessage id="documentTab_more" /> >
        </Link>
        <div className={css.line} />
        {paper.map((item, key) => (
          <a key={key} href={item.link} className={css.paper_link}>
            <ul className={css.document_title}>{item.title}</ul>
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

export default injectIntl(Document);
