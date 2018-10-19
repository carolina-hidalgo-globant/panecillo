import React, { Component } from 'react';
import { bindActionCreators, connect } from 'react-redux';
import { selectMenuItem } from '../actions';

class MainMenuItems extends Component {
  renderList({ menuItems }) {
    return this.menuItems.map((item) => (
      return (
        <li key={item.menu_id}>
          <img src={item.image_url} alt="Menu" />
          {item.menu_name}
        </li>
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
    menuItems: state.main_menu_items,
  };
}

// the return will end as props in the booklist container
// makes it available in the container
function mapDispatchToProps(dispatch) {
  // whenever selectbook is called is passed to all the reducers
  return bindActionCreators({ selectMenuItem }, dispatch);
}
// booklist from component to container that needs to know about the dispatch
// making it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(MainMenuItems)
