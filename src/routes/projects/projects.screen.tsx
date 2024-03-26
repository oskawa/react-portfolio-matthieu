import { useEffect, useState } from "react"
import http from "../../api/http"
import { Projects } from "../../types/definition.type"
import { Link, NavLink } from "react-router-dom"
import { ProjectScreen } from "../project/project.screen"
import { path } from "../path"
import { replaceUrlParams } from "../../helpers/api.helpers"
import Grid from "../../shared/grid/grid"
import GridClasses from "../../shared/grid/grid.module.scss"
import styles from './projectsScreen.module.scss'

export function ProjectsScreen() {
  const [projects, setProjects] = useState<Projects>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  async function fetchData() {
    try {
      const response = await http.get('portfolio')
      setProjects(response.data)
      setLoading(false)
      setError(false)
      console.log(response.data)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  useEffect(() => { fetchData() }, [])
  return (
    <section className={styles.projectsListing}>
      <Grid>
        <div className={GridClasses.col12}>
          <h2>Selected Projects</h2>
        </div>
        <div className={GridClasses.col12}>
          <ul className={styles.projectsList}>
            {projects.map((project) => <li key={project.id}><Link to={replaceUrlParams(path.project, { slug: project.slug })}>{project.title.rendered}</Link></li>)}
          </ul>
        </div>
      </Grid>
    </section>
  )
}