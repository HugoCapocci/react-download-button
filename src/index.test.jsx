// @flow
/* global expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import DownloadButton from './index';

const props = {
  storagePath: 'fakePath',
  onClick: jest.fn(),
};

describe('tests for <DownloadButton> container', () => {
  it('should renders one <span /> component', () => {
    const component = shallow(<DownloadButton {...props}><span>hello</span></DownloadButton>);
    expect(component.find('button').length).toEqual(0);
  });

  it('should renders without <span /> component', () => {
    const component = shallow(<DownloadButton {...props}/>);
    expect(component.find('button').length).toEqual(1);
  });
});
