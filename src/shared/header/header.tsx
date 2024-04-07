import { NavLink } from "react-router-dom";
import Grid from "../grid/grid";
import { path } from "../../routes/path";
import styles from './header.module.scss'
import GridClasses from "../../shared/grid/grid.module.scss"
import React, { useState, useEffect } from 'react';
import http from "../../api/http"


export default function Header() {
  const [parisTime, setParisTime] = useState('');
  const [countPortfolio, setcountPortfolio] = useState('');
  useEffect(() => { fetchData() }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
      });
      setParisTime(currentTime);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  async function fetchData() {
    try {
      const response = await http.get('countPortfolio')
      setcountPortfolio(response.data)
      // setLoading(false)
      // setError(false)

    } catch (error) {
      // setLoading(false)
      // setError(true)
    }
  }
  // const getActiveClass = useCallback(({ isActive }: { isActive: boolean }) =>
  //   isActive ? styles.active : ''
  //   , [])
  const getActiveClass = ({ isActive }: { isActive: boolean }) => isActive ? styles.active : ''
  return (
    <header>
      <Grid>
        <div className={GridClasses.flex}>
          <div className={`${GridClasses.col6} ${styles.heroLeft}`}>
            <NavLink className={getActiveClass} to={path.base}>Matthieu.Delomez</NavLink>
          </div>
          <div className={`${GridClasses.col6} ${styles.heroRight}`}>
            <div className={styles.heroMenu}>
              <NavLink className={getActiveClass} to={path.projects}>Works<sup className={styles.countPortfolio}>{countPortfolio}</sup></NavLink>
              <NavLink className={getActiveClass} to={path.about}>About</NavLink>
              <NavLink className={getActiveClass} to={path.contact}>Contact</NavLink>
            </div>
            <div className={styles.heroTime}>
              <p>Paris (GMT+1) <span>{parisTime}</span></p>
            </div>
          </div>
        </div>
      </Grid>
    </header>
  )
}