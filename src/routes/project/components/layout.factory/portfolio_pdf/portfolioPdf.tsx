import { Document, Page } from 'react-pdf';
import { useCallback, useState } from 'react';
import styles from "./portfolioPdf.module.scss"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
export function PortfolioPdf({ ...props }) {
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number>();
  const maxHeight = window.innerHeight;
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerHeight(entry.contentRect.height);
    }
  }, []);



  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }
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


    return (

      <section className={styles.portfolioPdf}>


        <div className={styles.pdfInner}>
          <Document file={props.pdf_file.url} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              renderTextLayer={false}
              pageNumber={pageNumber}
              height={document.getElementsByClassName('portfolioPdf')[0]?.clientHeight * 0.8 ?? 150}
            />


          </Document>
          <nav className={styles.pdfNav}>
            <ul className="pager">
              <li className="previous">
                <button
                  disabled={pageNumber === 1}
                  onClick={() => setPageNumber(pageNumber - 1)}
                >
                  Previous
                </button>
              </li>
              <li className="next">
                <button
                  disabled={pageNumber === numPages}
                  onClick={() => setPageNumber(pageNumber + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>

    );
  }

}