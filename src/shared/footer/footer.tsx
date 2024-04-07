
import Grid from "../grid/grid";

import styles from './footer.module.scss'
import GridClasses from "../../shared/grid/grid.module.scss"


export default function Footer() {
  return (
    <footer>
      <Grid>
        <div className={GridClasses.flex}>
          <div className={GridClasses.col12}>
            <h6 className={styles.footerTitle}>Let's collaborate</h6>
          </div>
        </div>
        <div className={`${GridClasses.flex} ${styles.footerSocials}`}>
          <div className={GridClasses.col12}>
            <p>Socials</p>
          </div>
          <div className={GridClasses.col12}>
            <ul>
              <li>
                <a href="">
                  Dribble
                </a>
              </li>
              <li>
                <a href="">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="">
                  Instagram
                </a>
              </li>
              <li>
                <a href="">
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Grid>
    </footer>
  )
}