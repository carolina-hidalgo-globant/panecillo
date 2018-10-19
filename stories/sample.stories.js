import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BtnSample from '../src/atomic/atoms/btn';

storiesOf('Sample Button', module)
.add('Default state', () => (<button type="button">hola mundo</button>))
.add('Active state', () => (<button type="button" status="active">active mundo</button>));
