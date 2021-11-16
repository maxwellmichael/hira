import { motion, AnimatePresence } from 'framer-motion';
import CauroselImage1 from '../assets/caurosel/caurosel-1.webp';
import CauroselImage2 from '../assets/caurosel/caurosel-2.webp';
import CauroselImage3 from '../assets/caurosel/caurosel-3.webp';
import MobileCauroselImage1 from '../assets/caurosel/mobile-caurosel-1.jpg';
import MobileCauroselImage2 from '../assets/caurosel/mobile-caurosel-2.jpg';
import MobileCauroselImage3 from '../assets/caurosel/mobile-caurosel-3.jpg';
import { useState, useEffect } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { useMediaQuery } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
const Caurosel = () => {

    const [imageIndex, setImageIndex] = useState(0)
    const isMobile = useMediaQuery('(max-width:900px)');
    useEffect(() => {
        const interval = setInterval(() => {
            if (imageIndex >= 2) {
                setImageIndex(0);
            }
            else if (imageIndex < 2) {
                setImageIndex(imageIndex + 1)
            }
        }, 2500);
        return () => clearInterval(interval)
    })
    const [slideEnterDirection, setSlideEnterDirection] = useState(-300)
    const [slideExitDirection, setSlideExitDirection] = useState(600)

    const cauroselItems = [
        {
            imageUrl: isMobile ? MobileCauroselImage1 : CauroselImage1,
        },
        {
            imageUrl: isMobile ? MobileCauroselImage2 : CauroselImage2,
        },
        {
            imageUrl: isMobile ? MobileCauroselImage3 : CauroselImage3,
        }
    ];


    const handleCauroselNavClick = async (i) => {
        console.log(`nextIndex:${i}, currentImageIndex:${imageIndex}`)
        console.log(`slideEnterDirection:${slideEnterDirection}, slideExitDirection:${slideExitDirection}`)

        if (i > imageIndex) {
            setSlideExitDirection(600)
            setSlideEnterDirection(-300)

            setImageIndex(i)
        }
        else if (i < imageIndex) {
            setSlideExitDirection(-600)
            setSlideEnterDirection(300)
            setImageIndex(i)
        }
    }



    return (
        <div className='caurosel-main'>
            <div className='caurosel-image-slider'>
                <AnimatePresence>
                    <motion.div
                        key={imageIndex}
                        initial={{ opacity: 0, x: slideEnterDirection }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: slideExitDirection }}
                        transition={{ duration: 0.01, delay: 2 }}
                        className='caurosel-image' style={{ backgroundImage: `url(${cauroselItems[imageIndex].imageUrl})` }}>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className='caurosel-nav-buttons'>
                {cauroselItems.map((item, i) => <IconButton style={{margin:'auto'}} onClick={() => handleCauroselNavClick(i)} key={i}><GoPrimitiveDot style={{color:imageIndex===i?'black':'#e1e1e1'}} className='icon' /></IconButton>)}
            </div>
        </div>
    )
}

export default Caurosel;