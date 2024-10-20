'use client';

import { FaLocationArrow } from 'react-icons/fa6';
import { projects } from '@/data';
import { PinContainer } from './ui/Pin';
import Link from 'next/link';
import MagicButton from './MagicButton';
import Heading from './ui/Heading';
import ProjectCard from './ui/ProjectCard';

const RecentProjects = () => {
  return (
    <section className="" id="projects">
      <div className="container">
        <Heading title="A small selection of" Span="recent projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-28 my-28">
          {projects.slice(1, 4).map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex items-center justify-center w-full">
          <Link href={'/projects'} className=" w-fit">
            <MagicButton title="show more projects" otherClasses="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
