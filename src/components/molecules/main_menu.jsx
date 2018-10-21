import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions';

class MainMenu extends Component {
  static propTypes = {
    mainMenuItems: PropTypes.object.isRequired,
  };

  componentDidMount() {
    //
  }

  renderFunc({ mainMenuItems } = this.props) {
    mainMenuItems.payload.then((response) => {
      console.log(response);
    });
    return (<i>ssss</i>);
  }

  render() {
    return (
      <div className="list-group col-sm-4">
        {this.renderFunc()}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  mainMenuItems: state.mainMenuItems,
});

const mapDispatchToProps = dispatch => ({
  mainMenuItems: dispatch(actions.fetchMainMenuItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
