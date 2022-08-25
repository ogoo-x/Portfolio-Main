import React from 'react'
import {Link} from "react-router-dom";
import styles from "./two.module.css";
import Okoko from "../Assets/Okoko.png"
import FastFood from "../Assets/Fast Food.png"

function Two() {
  return (
    <div className={styles.mainsection2}>
    <div className={styles.container2}>
        <h1>My Works.</h1>
        <br />
        <ol>
            <li>
                <h2>Website for a Floral SME.</h2>
                <p className={styles.case_description}>A medium for Okoko© to artfully communicate 
                    to their target audience their much more 
                    sustainable and climate-friendly periwinkle flowers.</p>
                <img src={Okoko} alt="" className={styles.img}/>
                <Link to="/works/okoko" className={styles.link}><p>Read Full Case Study ▶</p></Link> 
            </li>
            <br />
            <li>
            <h2>Random Recipe Web Application.</h2>
                <p className={styles.case_description}>Fast food is a punny web application to aid an 
                    exploratory food lover find a new recipe to try.</p>
                <img src={FastFood} alt="" className={styles.img}/>
                <Link to="/works/okoko" className={styles.link}><p>Read Full Case Study ▶</p></Link> 
            </li>
        </ol>

        <Link to="/works" className={styles.link}><p>See More ▶</p></Link> 
    </div>
    </div>
  )
}

export default Two