REACT Download File Button
==========================

[![codecov](https://codecov.io/gh/HugoCapocci/react-download-button/branch/master/graph/badge.svg)](https://codecov.io/gh/HugoCapocci/react-download-button)


Installation
------------

```bash
yarn add -D react-dfb
```

or

```bash
npm i --save-dev react-dfb
```

Usage
-----

```javascript
import DownloadButton from 'react-dfb';
// you can also import flow type if needed
import type { DownloadData } from 'react-dfb';

```

Two required props:
  * onClick: Function to call on button click
  * downloadData: Object having html5 file informations (can be empty):
     * mime: the mime type of the file to download
     * fileName: the name (with extension) of the file to download
     * contentBase64: the base-64 encoded content of the file to download

Optionnal props:
 * label: text to be displayed on the button
 * disabled: set true to disable button (default false) - Note that will also disable onClick propagation
 * className: set a value to specify class (default empty)
 * style: set a value to specify style (default empty)

You can have a simple html button

```javascript
<DownloadButton onClick={...} downloadData={...}/>
```

Or use it with any other component, for example with a RaisedButton from material-ui:

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

Simple use case
---------------

1. Set downloadData as an empty oject ()
2. When file content has been retrieved, update downloadData and set type mime, file name and content
File will automatically be proposed to download

How it works
------------

The idea of this component is to create a http &lt;a&gt; tag, with a [download](https://www.w3schools.com/tags/att_a_download.asp) attribute and simulate a click on it.
Using [URL.createObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) function, a file content can be transformed into a link  an put into the href of this &lt;a&gt; tag.

This implementation require that the service retrieving your file content return it base-64 encoded. Ideally, it should have the same parameters as the DonwloadData type
