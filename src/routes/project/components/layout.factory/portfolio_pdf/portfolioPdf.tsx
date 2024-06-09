import { Document, Page } from 'react-pdf';
import { useCallback, useState, useEffect } from 'react';
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
  const [containerHeight, setContainerHeight] = useState<number>(window.innerHeight);
  const maxHeight = window.innerHeight;
  const [pageNumber, setPageNumber] = useState<number>(1);


  useEffect(() => {
    // Function to update container height
    const updateContainerHeight = () => {
      setContainerHeight(window.innerHeight);
    };

    // Set initial height
    updateContainerHeight();

    // Add event listener for window resize
    window.addEventListener("resize", updateContainerHeight);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
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
              height={containerHeight ? containerHeight - 100 : 500}
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