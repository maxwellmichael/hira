import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const ImagesRevealAnimation = ({ mainImage, image1, image2, image3, image4 }) => {
  const { ref, inView } = useInView({ threshold: 0 });
  const controls = useAnimation();

  const containerVariant = {
    show: {
      transition: {
        staggerChildren: 1,
      }
    },

  };

  const mainChildVariant = {
    hidden: { opacity: 0, y: 300 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  }

  const childVariant = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };



  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);


  return (
    <motion.div ref={ref} className='images-reveal-animation-main' variants={containerVariant} animate={controls}>

      <motion.div className='child-container1'  >
        <motion.img variants={childVariant} src={image1} />
      </motion.div>

      <motion.div className='main-image'>
        <motion.video className='video' variants={mainChildVariant} autoPlay loop muted>
          <motion.source src={mainImage} type='video/mp4' />
        </motion.video>
        {/* <motion.img  src={mainImage} /> */}
      </motion.div>

      <motion.div className='child-container2'  >
        <motion.img variants={childVariant} src={image2} />
      </motion.div>

      <motion.div className='child-container3' >
        <motion.img variants={childVariant} src={image3} />
      </motion.div>

      <motion.div className='child-container4' >
        <motion.img variants={childVariant} src={image4} />
      </motion.div>


    </motion.div>)
}


