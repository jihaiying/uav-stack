import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../shared/Header";
import ContactUs from "../shared/ContactUs";
import AdvangtagePanel from "./partial/AdvantagePanel";
import Outline from "./partial/Outline";
import { injectIntl, intlShape } from "react-intl";

class Product extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet>
          <title>
            {formatMessage({
              id: "product"
            })}
          </title>
        </Helmet>
        <Header />
        <AdvangtagePanel />
        <Outline />
        <ContactUs />
      </div>
    );
  }
}

Product.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Product);
