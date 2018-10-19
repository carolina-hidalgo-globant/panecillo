import React, { Component } from 'react';
import styles from './panecillo.scss';
import MainMenu from './atomic/molecules/main_menu';

class App extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <MainMenu/>
        </header>
      </div>
    );
  }
}

export default App;
