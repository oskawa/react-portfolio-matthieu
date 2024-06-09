import { useEffect, useState } from "react";
import http from "../../api/http";
import { Projects } from "../../types/definition.type";
import { Link } from "react-router-dom";
import { path } from "../path";
import { replaceUrlParams } from "../../helpers/api.helpers";
import Grid from "../../shared/grid/grid";
import GridClasses from "../../shared/grid/grid.module.scss";
import styles from './projectsScreen.module.scss';
import { useInView } from "react-intersection-observer";
import { Loader } from "../../shared/loader/loader";

type ProjectsProps = { title?: string; showCTA?: boolean; isHome?: boolean };

export function ProjectsScreen({ title = "Selected works", showCTA = false, isHome = false }: ProjectsProps) {
  const [projects, setProjects] = useState<Projects>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [hoveredProjectSlug, setHoveredProjectSlug] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
  });

  async function fetchData() {
    try {
      const response = await http.get('portfolio', { params: { count: 20, isHome: isHome } });
      setProjects(response.data);
      setLoading(false);
      setError(false);
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Loader />;
  }

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (projectSlug) => {
    setHoveredProjectSlug(projectSlug);
    console.log(projectSlug)
    window.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseLeave = () => {
    setHoveredProjectSlug(null);
    window.removeEventListener('mousemove', handleMouseMove);
  };

  return (
    <div ref={ref}>
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
                <h2>Types</h2>
                <ul>
                  <li>Website</li>
                  <li>Platform Saas</li>
                  <li>E-commerce</li>
                  <li>Web App</li>
                </ul>
              </div>
              <div className={GridClasses.col3}>
                <h2>Discipline</h2>
                <ul>
                  <li>UI Design</li>
                  <li>UX Research</li>
                  <li>Art Direction</li>
                  <li>Web Development</li>
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
                {projects.map((project) => (
                  <li key={project.slug}>
                    <hr className={`${inView ? styles.active : ''}`}></hr>
                    <Link
                      onMouseEnter={() => handleMouseEnter(project.slug)}
                      onMouseLeave={handleMouseLeave}
                      to={replaceUrlParams(path.project, { slug: project.slug })}
                    >
                      {project.title}
                    </Link>
                    {hoveredProjectSlug === project.slug && (
                      <div
                        className={styles.projectHover}
                        style={{
                          backgroundImage: `url(${project.hover_image})`,
                          opacity: 1,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          position: 'fixed',
                          top: mousePosition.y + 10,
                          left: mousePosition.x + 10,
                          width: '300px',
                          height: '150px',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          pointerEvents: 'none',
                        }}
                      ></div>
                    )}
                  </li>
                ))}
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
  );
}
