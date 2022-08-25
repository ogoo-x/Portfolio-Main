import React from 'react'
import {Link} from "react-router-dom";
import styles from "./three.module.css";
import Bg from "../Assets/Earth.png"

function Three() {
  return (
    <div className={styles.mainsection3}>
      <h1>Contact Me.</h1>
      <div className={styles.container3}>
        <img src={Bg} alt="" className={styles.image} />

        <div className={styles.contactmain}>
          <div className={styles.contact}>
            <a href=""><button>📧 Gmail.</button></a>
            <a href=""><button>🔗 LinkedIn.</button></a>
            <a href=""><button>🦆 Twitter.</button></a>
            <a href=""><button>📸 Instagram.</button></a>
          </div>
        </div>
        
      </div> 
      
    </div>
  )
}

export default Three