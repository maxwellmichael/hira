import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const AnimatedCharacters = ({ children }) => {

  const { ref, inView } = useInView({ threshold: 0 });
  const controls = useAnimation();
  const classes = children.props.className;
  const style = children.props.style ? children.props.style : null;

  const containerVariant = {
    
    visible: {
      transition: {
        staggerDirection: 0.025,
      }
    }
  }

  const characterVariant = {
    hidden: {
      y: '100%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.9 },
    },
  }

  let words = children.props.children.split(" ");

  words.forEach((word, i) => {
    const characters = word.split('');
    words[i] = characters;
    words[i].push("\u00A0");
  })

  words = words.flat()


  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div ref={ref}>
      <motion.div className={classes} style={{ ...style, display: 'inline', whiteSpace: 'nowrap', overflow: 'hidden' }} variants={containerVariant} animate={controls} initial='hidden' >
        {words.map((word, i) => {
          return (
              <motion.span key={i} variants={characterVariant} animate={controls}>
                {word}
              </motion.span>
          )
        })}
      </motion.div>
    </div>
  );

};



export default AnimatedCharacters;
