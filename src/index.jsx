// @flow
import React from 'react';
import createFileContent from './create-file-content';

export type DownloadData = {
  mime?: string,
  fileName?: string,
  contentBase64?: string,
};

type Props = {
  children?: React$Element<any>,
  onClick: Function,
  downloadData: DownloadData,
  className?: string,
  style?: Object,
  disabled?: boolean,
  label?: string,
};

class DownloadButton extends React.PureComponent<Props> {
  static defaultProps = {
    disabled: false,
    downloadData: {
      mime: '',
      fileName: '',
      contentBase64: '',
    },
    label: 'Download!',
  };

  renderButton = ({
    className,
    style,
    disabled,
    onClick,
    label,
  }: Props) => {
    const defaultProps = {
      disabled,
      onClick,
    };

    return (
      <div>
        { this.props.children &&
          React.Children.map(this.props.children, child =>
            React.cloneElement(child, { onClick: this.props.onClick })
          )
        }
        { !this.props.children &&
          <button type="button" {...defaultProps} onClick={(event) => {
            if (this.props.disabled) return;
            this.props.onClick(event);
          }}
          >{ label }</button>
        }
        { this.renderDownloadFile() }
      </div>
    );
  }

  renderDownloadFile = () => {
    if (Object.keys(this.props.downloadData).length === 0) return null;
    const { fileName, mime, contentBase64 } = this.props.downloadData;
    if (fileName != null && !fileName.length) return null;

    return (
      <a
        download={fileName}
        href={createFileContent(contentBase64, mime)}
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
