// @flow
/* global expect, jest */

import React from 'react';
import { render, shallow } from 'enzyme';
import DownloadButton from './index';

import createFileContent from './create-file-content';
jest.mock('./create-file-content');
createFileContent.mockImplementation(() => 'fakeHref');

const defaultProps = {
  onClick: jest.fn(),
  downloadData: {},
};

describe('tests for <DownloadButton> container', () => {
  it('should renders one child component', () => {
    const component = shallow(<DownloadButton {...defaultProps}><span>hello</span></DownloadButton>);
    expect(component.find('button').length).toEqual(0);
    expect(component.find('a').length).toEqual(0);
  });

  it('should renders without child component', () => {
    const props = {
      ...defaultProps,
      downloadData: {
        fileName: ''
      },
    };
    const component = shallow(<DownloadButton {...props}/>);
    expect(component.find('button').length).toEqual(1);
    expect(component.find('a').length).toEqual(0);
  });

  it('Should simulate href click when downloadData are specified', () => {
    const downloadData = {
      mime: 'fakeMime',
      fileName: 'fakeFile',
      content: 'fakeContent'
    };
    const props = {
      ...defaultProps,
      downloadData,
    };
    const component = render(<DownloadButton {...props}/>);
    expect(component.find('a').length).toEqual(1);
    expect(component.find('a')[0].attribs.href).toEqual('fakeHref');
  });

});
