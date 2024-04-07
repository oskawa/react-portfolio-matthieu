import { CSSProperties } from "react"
import { useEffect, useState } from "react"
import { Home } from "../../types/definition.type"
import http from "../../api/http"
import Grid from "../../shared/grid/grid"
import styles from "./homeScreen.module.scss"
import GridClasses from "../../shared/grid/grid.module.scss"
import { ProjectsScreen } from "../projects/projects.screen"


export function HomeScreen() {
  const [home, setHome] = useState<Home>([])

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  async function fetchData() {
    try {
      const response = await http.get('home')
      setHome(response.data)
      setLoading(false)
      setError(false)
      console.log(response.data)
    } catch (error) {
      setLoading(false)
      setError(true)
    }



  }
  useEffect(() => { fetchData() }, [])
  if (home?.[0]) {
    return <div>
      <section className={`${styles.heroHome}`}>
        <Grid otherClass="h100">
          <div className={GridClasses.flex}>
            <div className={GridClasses.col9}>
              <h1>
                {home[0].top_title}<br />
                <span></span> {home[0].bottom_title}
              </h1>
            </div>
          </div>
        </Grid>
      </section>
      <section className={`${styles.homeDescription}`}>
        <Grid>
          <div className={GridClasses.flex}>
            <div className={GridClasses.col12}>
              <h2 className={styles.homeDescription_title}>{home[0].section_title}</h2>
            </div>
            <div className={`${GridClasses.col12} ${styles.homeDescription_paragraph}`} dangerouslySetInnerHTML={{ __html: home[0].section_paragraph }}>
            </div>
          </div>

        </Grid>
      </section>
      <section className={styles.homeProjects}>
        <ProjectsScreen />

      </section>
    </div>


  }
}