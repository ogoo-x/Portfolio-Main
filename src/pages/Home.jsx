import React from 'react'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three';
import styles from "../components/two.module.css";

function Home() {
  return (
    <div className='body'>
      <One />
      <Two />
      <Three />
      <footer >
        <p>Created for the Web by <a className={styles.link} href="">Ogochukwu</a> with ⚛.</p>
      </footer>
    </div>
  )
}

export default Home