import { useState } from 'react';
import style from './colorpicker.module.scss';
import Heading from './Heading';
import Swatches from './Swatches'
import Image from 'next/image';

const ColorPicker = ({colors }) => {
    // [state variable, set state function]
    const [activeColor, setActiveColor] = useState(0);

    return <section className={StyleSheet.ColorPicker}>
        <Heading level={2} textAlign="center">Pick a color</Heading>
        <Image 
          src={colors[activeColor].image.node.sourceUrl}
          alt={colors[activeColor].image.node.altText}
          width={colors[activeColor].image.node.mediaDetails.width}
          height={colors[activeColor].image.node.mediaDetails.height}
          className={StyleSheet.colorpicker__image}
        />
        <Swatches 
          colors={colors}
          setActiveColor={setActiveColor}
        />
        <h3 level={3} textAlign="center">{colors[activeColor].swatch.edges[0].node.name}</h3>
    </section>
}
export default ColorPicker;