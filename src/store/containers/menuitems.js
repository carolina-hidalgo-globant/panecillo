import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMenuItem } from '../actions/index';
import { bindActionCreators } from 'redux';

class MenuItems extends Component {
  renderList() {
    return this.props.menuItems.map((item) => {
      return(
        <li key={item.menu_id} className="list-group-item">
        <img src={item.image_url} alt="Menu" />
        {item.menu_name}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // returs will be show as props inside of the component
  return {
    menuItems: state.menuItems
  };
}

//the return will end as props in the booklist container
// makes it available in the container
function mapDispatchToProps(dispatch) {
  // whenever selectbook is called is passed to all the reducers
  return bindActionCreators({ selectMenuItem: selectMenuItem}, dispatch);
}
//glue btween redux and react
// booklist from component to container that needs to know about the dispatch
// making it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);