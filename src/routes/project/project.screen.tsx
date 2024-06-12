import { useParams } from "react-router-dom"
import http from "../../api/http"
import { useEffect, useState } from "react"
import LayoutsFactory from "./components/layout.factory/layout.factory"
import styles from "./projectScreen.module.scss"
import Grid from "../../shared/grid/grid"
import GridClasses from "../../shared/grid/grid.module.scss"
import { Loader } from "../../shared/loader/loader"
import MetaTags from "../../shared/metas/metatags"
export function ProjectScreen() {
  const [project, setProject] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const { slug } = useParams()



  async function fetchData() {
    try {
      const response = await http.get('portfolio/' + slug)
      setProject(response.data)
      setLoading(false)
      setError(false)
      console.log(response.data)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  useEffect(() => { fetchData() }, [])
  if (loading) {
    return <Loader />;
  }

  if (project?.[0]) {
    return <div>
      <MetaTags
        title='Portfolio of Matthieu Delomez - Projects'
        description='List of my projects since 2018'
        image=''
        name='Matthieu Delomez'
      />
      <Grid typeClass="containerFluid">
        <section className={`${styles.heroProject}`}>
          <h1 className={`${styles.heroTitle}`}>
            {project[0].title}
          </h1>
        </section>
        <div className={styles.projectType}>
          <div className={styles.projectTypeFlex}>
            <div>
              <p>{project[0].project_type}</p>
            </div>
            <div>
              <p>{project[0].application_type}</p>
            </div>
          </div>
        </div>
      </Grid>
      {project[0]?.repeatable_content?.map((layout) => <LayoutsFactory name={layout?.acf_fc_layout} {...layout} />)
      }
    </div>
  }
  return null
}