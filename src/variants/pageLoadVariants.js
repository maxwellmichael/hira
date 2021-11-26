export const PageLoadVariant1 = {
    initial: {
        x:500,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            ease: 'linear',
            duration: 1,
        },
    },

    exit: {
        opacity: 0,
        x: -500,
        transition: {
            ease: 'linear',
            duration: 1,
        },
    },
};