import styles from './grid.module.scss';
import { motion } from "framer-motion"


const Grid = ({items}) => {
    const sectionVariants={
        closed:{
            y:50,
            opacity:0
        },
        open:{
            y:0,
            opacity:1


        }
    }
    return <motion.section 
    initial="closed"
    animate="open"
    variants={sectionVariants}
        className={styles.grid}>
            
           {items.map((item, index)=>{
                    const{ title, slug, vehicleInformation }=vehicle.node;
                    const {trimLevels}= vehicleInformation
                    return <motion.article 
                        key={index}
                        variants={}>
                        {trimLevels && trimLevels[0].images.thumbnail &&
                            <Image 
                                src={trimLevels[0].images.thumbnail.node.sourceUrl}
                                alt={trimLevels[0].images.thumbnail.node.altText}
                                width={trimLevels[0].images.thumbnail.node.mediaDetails.width}
                                height={trimLevels[0].images.thumbnail.node.mediaDetails.height}
                            />
                        }
                        
                        <h3>{title}</h3>
                        <p>
                            <Link href={`/vehicles/${slug}`}>Learn more</Link>
                        </p>
                    </motion.article>
                }
                )}
        {/* {children} */}
    </motion.section>
}
export default Grid;