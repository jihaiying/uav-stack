import React, { Component } from "react";
import { Helmet } from "react-helmet";
import ContactUs from "../shared/ContactUs";
import DocumentTab from "./partial/DocumentTab";
import Head from "./partial/Head";
import ScrollBar from "./partial/ScrollBar";
import AdvangtagePanel from "./partial/AdvantagePanel";
import IntroductionPanel from "./partial/IntroductionPanel";
import Outline from "./partial/Outline";
import MobileHeader from "../shared/MobileHeader";

import { injectIntl, intlShape } from "react-intl";

class Product extends Component {
  render() {
    window.scroll(0, 0);
    const { formatMessage } = this.props.intl;
    const { head } = {
      head: [
        formatMessage({ id: "product_advangtage_title" }),
        formatMessage({ id: "product_introductPanel_title" }),
        formatMessage({ id: "product_outline_title" }),
        formatMessage({ id: "product_help_title" })
      ]
    };
    return (
      <div>
        <Helmet>
          <title>
            {formatMessage({
              id: "product"
            })}
          </title>
        </Helmet>
        <MobileHeader />
        <Head />
        <ScrollBar data={head} />
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
