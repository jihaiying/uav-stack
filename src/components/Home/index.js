import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { injectIntl, intlShape } from "react-intl";
import Banner from "./partial/Banner";
import Head from "./partial/Head";
import UpdateTab from "./partial/UpdateTab";
import ProductPanel from "./partial/ProductPanel";
import Outline from "./partial/Outline";
import DocumentTab from "./partial/DocumentTab";
import SupportPanel from "./partial/SupportPanel";
import JoinUs from "./partial/JoinUs";
import Contributor from "./partial/Contributor";
import ContactUs from "../shared/ContactUs";
import Cursor from "../shared/Cursor";
import Menu from "../shared/MobileHeader";
import "antd/dist/antd.css";

class Home extends Component {
  render() {
    window.scroll(0, 0);
    const { formatMessage } = this.props.intl;
    return (
      <div>
        <Helmet
          title={formatMessage({
            id: "home"
          })}
        />
        <Menu />
        <Head />
        <Cursor />
        <Banner />
        <UpdateTab />
        <ProductPanel />
        <Outline />
        <SupportPanel />
        <DocumentTab />
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
