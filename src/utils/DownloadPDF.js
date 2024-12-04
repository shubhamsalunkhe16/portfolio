const DownloadPDF = (filepath, filename) => {
  const pdfUrl = filepath;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default DownloadPDF;
