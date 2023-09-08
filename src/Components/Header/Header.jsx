import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.item}><Link to={"/main"}>Main</Link></div>
                <div className={styles.item}><Link to={"/component"}>Component</Link></div>
                <div className={styles.item}><Link to={"/component"}>Component</Link></div>
                <div className={styles.item}><Link to={"/component"}>Component</Link></div>
                <div className={styles.item}><Link to={"/component"}>Component</Link></div>
            </nav>
        </div>
    )
}

export default Header