import {motion} from 'framer-motion';
import MainBanner from '../images/banner/main-banner.jpg';
import useMousePosition from '../../../utils/mousePosition';
import { TextRevealAnimation1 } from '../../../utils/animations/textRevealAnimations';

const Banner = ()=>{
    const {x, y} = useMousePosition(); 

    return(
        <motion.div className='motion-container' style={{height:'100vh',padding:0,x:0,position:'relative',overflow:'hidden',backgroundColor:'#f9f9f9'}}>

            <motion.div className='banner-title' transition={{duration:1.2, delay:0.8}} initial={{x:600}} animate={{x:0}}>
                HIRA
            </motion.div>

            <motion.div style={{backgroundImage:`url(${MainBanner})`}} className='banner-image' transition={{duration:1.2, delay:0.2}} initial={{y:-600}} animate={{y:0}}>
                <motion.div transition={{type:'spring'}} initial={{y:0,x:0, opacity: 0 }} animate={{y:y, x:x, opacity: 1 }} className='banner-hole'></motion.div>
                <motion.div className='banner-blur'></motion.div>
            </motion.div>
           
            
        </motion.div>
    )
}

export default Banner;