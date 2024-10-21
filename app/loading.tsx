'use client';
import { FC } from 'react';
import Lottie from 'react-lottie';
import animationData from '@/data/loader.json';

/**
 * ==> props interface
 */
interface IProps {}

/**
 * ==> Component
 */
const loading: FC<IProps> = ({}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <div className="bg-black-100 flex justify-center items-center h-screen w-screen absolute top-0 left-0 z-[99999999] ">
        <div className="w-40 h-40">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </>
  );
};

export default loading;
