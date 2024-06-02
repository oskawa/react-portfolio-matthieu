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



  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
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
            {/* {Array.from(new Array(numPages), (el, index) => (
              <Page
                renderTextLayer={false}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                height={containerHeight ? Math.min(containerHeight, maxHeight) : maxHeight}
              />
            ))} */}
            <Page pageNumber={pageNumber} />
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </Document>
        </div>
      </section>

    );
  }

}