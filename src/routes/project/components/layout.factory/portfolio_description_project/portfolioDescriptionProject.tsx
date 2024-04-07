
import Grid from "../../../../../shared/grid/grid"
import GridClasses from "../../../../../shared/grid/grid.module.scss"
import styles from "./portfolioDescription.module.scss"

export function PortfolioDescriptionProject({ ...props }) {
  if (props) {
    return <section className={styles.descriptionProject}>
      <Grid>
        <div className={`${GridClasses.flex} ${GridClasses.flexRight}`}>
          <div className={GridClasses.col8}>
            {props.title && (
              <h3 className={`${styles.title}`} dangerouslySetInnerHTML={{ __html: props.title }}></h3>
            )}
            {props.paragraph && (
              <div className={`${styles.paragraph}`} dangerouslySetInnerHTML={{ __html: props.paragraph }}></div>
            )}
          </div>
        </div>
      </Grid >
    </section>
  }
}