'use client';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { FC, memo, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

/**
 * ==> props interface
 */
interface IProps {}

/**
 * ==> Component
 */
const ScrollTop: FC<IProps> = ({}) => {
  const [hidden, setHidden] = useState(false);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      if (scrollYProgress.get() < 0.2) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    }
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="fixed inset-x-5 bottom-5 z-[99999] w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 duration-300 hover:bg-purple hover:text-black-200 bg-black-200 rounded-lg border border-black-300 text-xl"
        style={{
          display: hidden ? 'flex' : 'none',
        }}
      >
        <BiArrowToTop />
      </button>
    </>
  );
};

export default memo(ScrollTop);
