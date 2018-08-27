import base64 from 'base64-arraybuffer';

const createFileContent = (fileEncode64, mime) => {
  if (!fileEncode64 || !mime) return {};
  const fileDecode64 = base64.decode(fileEncode64);
  const fileContent = new Blob([fileDecode64], { type: mime });
  return window.URL.createObjectURL(fileContent);
};

export default createFileContent;
