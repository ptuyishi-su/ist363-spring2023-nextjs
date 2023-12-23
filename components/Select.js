import styles from './select.module.scss'

const Select=({
    chnageHandler, 
    options
})=>{
    return <select 
        lassName={styles.select}
        onChange={(event)=>{
            event.preventDefault();
            chnageHandler(parseInt(event.target.value));
        }}
    >
        {options?.map((option, index) =>{
            const {label, value}=option;
            return <option key={index} value={value}>{label}</option>
        })}
    </select>
}

export default Select;