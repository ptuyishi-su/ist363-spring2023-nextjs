import Heading from './Heading';
import Paragraph from './Paragraph';
import react from 'react';
import styles from './footer.module.scss';

const Footer = () => {
    return <footer className={styles.footer}>
        <h1>Connect with us</h1>
        <Paragraph>Copyright 2023 Subaru.</Paragraph>
    </footer>
}
export default Footer