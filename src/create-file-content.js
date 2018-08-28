import base64 from 'base64-arraybuffer';

const createFileContent = (fileEncode64, mime) => {
  if (!fileEncode64 || !mime) return {};
  const fileDecode64 = base64.decode(fileEncode64);
  const fileContent = new Blob([fileDecode64], { type: mime });

  const windowUrl = window.webkitURL ? window.webkitURL: window.URL
  return windowUrl.createObjectURL(fileContent);
};

export default createFileContent;
