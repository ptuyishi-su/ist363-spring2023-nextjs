import classnames from 'classnames/bind';
import Icon from './Icon';
import styles from './swatches.module.scss';

const cx = classnames.bind(styles);

const Swatches = ({ 
    changeHandler, 
    data 
}) => {
    return <ul className={styles.swatch__list}>
        {data.map((color, index) => {
             return <li 
                key={index}
                 className={styles.swatch__item}
                 style={{backgroundColor: color.hex}}
                 onClick={() => {
                    changeHandler(color);
                 }}
                >
                
             </li>
        })}
    </ul>
}
export default Swatches;