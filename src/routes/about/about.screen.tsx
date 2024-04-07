import { CSSProperties } from "react"
import { useEffect, useState } from "react"
// import { Home } from "../../types/definition.type"
import http from "../../api/http"
import Grid from "../../shared/grid/grid"
import styles from "./aboutScreen.module.scss"
import GridClasses from "../../shared/grid/grid.module.scss"

export function AboutScreen() {
  const [about, setAbout] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  async function fetchData() {
    try {
      const response = await http.get('about')
      setAbout(response.data)
      setLoading(false)
      setError(false)
      console.log(response.data)
    } catch (error) {
      setLoading(false)
      setError(true)
    }



  }
  useEffect(() => { fetchData() }, [])
  if (about?.[0]) {
    return <div>
      <section className={`${styles.heroAbout}`}>
        <Grid otherClass="h100">
          <div className={GridClasses.flex}>
            <div className={GridClasses.col12}>
              <h1>
                {about[0].top_title}<br />
                <span></span> {about[0].bottom_title}
              </h1>
            </div>
          </div>
        </Grid>
      </section>
      <section className={`${styles.aboutDescription}`}>
        <Grid>
          <div className={`${GridClasses.flex}`}>
            <div className={GridClasses.col12}>
              <h2 className={styles.aboutDescription_title}>{about[0].section_title_about}</h2>
            </div>
          </div>
          <div className={`${GridClasses.flex} ${GridClasses.flexRight}`}>
            <div className={`${GridClasses.col10} ${styles.aboutDescription_paragraph}`} dangerouslySetInnerHTML={{ __html: about[0].section_paragraph_about }}>
            </div>
          </div>

        </Grid>
      </section>
    </div >


  }
}