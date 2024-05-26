import Grid from "../../shared/grid/grid"
import styles from "./contactScreen.module.scss"
import GridClasses from "../../shared/grid/grid.module.scss"
import React, { useState, useEffect } from 'react';
import http from "../../api/http"

export function ContactScreen() {
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
  return <section className={`${styles.heroContact}`}>
    <Grid otherClass="h100">
      <div className={GridClasses.flex}>
        <div className={GridClasses.col12}>
          <h1>
            Ohh let's<br />
            <span></span> collaborate
          </h1>
          <h2>mdelomez.uxui@gmail.com</h2>
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
  </section>
}