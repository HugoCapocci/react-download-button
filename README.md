REACT Download Button
=====================

[![codecov](https://codecov.io/gh/HugoCapocci/react-download-button/branch/master/graph/badge.svg)](https://codecov.io/gh/HugoCapocci/react-download-button)


Installation
------------

```bash
yarn add -D react-download-button
```

or

```bash
npm i --save-dev react-download-button
```

Usage
-----

```javascript
import DownloadButton from 'react-download-button';
// you can also import flow type if needed
import type { DownloadData } from 'react-download-button';

```

Two required props:
  * onClick: Function to call on button click
  * downloadData: Object having html5 file informations (can be empty):
     * mime: the mime type of the file to download
     * fileName: the name (with extention) of the file to download
     * contentBase64: the base-64 encoded content of the file to download

Optionnal props:
 * label: text to be displayed on the button
 * disabled: set true to disable button (default false)
 * className: set a value to specify class (default empty)
 * style: set a value to specify style (default empty)

You can have a simple html button

```javascript
<DownloadButton onClick={...} downloadData={...}/>
```

Or use it with any other component, for example with material-ui:

```javascript
import RaisedButton from 'material-ui/RaisedButton';

<DownloadButton onClick={...} downloadData={...}>
  <RaisedButton
    id="downloadButton"
    label={...}
    primary={true}
  />
</DownloadButton>
```

In this case, no need to set RaisedButton onClick, it will be retrieved from DownloadButton one.

How it works
------------

1. Set downloadData as an empty oject ()
2. When file content has been retrieved, update downloadData and set type mime, file name and content
File will automatically be proposed to download

Note: you may have to reset downloadData attributes to avoid unexpected automatic downloads

