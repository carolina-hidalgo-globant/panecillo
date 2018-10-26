import React from 'react';

import { shallow, configure } from 'enzyme';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Adapter from 'enzyme-adapter-react-16';

import HeadlinesAtm from '..';

chai.use(sinonChai);

configure({ adapter: new Adapter() });

describe('Headlines TESTING', () => {
  let wrapper;
  let textHeadline = 'Carolina Test';

  it('Component renders correctly', () => {
    wrapper = shallow(<HeadlinesAtm type={3}>{textHeadline}</HeadlinesAtm>);
    expect(wrapper.find('h3').text()).equal(textHeadline);
  });

  it('If type is incorrect', () => {
    wrapper = shallow(<HeadlinesAtm type={8}>{textHeadline}</HeadlinesAtm>);
    expect(wrapper.find('h1').text()).equal(textHeadline);
  });

  it('If children type is incorrect', () => {
    textHeadline = 222;
    wrapper = shallow(<HeadlinesAtm type={8}>{textHeadline}</HeadlinesAtm>);
    expect(wrapper.find('h1').text()).equal(textHeadline);
  });
});
