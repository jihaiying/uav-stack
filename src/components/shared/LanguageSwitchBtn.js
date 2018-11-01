import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as languageActionCreator from "../../actions/language";
import { LANGUAGES } from "../../config/enum";
import Menu from "antd/lib/menu";
import "antd/lib/menu/style";
import Dropdown from "antd/lib/dropdown";
import "antd/lib/dropdown/style";
import Icon from "antd/lib/icon";
import "antd/lib/icon/style";
function mapStateToProps(state) {
  return {
    lang: state.languageReducer.get("lang")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        switchLanguage: languageActionCreator.switchLanguage
      },
      dispatch
    )
  };
}

class Index extends Component {
  render() {
    const { lang, actions } = this.props;
    const menu = (
      <Menu>
        <Menu.Item onClick={actions.switchLanguage}>
          {lang === LANGUAGES.en ? "中文" : "English"}
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <p className="ant-dropdown-link">
          {lang === LANGUAGES.en ? "English" : "中文"} <Icon type="down" />
        </p>
      </Dropdown>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
