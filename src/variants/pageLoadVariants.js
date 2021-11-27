export const PageLoadVariant1 = {
    initial: {
        y:500,
        opacity: 0,
    },

    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'linear',
            duration: 0.6,
        },
    },

    exit: {
        opacity: 0,
        y: -500,
        transition: {
            ease: 'linear',
            duration: 0.6,
        },
    },
};