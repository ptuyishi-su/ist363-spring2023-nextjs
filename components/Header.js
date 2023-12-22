import styles from './header.module.scss'
import ButtonUi from './ButtonUi'
import Container from './Container'
import Row from "./Rows"
import { useState } from 'react'

const Header= ()=>{
     const [isMobileNavopen, setIsMobileNavOpen]=useState(false)
     return<header className={styles.header}>
          <Container>
               <Row justifyContent="space-between">
                    <Logo/>
                    <Nav.Desktop/>
                    <ButtonUi icon="menu" clickHandler={()=>{
                         
                    }} />
                    {isMobileNavopen &&<Nav.Mobile />}
               </Row>

          </Container>
          </header>
}
export default Header