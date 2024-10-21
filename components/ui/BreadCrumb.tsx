/**
 * @file BreadCrumb.js
 * @module BreadCrumb
 * @description This component renders a breadcrumb navigation bar based on the provided data,
 *              helping users track their current location within the website.
 *              The breadcrumb visually separates the links with forward slashes (/).
 *              The last link in the breadcrumb is displayed as non-clickable text.
 *
 * @example
 * import BreadCrumb from './BreadCrumb';
 *
 * const breadcrumbData = [
 *   { id: 0, title: 'Home' },
 *   { id: 1, title: 'Projects' },
 *   { id: 2, title: 'Project-Name' }
 * ];
 *
 * <BreadCrumb Data={breadcrumbData} />;
 *
 * @param {Object} props - Component properties.
 * @param {Array.<Object>} [props.Data] - The array of breadcrumb data.
 * @param {number} props.Data[].id - Unique identifier for each breadcrumb link.
 * @param {string} props.Data[].title - The text displayed as the breadcrumb link.
 *
 * @returns {JSX.Element} The rendered breadcrumb component with dynamic links.
 *
 * @component
 */

import Link from 'next/link';
import React, { FC } from 'react';
import { Spotlight } from './Spotlight';

/**
 * ==> props interface
 */
interface IProps {
  Data?: {
    id: number;
    title: string;
  }[];
}

/**
 * ==> Component
 */
const BreadCrumb: FC<IProps> = ({ Data }) => {
  return (
    <>
      <section className="relative flex items-center h-[280px] p-0">
        {/* spotlight */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen z-10"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] z-10"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[50vh] w-[50vw] z-10"
          fill="blue"
        />

        {/* grid dots background */}
        <div>
          <div className="h-full w-full absolute top-0 left-0 z-0 dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>
        </div>

        {/* content */}
        <div className="container relative z-50 mt-24 text-gray-300">
          <Link href="/" className="hover:underline duration-200 text-base">
            Home
          </Link>
          <span className="mx-2">/</span>

          {Data?.map((link) => (
            <React.Fragment key={link.id}>
              {link.id !== Data.length - 1 ? (
                <>
                  <Link
                    href={`/${link.title}`}
                    className="hover:underline duration-200 text-base"
                  >
                    {link.title}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span className="text-white text-lg font-semibold">
                  {link.title}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default BreadCrumb;
