import { FC } from 'react';
import { PinContainer } from './Pin';
import { FaLocationArrow } from 'react-icons/fa6';

/**
 * ==> props interface
 */
interface IProps {
  item?: any;
}

/**
 * ==> Component
 */
const ProjectCard: FC<IProps> = ({ item }) => {
  return (
    <>
      <PinContainer
        className="space-y-3 relative w-full"
        title={item.title}
        href={item.link}
      >
        <img
          src={item.img}
          alt="cover"
          className="object-cover rounded-3xl bg-[#13162D] w-full h-[250px]"
        />

        <h3 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
          {item.title}
        </h3>

        <p className=" md:text-base text-[#BEC1DD] my-[1vh] lg:font-normal font-light text-sm line-clamp-2">
          {item.des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {item.iconLists.map((icon: any, index: any) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt="icon5" className="p-2" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2">
            <p className="flex lg:text-base md:text-xs text-sm text-purple">
              Check Live Site
            </p>
            <FaLocationArrow color="#CBACF9" />
          </div>
        </div>
      </PinContainer>
    </>
  );
};

export default ProjectCard;
