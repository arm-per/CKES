import React, {useEffect} from 'react';
import FirstSection from 'Components/FirstSection';
import ListSection from 'Components/ListSection';
import mainIcon from 'Assets/shield-fill.svg';
import QuoteSection from 'Components/QuoteSection';
import image from 'Assets/Kitchen/modern-equipment-1200.webp';
import image2 from 'Assets/Kitchen/stove-1200.webp';
import cart from 'Assets/cart.svg';
import customer from 'Assets/customer.svg';
import SectionForm from 'Components/SectionForm';
import SectionBanner from 'Components/SectionBanner';
import icon from 'Assets/Kitchens-icon.svg';
import bg from 'Assets/Kitchen/restaurant-1200.webp';
import ImageBreaker from 'Components/ImageBraker';
import {scrollTop} from '../utilities/scrollTop';

const Kitchen = () => {
  useEffect(()=>{
    scrollTop();
  }, []);

  return (
    <>
      <SectionBanner bg={bg} icon={icon}>
        <h1>Kitchens</h1>
      </SectionBanner>
      <FirstSection
        title={'Kitchen is the heart of your business'}
        icon={mainIcon}
      >
          Some say that while life may be created in the
          bedroom, it is certainly lived in the kitchen. It
          is where the meals are created – it fuels the bodies,
          minds and souls of friends and families all over the world
      </FirstSection>
      <ImageBreaker title={'Kitchen'} img={image2}/>
      <ListSection
        icon={cart}
        title={'Services we offer'}
        listItems={['Exhaust Hoods', 'Ovens gas and electric',
          'Deep fryers', 'Grills', 'Griddles and panini',
          'Range', 'Microwaves', 'Pizza ovens',
          'Kettle electric and steam', 'Gas line installation']}
      />
      <QuoteSection image={image}>
          Our kitchen equipment is the perfect pal to cook
          your delicious recipes that your customers love.
      </QuoteSection>
      <FirstSection
        title={'Advisory'}
        icon={customer}
      >
          Commercial kitchens should have as a minimum a deep
          clean every 12 months. Cleaning the exhaust hood and
          ductwork takes an average of 2-5 hours.
      </FirstSection>
      {/* eslint-disable-next-line max-len */}
      {/* <CardContainer title={'Some of our solutions for you'} icon={supportIcon}>
        <SolutionCard
          title={'CKES Refrigeration'}
          image={image}
          description={'lorem ipsum dolor sit amet consecuotor'}/>
        <SolutionCard
          title={'CKES Refrigeration'}
          image={image}
          description={'lorem ipsum dolor sit amet consecuotor'}/>
        <SolutionCard
          title={'CKES Refrigeration'}
          image={image}
          description={'lorem ipsum dolor sit amet consecuotor'}/>
        <SolutionCard
          title={'CKES Refrigeration'}
          image={image}
          description={'lorem ipsum dolor sit amet consecuotor'}/>
      </CardContainer> */}
      <SectionForm/>
    </>
  );
};

export default Kitchen;
