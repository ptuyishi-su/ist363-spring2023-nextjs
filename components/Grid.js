import styles from './container.module.scss';

const Grid =({children})=>{
    return <ul className={styles}>
        {children}
    </ul>
}
export default Grid;