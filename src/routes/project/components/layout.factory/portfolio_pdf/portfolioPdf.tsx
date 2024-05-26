import { Document } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
export function PortfolioPdf({ ...props }) {
  if (props) {

    // const backgroundImageStyle = {
    //   backgroundImage: `url(${props.pdf_file})`,
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   height: '100vh',
    //   margin: '40px 40px 0 40px'
    //   // Add any other styles you want for the div
    // };

    return <Document file={props.pdf_file.url} />;
  }

}