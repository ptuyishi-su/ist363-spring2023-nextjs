import ButtonUi from './ButtonUi'
import Link from 'next/link'
import styles from './nav.module.scss'
import {getDesktopNavItems} from '../lib/nav'
import ButtonUi from './ButtonUi'
const Nav=()=>{
    return <nav className={Styles.nav}>nav goes here</nav>
}
const Desktop = ()=>{
    const navItems= getDesktopNavItems();
    return <nav className={styles.nav_desktop}>
        <ul className={style.nav__list}>
            {navItems.map((navItem, index) =>{
                const {label, slug}=navItem;
                return <li key={index} className={styles.nav__list__items}>
                    <Link hreff={slug}>
                        {label}
                    </Link>
                </li>
            })}
        </ul>
    </nav>
}
Nav.Desktop=Desktop
const Mobile =()=>{
    return <nav className={styles.nav__mobile}>
        <ButtonUi icon="close"/>
    </nav>

}
Nav.Mobile=Mobile;

export default Nav;