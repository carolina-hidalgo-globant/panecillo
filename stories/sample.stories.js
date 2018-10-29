import React from 'react';

import { storiesOf } from '@storybook/react';

import HeaderOrg from '../src/components/organisms/header';

import '../src/scss/style.scss';

import styles from '../src/scss/organisms/header.scss';


export const mainMenuItems = [
    {
      "menu_id":"f895ee99-b1e2-43bb-8eb7-da1cc5dc4360",
      "menu_name":"New & Notable",
      "image_url":"https://d3vfpr1jrz597r.cloudfront.net/web/images/collection-icons/just-because.png"
    }
];

export const otherMenuItems = [
  {
    "menu_id":"f895ee99-b1e2-43bb-8eb7-da1cc5dc4360",
    "menu_name":"New & Notable",
    "image_url":"https://d3vfpr1jrz597r.cloudfront.net/web/images/collection-icons/just-because.png"
  }
];


storiesOf('HeaderOrg', module)
  .add('Default state', () => (<HeaderOrg styles={styles} mainItems={mainMenuItems} otherItems={otherMenuItems} />))
