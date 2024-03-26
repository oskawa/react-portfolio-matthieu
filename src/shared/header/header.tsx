import { NavLink } from "react-router-dom";
import Grid from "../grid/grid";
import { path } from "../../routes/path";
import { SizeGridEnum } from "../../types/ui.types";
import styles from './header.module.scss'
import { useCallback } from "react";
import GridClasses from "../../shared/grid/grid.module.scss"


export default function Header() {
  // const getActiveClass = useCallback(({ isActive }: { isActive: boolean }) =>
  //   isActive ? styles.active : ''
  //   , [])
  const getActiveClass = ({ isActive }: { isActive: boolean }) => isActive ? styles.active : ''
  return (
    <Grid >
      <header className={`${styles.header} ${GridClasses.col12}`}>
        <div>
          <NavLink className={getActiveClass} to={path.base}>Home</NavLink>
          <NavLink className={getActiveClass} to={path.projects}>Works</NavLink>
          <NavLink className={getActiveClass} to={path.about}>About</NavLink>
          <NavLink className={getActiveClass} to={path.contact}>Contact</NavLink>
        </div>
      </header>
    </Grid>
  )
}