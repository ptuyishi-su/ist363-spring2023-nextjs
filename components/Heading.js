import className from 'classnames/bind';
import styles from './heading.module.scss';

const cx= className.bind(styles);

const Heading =({Children,color, level, textAlign, marginBottom, marginTop, 
    marginRight, marginleft,paddingBottom, paddingTop, 
    paddingRight,paddingleft}) => {
    const Tag =level > 6 ? 'h6': `h${level}`;

    const headingClasses =cx({
        heading: true,
        [`heading${level}`]: level,
        [`font-color${color}`]:color,
        [`margin-bottom-${marginBottom}`]: marginBottom,
        [`margin-bottom-${marginTop}`]: marginTop,
        [`margin-bottom-${marginRight}`]: marginRight,
        [`margin-bottom-${marginleft}`]: marginleft,
        [`margin-bottom-${paddingBottom}`]: paddingBottom,
        [`margin-bottom-${paddingTop}`]: paddingTop,
        [`margin-bottom-${paddingRight}`]: paddingRight,
        [`margin-bottom-${paddingleft}`]: paddingleft,




        [`textAlign${textAlign}`]: textAlign

    });

    return <Tag className={headingClasses}>{Children}</Tag>
}

export default Heading;