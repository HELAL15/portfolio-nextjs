import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import Heading from './ui/Heading';

const Grid = () => {
  return (
    <section id="about">
      <div className="container">
        <Heading title="About" Span="Me" />
        <BentoGrid className="w-full mt-20">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              // remove icon prop
              // remove original classname condition
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
