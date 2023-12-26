import Heading from './Heading';
import Label from './Label';
import Select from './Select';
import FormGroup from './FormGroup';
import Image from 'next/image';

import styles from './trimpicker.module.scss';
import { useState } from 'react';
const TrimPicker =({trims, locations })=>{

    const [activeTrim, setActiveTrim] =useState (0);
    const [activeLocation, setActiveLocations]=useState (0);

    const trimOptions= trims.map((trim, index)=>{
        const {name}=trim;
        return {
            label: name,
            value: index
        }
    });

    const locationOptions = locations.map((location, index)=>{
        const {name}=location;
        return {
            label: name,
            value: index
        }

    });

    return <section className={styles.trimpicker}>
        <div className={styles.trimpicker__}>
            <Heading 
                level={2} 
                color={white}
                marginBottom={2}
            >
                Picture Yourself Behind the Wheel
            </Heading>
            <form>
                <FormGroup>
                    <Label>I want to drive a...</Label>
                    <Select 
                        options={trimOptions} 
                        changeHandler={setActiveTrim}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Change the driving location to...</Label>
                    <Select 
                        options={locationOptions}
                        changeHandler={setActiveLocations}
                    />
                </FormGroup>


            </form>
        </div>
        <div className={styles.trimpicker__image}>
            <Image
                src={`/backgrounds/series-backgound-${activeLocation + 1}.jpg`}
                alt={`${locations[activeLocation].name} background`}
                width={1900}
                height={656}
                className={styles.trimpicker__image__background}
            />

            {trims[activeTrim].images.large&& 
                <Image
                src={trims[activeTrim].images.large.node.sourceUrl}
                alt={trims[activeTrim].images.large.node.altText}
                width={trims[activeTrim].images.large.node.mediaDetails.width}
                height={trims[activeTrim].images.large.node.mediaDetails.height}
                className={styles.trimpicker__image__background__foreground}
            />
            }
            
        </div>

    </section>
}
export default TrimPicker