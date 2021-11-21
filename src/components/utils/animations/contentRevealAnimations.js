import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {useEffect} from "react";

export const RevealFromBottom = ({children})=>{

    const { ref, inView } = useInView({ threshold: 0 });
    const controls = useAnimation();

    const controlsVariant = {
        initial:{
            y:200,
            opacity: 0,
        },
        animate:{
            y:0,
            opacity: 1,
            transition: {
                ease: 'linear',
                duration: 0.9,
            }
        }

    }

    useEffect(() => {
        if (inView) {
          controls.start('animate');
        }
        if (!inView) {
          controls.start('initial');
        }
      }, [controls, inView]);
    

    return(
        <motion.div style={{minHeight:1, minWidth:'100%'}} variants={controlsVariant}  ref={ref}>
            {children}
        </motion.div>
    );
}