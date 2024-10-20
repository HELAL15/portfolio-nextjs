import { FC, memo } from 'react';

/**
 * ==> props interface
 */
interface IProps {
  title?: string;
  Span?: string;
}

/**
 * ==> Component
 */
const Heading: FC<IProps> = ({ title, Span }) => {
  return (
    <>
      <h2 className="heading">
        {title} <span className="text-purple">{Span}</span>
      </h2>
    </>
  );
};

export default memo(Heading);
