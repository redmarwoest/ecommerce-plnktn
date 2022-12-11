export const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export const container = {
  show: {
    transition: {
      staggerChildren: 0.15,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 2,
    },
  },
  hide: {
    y: -20,
    opacity: 0,
  },
};

export const variantsTwo = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  hide: {
    y: 0,
    opacity: 0,
  },
};

export const variantsThree = {
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
      delay: 3,
    },
  },
  hide: {
    opacity: 0,
  },
};
