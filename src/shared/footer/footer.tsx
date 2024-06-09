
import Grid from "../grid/grid";

import styles from './footer.module.scss'
import GridClasses from "../../shared/grid/grid.module.scss"
import React, { useState, useEffect } from 'react';
import http from "../../api/http"
import { Link } from "react-router-dom";
import { path } from "../../routes/path";
import MovingText from 'react-moving-text';
import { InView, useInView } from "react-intersection-observer";


export default function Footer() {
  const [socials, setsocials] = useState({});
  const [loading, setLoading] = useState(true);
  const string = "Let's collaborate";
  const Letters = string.split(/( )/);
  useEffect(() => { fetchSocials() }, [])
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
  });
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
  return (


    <footer ref={ref}>
      <Grid>
        <div className={GridClasses.flex}>
          <div className={GridClasses.col12}>
            <h6 className={styles.footerTitle}><Link to={path.contact}>
              {!loading && Letters.map((letter, index) => (
                < MovingText
                  key={index} // Ensure you provide a unique key for each element in the map
                  type={!loading ? "fadeInFromBottom" : ""}
                  duration="1000ms"
                  delay={`${index * 100}ms`}
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  {letter}
                </MovingText>
              ))}
            </Link></h6>




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
    </footer >
  )

}