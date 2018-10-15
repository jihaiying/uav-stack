import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../shared/Header";
import ContactUs from "../shared/ContactUs";
import css from "./assets/Download.css";
import { FormattedMessage, injectIntl, intlShape } from "react-intl";

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { formatMessage } = this.props.intl;
    this.setState({
      data: []
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
              id: "download"
            })}
          </title>
        </Helmet>
        <Header />
        <ContactUs />
        <FormattedMessage id="downloadPage" />
      </div>
    );
  }
}

Download.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Download);
