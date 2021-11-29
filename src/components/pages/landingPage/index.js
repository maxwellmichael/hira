import { AnimatePresence, motion } from 'framer-motion';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { PageLoadVariant1 } from '../../../variants/pageLoadVariants';
import { ImagesRevealAnimation, ImageInfiniteSlider } from '../../utils/animations/imagesRevealAnimation';
import { RevealFromBottom, RevealFromLeft, RevealFromRight } from '../../utils/animations/contentRevealAnimations';
import TextAnimation1 from '../../utils/animations/textAnimations';
import { HIDE_LOADER, INCREMENT_LOADER_VALUE, SHOW_LOADER } from '../../../redux/actions/loader.actions';

//   Images & Videos
import FixedBanner from '../../../images/banners/dress-banner-desktop.webp';

import AnimationVideo from '../../../images/banners/landing-page-video.webm'
import AnimationVideoMobile from '../../../images/banners/landing-page-video-mobile.webm'

import AnimationImage1 from '../../../images/banners/animation-image-1.webp';
import AnimationImage2 from '../../../images/banners/animation-image-2.webp';
import AnimationImage3 from '../../../images/banners/animation-image-3.webp';
import AnimationImage4 from '../../../images/banners/animation-image-4.webp';

import AnimationImageMobile1 from '../../../images/banners/animation-image-1-mobile.webp';
import AnimationImageMobile2 from '../../../images/banners/animation-image-2-mobile.webp';
import AnimationImageMobile3 from '../../../images/banners/animation-image-3-mobile.webp';
import AnimationImageMobile4 from '../../../images/banners/animation-image-4-mobile.webp';

import Lookbook1 from '../../../images/banners/lookbook-1.webp'
import Lookbook2 from '../../../images/banners/lookbook-2.webp';
import Lookbook3 from '../../../images/banners/lookbook-3.webp';
import Lookbook4 from '../../../images/banners/lookbook-4.webp';

import LookbookMobile1 from '../../../images/banners/lookbook-1-mobile.webp'
import LookbookMobile2 from '../../../images/banners/lookbook-2-mobile.webp';
import LookbookMobile3 from '../../../images/banners/lookbook-3-mobile.webp';
import LookbookMobile4 from '../../../images/banners/lookbook-4-mobile.webp';

import BoxImage1 from '../../../images/banners/box-image1.webp';
import BoxImage2 from '../../../images/banners/box-image2.webp';






const LandingPage = ({dispatch }) => {


    const isMobile = useMediaQuery('(max-width:900px)');
   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const loadableImages = [
            {
                id: 1,
                src: FixedBanner,
                loadPoint: 10,
            },
            {
                id: 2,
                src: window.innerWidth<=900 ? AnimationImageMobile1 : AnimationImage1,
                loadPoint: 10,
            },
            {
                id: 3,
                src: window.innerWidth<=900 ? AnimationImageMobile2 : AnimationImage2,
                loadPoint: 10,
            },
            {
                id: 4,
                src: window.innerWidth<=900 ? AnimationImageMobile3 : AnimationImage3,
                loadPoint: 10,
            },
            {
                id: 5,
                src: window.innerWidth<=900 ? AnimationImageMobile4 : AnimationImage4,
                loadPoint: 10,
            },
            {
                id: 6,
                src: window.innerWidth<=900 ? LookbookMobile1 : Lookbook1,
                loadPoint: 10,
            },
            {
                id: 7,
                src: window.innerWidth<=900 ? LookbookMobile2 : Lookbook2,
                loadPoint: 10,
            },
            {
                id: 8,
                src: window.innerWidth<=900 ? LookbookMobile3 : Lookbook3,
                loadPoint: 10,
            },
            {
                id: 9,
                src: window.innerWidth<=900 ? LookbookMobile4 : Lookbook4,
                loadPoint: 10,
            },
            {
                id: 10,
                src: BoxImage1,
                loadPoint: 5,
            },
            {
                id: 11,
                src: BoxImage2,
                loadPoint: 5,
            },
    
        ];

        dispatch(SHOW_LOADER());
        const loadImage = image => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = image.src
                loadImg.onload = () => {
                    dispatch(INCREMENT_LOADER_VALUE(image.loadPoint))
                    return setTimeout(() => {
                        resolve(image.src)
                    }, 100)
                }

                loadImg.onerror = err => reject(err)
            })
        }

        Promise.all(loadableImages.map(image => loadImage(image)))
            .then(() => dispatch(HIDE_LOADER()))
            .catch(err => console.log("Failed to load images", err))
    }, [dispatch]);


    return (
        <motion.div key='landing-page' variants={PageLoadVariant1} initial="initial" animate="animate" exit="exit">
            <Grid style={{ margin: 0, padding: 0, overflow: 'hidden' }} className='landing-page' container>

                <Grid style={{ margin: '4rem 0 4rem 0', overflow: 'hidden' }} item xs={12}>
                    <motion.div className='headline1'>
                        <span style={{ fontWeight: 300 }} className='title1'>EXPLORING</span><br /> <span>The Fashion</span> <br /> <span style={{ fontWeight: 300 }} >Of Today</span>
                    </motion.div>
                    <ImageInfiniteSlider
                        image1={isMobile ? LookbookMobile1 : Lookbook1}
                        image2={isMobile ? LookbookMobile2 : Lookbook2}
                        image3={isMobile ? LookbookMobile3 : Lookbook3}
                        image4={isMobile ? LookbookMobile4 : Lookbook4}
                    />
                </Grid>


                <Grid item xs={12}>
                    <div className='headline1'>
                        <TextAnimation1 type="heading1" text="How we Choose" />
                    </div>
                </Grid>

                <Grid style={{ overflow: 'hidden', margin: ' 4rem 0' }} item xs={12} >
                    <RevealFromLeft>
                        <div className='box-content'>
                            <div className='image-section'>
                                <img src={BoxImage2} alt='black fashion' />
                            </div>
                            <div className='content-section'>
                                <div style={{ color: 'white', textAlign: 'center' }} className='headline1'>Material & Design</div>
                                <div style={{ color: 'white', textAlign: 'center', paddingTop: '1rem' }} className='subtitle2'>
                                    Clothing comfort is one of the most important attributes of textile materials. Comfort cannot be reliably predicted by any single lab test of a fabric or by any series of different fabric tests.
                                    This is because comfort is inherently subjective. We here at Hira Fashion select Clothing with the best Quality & Comfort.
                                </div>
                            </div>

                        </div>
                    </RevealFromLeft>
                </Grid>

                <Grid style={{ overflow: 'hidden', margin: '4rem 0' }} item xs={12} >
                    <RevealFromRight>
                        <div className='box-content'>
                            <div className='image-section'>
                                <img src={BoxImage1} alt='black fashion' />
                            </div>
                            <div className='content-section'>
                                <div style={{ color: 'white', textAlign: 'center' }} className='headline1'>Quality & Comfort</div>
                                <div style={{ color: 'white', textAlign: 'center', paddingTop: '1rem' }} className='subtitle2'>
                                    Clothing comfort is one of the most important attributes of textile materials. Comfort cannot be reliably predicted by any single lab test of a fabric or by any series of different fabric tests.
                                    This is because comfort is inherently subjective. We here at Hira Fashion select Clothing with the best Quality & Comfort.
                                </div>
                            </div>

                        </div>
                    </RevealFromRight>
                </Grid>


                <Grid style={{ margin: '8rem 0 8rem 0', overflow: 'hidden' }} item xs={12}>

                    <div className='headline1'>
                        <TextAnimation1 type="heading1" text="Best Of Designs" />
                    </div>
                    <RevealFromBottom>
                        <AnimatePresence>
                            <ImagesRevealAnimation
                                key='animation1'
                                mainImage={isMobile ? AnimationVideoMobile : AnimationVideo}
                                image1={isMobile ? AnimationImageMobile1 : AnimationImage1}
                                image2={isMobile ? AnimationImageMobile2 : AnimationImage2}
                                image3={isMobile ? AnimationImageMobile3 : AnimationImage3}
                                image4={isMobile ? AnimationImageMobile4 : AnimationImage4}
                            />
                        </AnimatePresence>
                    </RevealFromBottom>
                </Grid>

                <Grid style={{ overflow: 'hidden' }} item xs={12}>
                    <div className='fixed-banner'>
                        <div style={{ backgroundImage: `url(${FixedBanner})` }} className='image-layer'></div>
                        <div className='overlay'></div>
                        <div className='content-container'>
                            <div className='title headline1'>Up to 60% Off</div>
                            <button className='transparent-button'>SHOP NOW</button>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <RevealFromBottom>
                        <motion.div className='newsletter'>
                            <div className='small-title title1 subtitle1'>
                                NEWSLETTER
                            </div>
                            <div className='main-title headline6'>
                                Subscribe to get
                                the latest updates
                            </div>

                            <div className='content'>
                                <input placeholder='E-mail' type='text'></input>
                                <button className='primary-button'>SUBSCRIBE</button>
                            </div>
                        </motion.div>
                    </RevealFromBottom>
                </Grid>
            </Grid>
        </motion.div>
    )
}

// const mapStateToProps = (state) => {

//     return {
//         loader: state.loader,
//     }
// }

export default connect()(LandingPage);