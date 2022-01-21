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
import icon from 'Assets/AirConditioner-icon.svg';
import bg from 'Assets/main-banner.jpg';
import ImageBreaker from 'Components/ImageBraker';

const AirConditioner = () => {
  return (
    <>
      <SectionBanner bg={bg} icon={icon}>
        <h1>Air conditioner</h1>
      </SectionBanner>
      <FirstSection
        title={'Air Conditioning and Heating\n' +
            'Is the core of your work'}
        icon={mainIcon}
      >
          Comfort. Because of newer technology,
        {/* eslint-disable-next-line react/no-unescaped-entities */}
          today's HVAC equipment produces more even
          heating, helps maintain a constant temperature
          in every room in your home, provides consistent
          levels of air flow, and has superior humidity
          control. All of that adds up to a more
          comfortable home to live in.
      </FirstSection>
      <ImageBreaker title={'Kitchen'} img={image}/>
      <ListSection
        icon={cart}
        title={'Which products and services do we offer?'}
        listItems={['Mini Split',
          'Air Conditioners, furnaces and heat pumps',
          'Roof Top units',
          'Natural gas, electric and propane heaters',
          'Cooling Towers', 'Gas Line installation',
          'Boilers hot water and steam heat',
          'Water source and geothermal heat pumps']}
      />
      <QuoteSection image={image}>
        Our refrigerators help you to keep all of your items cold,
        fresh and safe.
      </QuoteSection>
      <FirstSection
        title={'Advisory'}
        icon={customer}
      >
          The benefits of maintenance contracts include financial
          savings, product quality assurance, and peace of mind.
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

export default AirConditioner;
