import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './panecillo.scss';
import BtnSample from './atomic/atoms/btn';

class App extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className={styles.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <BtnSample>hola</BtnSample>
        </header>
      </div>
    );
  }
}

export default App;
