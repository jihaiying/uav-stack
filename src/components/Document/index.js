import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header1 from "../shared/Header1";
import ContactUs from "../shared/ContactUs";
import css from "./assets/Document.css";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      help: [],
      document: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
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
      document: [
        {
          title: formatMessage({ id: "document_0_title" }),
          href: formatMessage({ id: "document_0_link" })
        },
        {
          title: formatMessage({ id: "document_12_title" }),
          href: formatMessage({ id: "document_12_link" })
        },
        {
          title: formatMessage({ id: "document_1_title" }),
          href: formatMessage({ id: "document_1_link" })
        },
        {
          title: formatMessage({ id: "document_2_title" }),
          href: formatMessage({ id: "document_2_link" })
        },
        {
          title: formatMessage({ id: "document_3_title" }),
          href: formatMessage({ id: "document_3_link" })
        },
        {
          title: formatMessage({ id: "document_4_title" }),
          href: formatMessage({ id: "document_4_link" })
        },
        {
          title: formatMessage({ id: "document_5_title" }),
          href: formatMessage({ id: "document_5_link" })
        },
        {
          title: formatMessage({ id: "document_14_title" }),
          href: formatMessage({ id: "document_14_link" })
        },
        {
          title: formatMessage({ id: "document_15_title" }),
          href: formatMessage({ id: "document_15_link" })
        },
        {
          title: formatMessage({ id: "document_16_title" }),
          href: formatMessage({ id: "document_16_link" })
        },
        {
          title: formatMessage({ id: "document_13_title" }),
          href: formatMessage({ id: "document_13_link" })
        },
        {
          title: formatMessage({ id: "document_6_title" }),
          href: formatMessage({ id: "document_6_link" })
        },
        {
          title: formatMessage({ id: "document_7_title" }),
          href: formatMessage({ id: "document_7_link" })
        },
        {
          title: formatMessage({ id: "document_8_title" }),
          href: formatMessage({ id: "document_8_link" })
        },
        {
          title: formatMessage({ id: "document_9_title" }),
          href: formatMessage({ id: "document_9_link" })
        },
        {
          title: formatMessage({ id: "document_10_title" }),
          href: formatMessage({ id: "document_10_link" })
        },
        {
          title: formatMessage({ id: "document_11_title" }),
          href: formatMessage({ id: "document_11_link" })
        }
      ]
    });
  }
  render() {
    window.scroll(0, 0);
    const { formatMessage } = this.props.intl;
    const { help, document } = this.state;
    return (
      <div>
        <Helmet>
          <title>
            {formatMessage({
              id: "document"
            })}
          </title>
        </Helmet>
        <Header1 />
        <div className={css.container}>
          <h1 className={css.head}>
            <FormattedMessage id="documentTab_help_title" />
          </h1>
          {help.map((item, key) => (
            <a href={item.link} target="_blank" key={key} className={css.tab}>
              {item.title}
            </a>
          ))}
          <h1 className={css.head}>
            <FormattedMessage id="documentTab_paper_title" />
          </h1>
          <div className={css.body}>
            {document.map((item, key) => (
              <a
                key={key}
                href={item.href}
                data={item}
                className={css.line}
                target="_blank"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <ContactUs />
      </div>
    );
  }
}

Document.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Document);
