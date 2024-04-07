import Grid from "../../shared/grid/grid"
import styles from "./contactScreen.module.scss"
import GridClasses from "../../shared/grid/grid.module.scss"


export function ContactScreen() {
  return <section className={`${styles.heroContact}`}>
    <Grid otherClass="h100">
      <div className={GridClasses.flex}>
        <div className={GridClasses.col12}>
          <h1>
            Ohh let's<br />
            <span></span> collaborate
          </h1>
          <h2>mdelomez.uxui@gmail.com</h2>
        </div>
      </div>
    </Grid>
  </section>
}