import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../shared/Header";
import ContactUs from "../shared/ContactUs";
import Banner from "./partial/Banner";
import AdvangtagePanel from "./partial/AdvantagePanel";
import IntroductionPanel from "./partial/IntroductionPanel";
import Outline from "./partial/Outline";
import DocumentTab from "./partial/DocumentTab";
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
        <Banner />
        <AdvangtagePanel />
        <IntroductionPanel />
        <Outline />
        <DocumentTab />
        <ContactUs />
      </div>
    );
  }
}

Product.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Product);
