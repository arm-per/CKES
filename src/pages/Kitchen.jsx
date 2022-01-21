import React from 'react';
import FirstSection from 'Components/FirstSection';
import ListSection from 'Components/ListSection';
import mainIcon from 'Assets/shield-fill.svg';
import supportIcon from 'Assets/advisory.svg';
import QuoteSection from 'Components/QuoteSection';
import image from 'Assets/main-banner.jpg';
import cart from 'Assets/cart.svg';
import customer from 'Assets/customer.svg';
import SolutionCard from 'Components/SolutionCard';
import CardContainer from 'Components/CardContainer';
import SectionForm from 'Components/SectionForm';
import SectionBanner from 'Components/SectionBanner';
import icon from 'Assets/Kitchens-icon.svg';
import bg from 'Assets/main-banner.jpg';
import ImageBreaker from 'Components/ImageBraker';

const Kitchen = () => {
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
      <ImageBreaker title={'Kitchen'} img={image}/>
      <ListSection
        icon={cart}
        title={'Which products and services do we offer?'}
        listItems={['Elemento 1', 'Elemento 2']}
      />
      <QuoteSection image={image}>
        Our refrigerators help you to keep all of your items cold,
        fresh and safe.
      </QuoteSection>
      <FirstSection
        title={'Advisory'}
        icon={customer}
      >
          Commercial kitchens should have as a minimum a deep
          clean every 12 months. Cleaning the exhaust hood and
          ductwork takes an average of 2-5 hours.
      </FirstSection>
      <CardContainer title={'Some of our solutions for you'} icon={supportIcon}>
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
      </CardContainer>
      <SectionForm/>
    </>
  );
};

export default Kitchen;
