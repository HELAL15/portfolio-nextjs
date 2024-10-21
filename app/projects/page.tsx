import BreadCrumb from '@/components/ui/BreadCrumb';
import Heading from '@/components/ui/Heading';
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
const page: FC<IProps> = async ({}) => {
  // breadcrumb data
  const data = [
    {
      id: 0,
      title: 'projects',
    },
  ];

  const res = await fetch('http://localhost:3000/api/projects', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  const resBody = await res.json();
  const ppp = await resBody.data;

  return (
    <>
      <BreadCrumb Data={data} />
      <section className="pt-5">
        <div className="container">
          <Heading title="all my" Span="ptojects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-40 my-28">
            {ppp.map((item: any) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
