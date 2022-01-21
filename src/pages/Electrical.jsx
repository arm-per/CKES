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
import icon from 'Assets/Electrical-icon.svg';
import bg from 'Assets/main-banner.jpg';
import ImageBreaker from 'Components/ImageBraker';

const Electrical = () => {
  return (
    <>
      <SectionBanner bg={bg} icon={icon}>
        <h1>Electrical</h1>
      </SectionBanner>
      <FirstSection
        title={'Electrical is the core of your work'}
        icon={mainIcon}
      >
          Electricity is one of the most beneficial things
          the modern era has given us.  However, it also has its dark side.
          When mishandled, electricity can be fatal. Electrical issues
          should always be left in the care of the professionals. <br/>
          Commercial Kitchen Services have proven itself over time
          that they have the capability to satisfy the electrical
          needs of homes and businesses in the area.
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
          Secureness is the most important for us, we help you
          to prevent electrical accidents like Burns, Electrocution,
          Shock, Arc Flash/Blast, Fire and Explosions. We ensure
          your electrical installation works as new ones.
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

export default Electrical;
