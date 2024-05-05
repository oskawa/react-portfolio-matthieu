import GridClasses from "../../../../../shared/grid/grid.module.scss"
import Grid from "../../../../../shared/grid/grid"
import styles from "./portfolioDescriptionBis.module.scss"
export function PortfolioDescriptionBis({ ...props }) {

  if (props) {

    return <section className={styles.portfolioDescriptionBis}>

      <Grid>
        <div className={`${GridClasses.flex} ${GridClasses.flexCenter}`}>
          <div className={GridClasses.col8}>
            {props.title && (
              <h4 className={styles.title}>{props.title}</h4>
            )}
            {props.paragraph && (
              <div className={styles.paragraph} dangerouslySetInnerHTML={{ __html: props.paragraph }}></div>
            )}
          </div>
        </div>
      </Grid>
    </section>
  }
}