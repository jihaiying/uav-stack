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
          title: formatMessage({ id: "document_download_line_1_title" }),
          tip: formatMessage({ id: "document_download_line_1_tip" }),
          link: formatMessage({ id: "document_download_line_1_link" })
        },
        {
          title: formatMessage({ id: "document_download_line_2_title" }),
          tip: formatMessage({ id: "document_download_line_2_tip" }),
          link: formatMessage({ id: "document_download_line_2_link" })
        },
        {
          title: formatMessage({ id: "document_download_line_3_title" }),
          tip: formatMessage({ id: "document_download_line_3_tip" }),
          link: formatMessage({ id: "document_download_line_3_link" })
        },
        {
          title: formatMessage({ id: "document_download_line_4_title" }),
          tip: formatMessage({ id: "document_download_line_4_tip" }),
          link: formatMessage({ id: "document_download_line_4_link" })
        }
      ],
      document: [
        {
          title: formatMessage({ id: "document_document_line1_title" }),
          time: formatMessage({ id: "document_document_line1_time" }),
          link: formatMessage({ id: "document_document_line1_link" })
        },
        {
          title: formatMessage({ id: "document_document_line1_title" }),
          time: formatMessage({ id: "document_document_line1_time" }),
          link: formatMessage({ id: "document_document_line1_link" })
        }
      ],
      paper: [
        {
          title: formatMessage({ id: "document_paper_line1_title" }),
          link: formatMessage({ id: "document_paper_line1_link" })
        },
        {
          title: formatMessage({ id: "document_paper_line1_title" }),
          link: formatMessage({ id: "document_paper_line1_link" })
        }
      ]
    });
  }
  render() {
    const { download, document, paper } = this.state;

    var downloadhtml = (
      <div className={css.tab}>
        <span className={css.title}>
          <FormattedMessage id="document_download_title" />
        </span>
        <Link to={"/download"} className={css.right}>
          <FormattedMessage id="document_more" /> >
        </Link>
        <div className={css.line} />
        <p className={css.title2}>
          <FormattedMessage id="document_download_title2" />
        </p>
        {download.map((item, key) => (
          <a key={key} href={item.link} className={css.download_line}>
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
          <FormattedMessage id="document_document_title" />
        </span>
        <Link to={"/download"} className={css.right}>
          <FormattedMessage id="document_more" /> >
        </Link>
        <div className={css.line} />
        {document.map((item, key) => (
          <a key={key} href={item.link} className={css.document_line}>
            <p className={css.time}>{item.time}</p>
            <p className={css.document_title}>{item.title}</p>
          </a>
        ))}
      </div>
    );

    var paperhtml = (
      <div className={css.tab}>
        <span className={css.title}>
          <FormattedMessage id="document_paper_title" />
        </span>
        <Link to={"/download"} className={css.right}>
          <FormattedMessage id="document_more" /> >
        </Link>
        <div className={css.line} />
        {paper.map((item, key) => (
          <a key={key} href={item.link} className={css.paper_line}>
            <p className={css.document_title}>{"● " + item.title}</p>
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
