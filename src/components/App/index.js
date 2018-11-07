import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Download from "../Download";
import Document from "../Document";
import NoMatch from "../NoMatch";
import Home from "../Home";
import Product from "../Product";
import { runFitPage } from "../../lib/fitPage";
import * as globalActions from "../../actions/global";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    runFitPage(width => actions.updateDimension({ width }));
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/product" component={Product} />
          <Route path="/document" component={Document} />
          <Route path="/download" component={Download} />
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateDimension: globalActions.updateDimension
      },
      dispatch
    )
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
