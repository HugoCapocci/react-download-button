// @flow
/* global expect, jest */

import React from 'react';
import { render, shallow } from 'enzyme';
import DownloadButton from './index';

import createFileContent from './create-file-content';
jest.mock('./create-file-content');

const defaultProps = {
  onClick: jest.fn(),
  downloadData: {},
};

describe('tests for <DownloadButton> container', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should renders one child component', () => {
    const component = shallow(<DownloadButton {...defaultProps}><span>hello</span></DownloadButton>);
    expect(component.find('button').length).toEqual(0);
    expect(component.find('span').length).toEqual(1);
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

    component.find('button').simulate('click');
    expect(defaultProps.onClick).toBeCalled();
  });

  it('Should simulate href click when downloadData are specified', () => {
    createFileContent.mockImplementation(() => 'fakeHref');
    const downloadData = {
      mime: 'fakeMime',
      fileName: 'fakeFile',
      contentBase64: 'fakeContent'
    };
    const props = {
      ...defaultProps,
      downloadData,
    };
    const component = render(<DownloadButton {...props}/>);
    expect(component.find('a').length).toEqual(1);
    expect(component.find('a')[0].attribs.href).toEqual('fakeHref');
  });

  it('Should map nested component onClick', () => {
    const component = shallow(<DownloadButton {...defaultProps}><input type='submit' /></DownloadButton>);
    component.find('input').simulate('click');
    expect(defaultProps.onClick).toBeCalled();
  });

  it('Should not be clickeable if disabled', () => {
    const props = {
      ...defaultProps,
      disabled: true,
    }
    const component = shallow(<DownloadButton {...props}/>);
    expect(component.html()).toContain('disabled');
    component.find('button').simulate('click');
    expect(defaultProps.onClick).not.toBeCalled();
  });

});
