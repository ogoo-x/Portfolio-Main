import React from 'react';
import styles from "./one.module.css";
import {Link} from 'react-router-dom';
import Bg from "../Assets/potrait.png"

function One() {
  return (
    <div className={styles.mainsection}>
    <div className={styles.container}>
        
       <img src={Bg} alt="Line Potrait of Ogochukwu" className={`${styles.children} ${styles.bimage}`}/>

       <div className={`${styles.children} ${styles.description}`}>
            <h1>Hi, I'm Ogochukwu</h1>
            <p>I'm mostly a front-end developer. 
                I enjoy creating motion-centered user experiences
                and I love playing with data sometimes.
                But what I love doing the most? Solving Problems.</p>
            <div className={styles.cta}>
                <Link to="/works"><p className={styles.button}>See my works ▶</p></Link>
                <Link to="/journal/about"><p className={styles.button2}>Learn more about me ▶</p></Link>
            </div>    
       </div>      
    </div>
    </div>
  )
}

export default One