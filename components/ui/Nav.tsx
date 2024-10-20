import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { FaHome, FaPhoneAlt } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa6';
import { HiEmojiHappy } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';

/**
 * ==> props interface
 */
interface IProps {}

/**
 * ==> Component
 */
const Nav: FC<IProps> = ({}) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const navItems = [
    { name: 'Home', link: isHome ? '/' : '/', icon: <FaHome /> },
    { name: 'About', link: isHome ? '#about' : '/#about', icon: <FaInfo /> },
    {
      name: 'Projects',
      link: isHome ? '#projects' : '/projects',
      icon: <MdWork />,
    },
    {
      name: 'Testimonials',
      link: isHome ? '#testimonials' : '/#testimonials',
      icon: <HiEmojiHappy />,
    },
    {
      name: 'Contact',
      link: isHome ? '#contact' : '/#contact',
      icon: <FaPhoneAlt />,
    },
  ];
  return (
    <>
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
          )}
        >
          <span className="block sm:hidden text-xl font-bold ">
            {navItem.icon}
          </span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </Link>
      ))}
    </>
  );
};

export default Nav;
