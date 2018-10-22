import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderOrg from '../../organisms/header';
import * as Actions from '../../../store/actions';

const ROOT_URL = 'https://nr3zj.mocklab.io/recommended';


class LandingContainer extends Component {
  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = () => {
    const { actions } = this.props;
    axios.get(`${ROOT_URL}/season`)
      .then(mainItems => actions.mainMenuItems.fetchMainMenuItems(mainItems.data.data))
      .catch(e => console.error(e));

    axios.get(`${ROOT_URL}/others`)
      .then(otherItems => actions.otherMenuItems.fetchOtherMenuItems(otherItems.data.data))
      .catch(e => console.error(e));
  }

  render() {
    const { menuItemsReducer: { mainMenuItems, otherMenuItems } } = this.props;
    return (<><HeaderOrg mainItems={mainMenuItems} otherItems={otherMenuItems} /></>);
  }
}

LandingContainer.propTypes = {
  actions: PropTypes.any.isRequired,
  menuItemsReducer: PropTypes.shape({
    mainMenuItems: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
  actions: {
    mainMenuItems: bindActionCreators(Actions, dispatch),
    otherMenuItems: bindActionCreators(Actions, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingContainer);
