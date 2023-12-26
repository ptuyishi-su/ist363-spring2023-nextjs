import className from "classnames/bind";

import styles from "./row.module.scss"

const cx = className.bind(styles)

const Row=({children, justifyContent})=>{
    const rowClasses =cx({
        row: true,
        [`justify-content-${justifyContent}`]: justifyContent
    });
    return <div className={styles.row}>{children}</div>
}

export default Row;