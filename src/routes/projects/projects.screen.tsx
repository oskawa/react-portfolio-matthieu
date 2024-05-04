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

type projectsProps = { title?: string; showCTA?: boolean; }

export function ProjectsScreen({ title = "Selected works", showCTA = false }: projectsProps) {
  const [projects, setProjects] = useState<Projects>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  async function fetchData() {
    try {
      const response = await http.get('portfolio', { params: { count: 6 } })
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
  console.log(showCTA)
  return (<div>
    {!showCTA && (
      <section className={`${styles.heroProjects}`}>
        <Grid otherClass="h100">
          <div className={GridClasses.flex}>
            <div className={GridClasses.col9}>
              <h1>
                Selected design<br />
                <span></span> Works
              </h1>
            </div>
          </div>
        </Grid>
      </section>
    )}
    {!showCTA && (
      <section className={`${styles.categoriesProject}`}>
        <Grid>
          <div className={GridClasses.flex}>
            <div className={GridClasses.col3}>
              <h2>
                Types
              </h2>
              <ul>
                <li>Website</li>
                <li>Plateform Saas</li>
                <li>E-commerce</li>
                <li>Web App</li>
              </ul>
            </div>
            <div className={GridClasses.col3}>
              <h2>
                Discipline
              </h2>
              <ul>
                <li>UI Design</li>
                <li>UX Research</li>
                <li>Direction Artistique</li>
                <li>Développement Web</li>
              </ul>
            </div>
          </div>
        </Grid>
      </section>
    )}

    <section className={styles.projectsListing}>
      <Grid>
        <div className={GridClasses.flex}>
          <div className={GridClasses.col12}>
            {title && <h2>{title}</h2>}
          </div>
          <div className={GridClasses.col12}>
            <ul className={styles.projectsList}>
              {projects.map((project) => <li key={project.id}><Link to={replaceUrlParams(path.project, { slug: project.slug })}>{project.title}</Link></li>)}
            </ul>
          </div>
          {showCTA && (
            <div className={GridClasses.col12}>

              <Link className={styles.projectsCTA} to={path.projects}>+ ALL PROJECTS</Link>
            </div>
          )}
        </div>
      </Grid>
    </section>
  </div>
  )
}