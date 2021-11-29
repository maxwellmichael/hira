import React, {useRef, useEffect} from 'react';
import { motion } from 'framer-motion';
import Counter from './counter';

function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}

const LoadingView = ({value}) => {

    const loadingVariant = {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.6,
            }
        },
        exit: {
            y: '-100vh',
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.6,
            }
        }
    }

    const preValue = usePrevious(value);

    return (
        <motion.div variants={loadingVariant} className='loading-main' initial='initial' animate='animate' exit='exit'>
            <div className='spinner'>  </div>
            <div style={{ color: 'white', textAlign: 'center' }} className='title1 headline1'>
                <Counter from={preValue?preValue:0} to={value} />
            </div>
        </motion.div>
    );
}

export default LoadingView;
