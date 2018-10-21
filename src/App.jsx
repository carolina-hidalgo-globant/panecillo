import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducers';
import styles from './panecillo.scss';
import MainMenu from './components/molecules/main_menu';

const store = createStore(reducer);

class App extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <Provider store={store}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <MainMenu />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
