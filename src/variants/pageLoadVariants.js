export const PageLoadVariant1 = {
    initial: {
        y: 300,
        opacity: 0,
    },

    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 2.6,
        },
    },

    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 2,
        },
    },
};