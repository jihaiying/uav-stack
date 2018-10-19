import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../shared/ContactUs";
import Head from "./partial/Head";
import ScrollBar from "./partial/ScrollBar";
import AdvangtagePanel from "./partial/AdvantagePanel";
import IntroductionPanel from "./partial/IntroductionPanel";
import Outline from "./partial/Outline";
import DocumentTab from "./partial/DocumentTab";
import { injectIntl, intlShape } from "react-intl";

class Product extends Component {
  render() {
    window.scroll(0, 0);
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
        <Head />
        <ScrollBar />
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
