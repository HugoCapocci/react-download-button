// @flow
import React from 'react';
import createFileContent from './create-file-content';

export type DownloadData = {
  mime?: string,
  fileName?: string,
  content?: string,
};

type Props = {
  children?: React$Element<any>,
  onClick: Function,
  downloadData: DownloadData,
  className?: string,
  style?: Object,
  disabled?: boolean,
};

type State = {};

class DownloadButton extends React.Component<Props, State> {
  state = {};
  static defaultProps = {
    disabled: false,
    downloadData: {
      mime: '',
      fileName: '',
      content: '',
    },
  };

  renderButton = ({
    className,
    style,
    disabled,
    onClick,
  }: Props) => {
    const defaultProps = {
      disabled,
      onClick,
    };
    return (
      <div>
        { this.props.children &&
          this.props.children
        }
        { !this.props.children &&
          <button type="button" {...defaultProps}>
            Download! 
          </button>
        }
        { this.renderDownloadFile() }
      </div>
    );
  }

  renderDownloadFile = () => {
    if (Object.keys(this.props.downloadData).length === 0) return null;
    const { fileName, mime, content } = this.props.downloadData;
    if (fileName != null && !fileName.length) return null;

    return (
      <a
        download={fileName}
        href={createFileContent(content, mime)}
        style={{ display: 'none' }}
        ref={(downloadLink) => {
          //$FlowFixMe
          downloadLink.click();
        }}
      />
    );
  }

  render() {
    return (
      <div className="flex" style={{ display: 'inline-flex' }}>
        { this.renderButton(this.props) }
      </div>
    );
  }
}

export default DownloadButton;
