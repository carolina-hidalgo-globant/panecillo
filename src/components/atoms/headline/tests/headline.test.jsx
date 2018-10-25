import React from 'react';

import { mount, configure } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Adapter from 'enzyme-adapter-react-16';

import HeadlinesAtm from '../index';


chai.use(sinonChai);

configure({ adapter: new Adapter() });

describe.only('Test for Headlines', () => {
  let wrapper;
  let textHeadline;

  beforeEach(() => {
    textHeadline = 'Carolina Test';
    wrapper = mount(<HeadlinesAtm props={{ children: textHeadline }} type={2} />);
    console.log(' ----shallow');
    console.log(wrapper);
  });

  it('renders correctly', () => {
    expect(wrapper.find('h2').children()).to.be.equal({});
  });
});
