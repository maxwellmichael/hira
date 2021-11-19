import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const TextRevealAnimation1 = (props) => {
  const { ref, inView } = useInView({ threshold: 0 });
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


  return (
    <motion.div ref={ref} initial='hidden' animate={controls}>
      <div className={props.children.props.className} style={props.children.props.style ? props.children.props.style : null}>
        {inView && values.map((value, i) => <motion.span transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={i}>{value}</motion.span>)}
      </div>
    </motion.div>
  )
}


export const TextFallFromTop = (props) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const controls = useAnimation();
  const values = props.children.props.children.split('');

  const variant = {
    initial: { opacity: 0, y: -200 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'linear',
        duration: 0.6,
      },
    },

  }

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition:{
          ease:'backInOut',
          duration: 1.2,
        }
      });
    }
    if (!inView) {
      controls.start({
        y: 200,
        opacity: 0,
      });
    }
  }, [controls, inView]);




  return (
    <motion.div ref={ref} initial='hidden' animate={controls}>
      <motion.div  className={props.children.props.className} style={props.children.props.style ? props.children.props.style : null}>
        {inView && values.map((value, i) => <motion.span animate='animate' initial='inital' variants={variant} key={i}>{value}</motion.span>)}
      </motion.div>
    </motion.div>
  )
}

