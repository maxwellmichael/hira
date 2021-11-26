import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@material-ui/core';

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
        <motion.img alt={`slide image 1`} variants={childVariant} src={image1} />
      </motion.div>

      <motion.div className='main-image'>
        <motion.video className='video' variants={mainChildVariant} autoPlay loop muted>
          <motion.source src={mainImage} type='video/mp4' />
        </motion.video>
        {/* <motion.img  src={mainImage} /> */}
      </motion.div>

      <motion.div className='child-container2'  >
        <motion.img alt={`slide image 2`} variants={childVariant} src={image2} />
      </motion.div>

      <motion.div className='child-container3' >
        <motion.img alt={`slide image 3`} variants={childVariant} src={image3} />
      </motion.div>

      <motion.div className='child-container4' >
        <motion.img alt={`slide image 4`} variants={childVariant} src={image4} />
      </motion.div>


    </motion.div>)
}
export const ImageInfiniteSlider = ({ image1, image2, image3, image4 }) => {

  const [images, setImages] = useState([{image:image1, pos:0},{image:image2, pos:50},{image:image3, pos:100},{image:image4, pos:150}])
  const isMobile = useMediaQuery('(max-width:900px)');
  const overflowPoint = isMobile?-39.9:-49.0;
  useEffect(()=>{
    let newImages = [...images]
    const overFlowedImage = images.filter(image=>image.pos<=overflowPoint)
    if(overFlowedImage.length===0){
      const interval = setInterval(() =>{
        newImages = images.map((Image)=>{ return({image:Image.image, pos:Image.pos-5})})
        setImages(newImages)
      }, 1000);
      return ()=>{
        clearInterval(interval);
      }
    }
    else{
      setImages((images)=>{
        let image = images[0];
        image.pos=images[3].pos+50;
        images.push(image);
        images = images.slice(1);
        return images;
      })
    }
  },[images, overflowPoint])
//style={{x:`${image.pos}vw`}}
  return (
    <div className='images-slide-animation-main' >
      <div className='slider'>
        <AnimatePresence>
        {images.map((image,i)=>(
          <motion.div 
            key={i} 
            transition={{duration:1, ease:'linear'}} 
            initial='hidden' 
            exit='hidden'
            animate={{x:[`${image.pos+5}vw`, `${image.pos+4}vw`, `${image.pos+3}vw`, `${image.pos+2}vw`, `${image.pos+1}vw`,`${image.pos}vw`]}} 
            
            className='child-container' >
            <motion.img alt={`slide image ${i}`} src={image.image} />
          </motion.div>
        ))}
        </AnimatePresence>
          
      </div>
    </div>)
}




