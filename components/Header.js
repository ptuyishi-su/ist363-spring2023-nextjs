import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Link from 'next/link';
import styles from './header.module.scss';
import ButtonUi from './ButtonUi';
import Container from './Container';
import Row from "./Rows";
import Logo from "./Logo";
import Nav from './Nav';

const Header = ()=> {
     //state variable
     const [isMobileNavopen, setIsMobileNavOpen]=useState(false)
     return<header className={styles.header}>
          <Container>
               <Row justifyContent="space-between">
                    <Link href="/">
                         <Logo/>
                    </Link >
                    <Nav.Desktop/>
                    <ButtonUi 
                         icon="menu" 
                         clickHandler={()=>{
                         setIsMobileNavOpen(true);
                         }} 
                    />
                    <AnimatePresence>
                         {isMobileNavopen &&<Nav.Mobile closeHandler={()=>{
                               setIsMobileNavOpen(false);
                         }}/> }
                         {/* {isMobileNavopen &&<Nav.Mobile closeHandler=
                         {()=>{
                              setIsMobileNavOpen(false);
                         }} />} */}
                    </AnimatePresence>
               </Row>

          </Container>
          </header>
}
export default Header