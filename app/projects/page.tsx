import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: "HELAL's projects",
  description: 'the projects that I have worked on',
};

/**
 * ==> props interface
 */
interface IProps {}

/**
 * ==> Component
 */
const page: FC<IProps> = ({}) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-40 my-28">
            {projects.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
