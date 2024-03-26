import { CSSProperties } from "react"
import Grid from "../../shared/grid/grid"
import styles from "./homeScreen.module.scss"
import GridClasses from "../../shared/grid/grid.module.scss"
import { ProjectsScreen } from "../projects/projects.screen"


export function HomeScreen() {
  return (
    <div>

      <section className={`${styles.heroHome}`}>
        <Grid otherClass="h100">
          <div className={GridClasses.col9}>
            <h1>
              Product and Visual <br />
              <span></span> Designer
            </h1>
          </div>
        </Grid>
      </section>
      <section className={`${styles.homeDescription}`}>
        <Grid>
          <div className={GridClasses.col12}>
            <h2>About</h2>
          </div>
          <div className={GridClasses.col12}>
            <p>
              Based in Montpellier, I have been designing, prototyping, and developing digital products for five years with the aim of addressing user needs.
            </p>
          </div>

        </Grid>
      </section>
      <section className={styles.homeProjects}>
        <ProjectsScreen />

      </section>
    </div>

  )
}