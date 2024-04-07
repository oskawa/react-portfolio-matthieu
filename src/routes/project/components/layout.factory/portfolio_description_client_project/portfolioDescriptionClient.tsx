import Grid from "../../../../../shared/grid/grid"
import GridClasses from "../../../../../shared/grid/grid.module.scss"
import styles from './portfolioDescriptionClient.module.scss'
export function PortfolioDescriptionClient({ ...props }) {
  if (props) {


    return <section className={styles.sectionClient}>
      <Grid >
        <div className={GridClasses.flex}>
          <div className={`${GridClasses.col4} ${styles.descriptionClient}`}>
            {props.client && (
              <p>
                Client : {props.client}
              </p>
            )}
            {props.project && (
              <p>
                Project : {props.project}
              </p>
            )}
            {props.year && (
              <p>
                Year : {props.year}
              </p>
            )}
          </div>
          <div className={`${GridClasses.col4} ${styles.servicesClient}`} >
            {props.services && (
              <div>
                <h3>Services</h3>
                <div dangerouslySetInnerHTML={{ __html: props.services }}></div>
              </div>
            )}
          </div>
        </div>
      </Grid >
    </section>

  }
}