import { hot } from 'react-hot-loader/root'
import * as React from 'react';
import styles from './header.scss';
import stylesCss from './header.css';


function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.example}>Hello React</h1>
      <p className={stylesCss.some}>
        Hello React
      </p>
    </header>
  )
}

export const Header = hot(HeaderComponent);
