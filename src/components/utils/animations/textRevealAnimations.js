import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const TextRevealAnimation1 = (props)=>{
    const { ref, inView} = useInView({threshold:props.threshold});
    const controls = useAnimation();
    const values = props.children.props.children.split('');

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
      }, [controls, inView]);


    return(
        <motion.div ref={ref} initial='hidden' animate={controls}>
            <div className={props.children.props.className} style={props.children.props.style?props.children.props.style:null}>
            {inView && values.map((value,i)=><motion.span transition={{duration:1}} initial={{opacity: 0 }} animate={{ opacity: 1 }} key={i}>{value}</motion.span>)}
            </div>
        </motion.div>
    )
}

