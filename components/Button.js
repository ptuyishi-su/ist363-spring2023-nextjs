import classnames from 'classnames/bind';
import styles from './button.module.scss';

let cx = classnames.bind(styles);

const Button = ({
    clickHandler, 
    children,
    type
}) => {
    let buttonClasses = cx({
        btn: true,
        primary: type === "primary",
        secondary: type === "secondary"
    });
    return <button 
    onClick={clickHandler} 
    className={buttonClasses}>
        {children}
    </button>
}
export default Button