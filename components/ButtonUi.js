import Image from "next/image";
import styles from './btn.module.scss'
const ButtonUi=({clickHandler,icon})=>{
    return <button 
        className={StyleSheet.btnui}
        onClick={clickHandler}
    >
        <Image
            src={`/images/icons/${icon}.svg`}
            alt={`${icon} icon`}
            width={16}
            height={12}
        />
    </button>
}
export default ButtonUi;