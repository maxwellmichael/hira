import {motion, AnimatePresence} from 'framer-motion';
import CauroselImage1 from '../assets/caurosel/caurosel-1.webp';
import CauroselImage2 from '../assets/caurosel/caurosel-2.webp';
import CauroselImage3 from '../assets/caurosel/caurosel-3.webp';
import MobileCauroselImage1 from '../assets/caurosel/mobile-caurosel-1.jpg';
import MobileCauroselImage2 from '../assets/caurosel/mobile-caurosel-2.jpg';
import MobileCauroselImage3 from '../assets/caurosel/mobile-caurosel-3.jpg';
import {useState, useEffect} from 'react';
import {GoPrimitiveDot} from 'react-icons/go';
import {useMediaQuery} from '@material-ui/core'
//import {Carousel} from 'react-bootstrap';
const Caurosel = ()=>{

    const [imageIndex, setImageIndex] = useState(0)
    const isMobile = useMediaQuery('(max-width:900px)');
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(imageIndex>=2){
                setImageIndex(0);
            }
            else if(imageIndex<2){
                setImageIndex(imageIndex+1)
            }
        }, 2500);
        return ()=>clearInterval(interval)
    })
    const [slideEnterDirection, setSlideEnterDirection] = useState(-300)
    const [slideExitDirection, setSlideExitDirection] = useState(600)

    const cauroselItems = [
        {
            imageUrl: isMobile?MobileCauroselImage1:CauroselImage1,
        },
        {
            imageUrl: isMobile?MobileCauroselImage2:CauroselImage2,
        },
        {
            imageUrl: isMobile?MobileCauroselImage3:CauroselImage3,
        }
    ];

    
    const handleCauroselNavClick=async (i)=>{
        console.log(`nextIndex:${i}, currentImageIndex:${imageIndex}`)
        console.log(`slideEnterDirection:${slideEnterDirection}, slideExitDirection:${slideExitDirection}`)

        if(i>imageIndex){
            await setSlideExitDirection(600)
            await setSlideEnterDirection(-300)
            
            setImageIndex(i)
        }
        else if(i<imageIndex){
            await setSlideExitDirection(-600)
            await setSlideEnterDirection(300)
            setImageIndex(i)
        }
    }

   

    return(
        <motion.div className='motion-container' transition={{duration:1}} initial={{y:300, opacity: 0 }} animate={{y:0, opacity: 1 }}>
            <div className='caurosel-main'>
                <div className='caurosel-image-slider'>
                    <AnimatePresence>
                        <motion.div
                        key={imageIndex}
                        initial={{ opacity: 0, x: slideEnterDirection }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: slideExitDirection }}
                        transition={{duration:0.2}}
                        className='caurosel-image' style={{backgroundImage:`url(${cauroselItems[imageIndex].imageUrl})`}}>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className='caurosel-nav-buttons'>
                    {cauroselItems.map((item, i)=><button onClick={()=>handleCauroselNavClick(i)} key={i}><GoPrimitiveDot /></button>)}
                </div>
            </div>
        </motion.div>
    )
}

export default Caurosel;