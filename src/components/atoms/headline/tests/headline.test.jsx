import React from 'react';

import { shallow, configure } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Adapter from 'enzyme-adapter-react-16';

import HeadlinesAtm from '../';
import styles from '../../../../scss/atoms/headline.scss';

chai.use(sinonChai);

configure({ adapter: new Adapter() });

describe.only('Test for Headlines', () => {
  let wrapper;
  let textHeadline;

  it('renders correctly', () => {
    textHeadline = 'Carolina Test';
    wrapper = shallow(<HeadlinesAtm type={2}>{textHeadline}</HeadlinesAtm>);
    expect(wrapper.find('h2').text()).equal(textHeadline);
  });
});
