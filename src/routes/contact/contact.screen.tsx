import Grid from "../../shared/grid/grid"
import styles from "./contactScreen.module.scss"
import GridClasses from "../../shared/grid/grid.module.scss"
import React, { useState, useEffect } from 'react';
import http from "../../api/http"
import { Loader } from "../../shared/loader/loader";
import MetaTags from "../../shared/metas/metatags";

export function ContactScreen() {
  const [socials, setsocials] = useState({});
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => { fetchSocials() }, [])
  if (loading) {
    return <Loader />;
  }

  async function fetchSocials() {
    try {
      const response = await http.get('options')
      setsocials(response.data)

      setLoading(false)
      // setError(false)

    } catch (error) {
      setLoading(false)
      // setError(true)
    }
  }
  return <section className={`${styles.heroContact}`}>
    <MetaTags
      title='Portfolio of Matthieu Delomez - Contact'
      description='Product and Visual Designer based in Montpellier since 2018, contact me from here !'
      image=''
      name='Matthieu Delomez'
    />
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