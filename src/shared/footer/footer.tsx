
import Grid from "../grid/grid";

import styles from './footer.module.scss'
import GridClasses from "../../shared/grid/grid.module.scss"
import React, { useState, useEffect } from 'react';
import http from "../../api/http"
import { Link } from "react-router-dom";
import { path } from "../../routes/path";

export default function Footer() {
  const [socials, setsocials] = useState({});

  useEffect(() => { fetchSocials() }, [])

  async function fetchSocials() {
    try {
      const response = await http.get('options')
      setsocials(response.data)

      // setLoading(false)
      // setError(false)

    } catch (error) {
      // setLoading(false)
      // setError(true)
    }
  }
  return (
    <footer>
      <Grid>
        <div className={GridClasses.flex}>
          <div className={GridClasses.col12}>
            <h6 className={styles.footerTitle}><Link to={path.contact}>
              Let's collaborate
            </Link>
            </h6>
          </div>
        </div>
        <div className={`${GridClasses.flex} ${styles.footerSocials}`}>
          <div className={GridClasses.col12}>
            <p>Socials</p>
          </div>
          <div className={GridClasses.col12}>
            {socials && Object.keys(socials).length > 0 ? (
              <ul>
                {Object.entries(socials).map(([key, value]) => (
                  <li key={key}>
                    <a target="_blank" href={value.link}>{value.name}</a>

                  </li>
                ))}
              </ul>
            ) : (
              <div>No socials data available</div>
            )}

          </div>
        </div>
      </Grid>
    </footer>
  )
}