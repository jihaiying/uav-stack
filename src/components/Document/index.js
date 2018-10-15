import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../shared/Header";
import ContactUs from "../shared/ContactUs";
import css from "./assets/Document.css";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

class Document extends Component {
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
          title: formatMessage({ id: "document_1_title" }),
          href: formatMessage({ id: "document_1_href" })
        },
        {
          title: formatMessage({ id: "document_2_title" }),
          href: formatMessage({ id: "document_2_href" })
        },
        {
          title: formatMessage({ id: "document_3_title" }),
          href: formatMessage({ id: "document_3_href" })
        },
        {
          title: formatMessage({ id: "document_4_title" }),
          href: formatMessage({ id: "document_4_href" })
        },
        {
          title: formatMessage({ id: "document_5_title" }),
          href: formatMessage({ id: "document_5_href" })
        },
        {
          title: formatMessage({ id: "document_6_title" }),
          href: formatMessage({ id: "document_6_href" })
        },
        {
          title: formatMessage({ id: "document_7_title" }),
          href: formatMessage({ id: "document_7_href" })
        },
        {
          title: formatMessage({ id: "document_8_title" }),
          href: formatMessage({ id: "document_8_href" })
        },
        {
          title: formatMessage({ id: "document_9_title" }),
          href: formatMessage({ id: "document_9_href" })
        },
        {
          title: formatMessage({ id: "document_10_title" }),
          href: formatMessage({ id: "document_10_href" })
        },
        {
          title: formatMessage({ id: "document_11_title" }),
          href: formatMessage({ id: "document_11_href" })
        }
      ]
    });
  }
  render() {
    const { formatMessage } = this.props.intl;
    const { data } = this.state;
    return (
      <div>
        <Helmet>
          <title>
            {formatMessage({
              id: "document"
            })}
          </title>
        </Helmet>
        <Header />
        <div className={css.container}>
          <h1 className={css.head}>
            <FormattedMessage id="document_head" />
          </h1>
          <div className={css.body}>
            {data.map((item, key) => (
              <a key={key} href={item.href} data={item} className={css.line}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <ContactUs />
        <FormattedMessage id="downloadPage" />
      </div>
    );
  }
}

Document.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Document);
