import { FaLocationArrow } from 'react-icons/fa6';

import MagicButton from './MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-black-100 relative h-screen ">
      {/* spots */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen z-10"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] z-10"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw] z-10"
          fill="blue"
        />
      </div>
      {/* grid dots background */}
      <div>
        <div className="h-screen w-full absolute top-0 left-0 z-0 dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      {/* content */}
      <div className="flex justify-center items-center relative h-screen z-10 ">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw]  flex justify-center items-center flex-col ">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 nax-w-80">
            dynamic web page with nextjs
          </h1>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming concepts into seamless user experiences"
          />
          <p className="text-center text-base md:text-lg">
            Hi I&apos;m Ahmed Helal, A Frontend Developer with a passion for
            creating beautiful and functional user interfaces.
          </p>
          <Link href={'#about'}>
            <MagicButton
              title="show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
