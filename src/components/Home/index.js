import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import Banner from "./partial/Banner";
import Header from "../shared/Header";
import UpdateTab from "./partial/UpdateTab";
import ProductPanel from "./partial/ProductPanel";
import Outline from "./partial/Outline";
import Document from "./partial/Document";
import SupportPanel from "./partial/SupportPanel";
import JoinUs from "./partial/JoinUs";
import Contributor from "./partial/Contributor";
import ContactUs from "./partial/ContactUs";
class Home extends Component {
  render() {
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet
          title={formatMessage({
            id: "home"
          })}
        />
        <Header />
        <Banner />
        <UpdateTab />
        <ProductPanel />
        <Outline />
        <SupportPanel />
        <Document />
        <JoinUs />
        <Contributor />
        <ContactUs />
      </div>
    );
  }
}

Home.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Home);
