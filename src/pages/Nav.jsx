import {useState} from 'react'
import {Link} from 'react-router-dom';
import styles from './nav.module.css';

function Nav() {

  const [open, setOpen] = useState(false);

  return (
    <div className={`${open ? 'navigationopen' : 'navigationclose'} ${styles.nav}`}>
        <nav>
        
        <div>
            <Link to="/">
            <h2>ogochukwu</h2>
             </Link>
            <div className={`${styles.routes} ${!open && "scaledown"}`}>
                <ul>
                    <Link to="/works"><li>works.</li></Link>
                    <br />
                    <Link to="/journal"><li>journal.</li></Link>
                </ul>
            </div>
        </div>
       

        <div>
            <div onClick={() => {setOpen(!open)}} style={{cursor: 'pointer'}}>
                <span className={styles.one} onClick={() => {setOpen(!open)}}></span>
                <span className={styles.two} onClick={() => {setOpen(!open)}}></span>
            </div>
           
        </div>
        </nav>
        
    </div>
  )
}

export default Nav