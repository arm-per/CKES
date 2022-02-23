import React, {useEffect} from 'react';
import FirstSection from 'Components/FirstSection';
import ListSection from 'Components/ListSection';
import mainIcon from 'Assets/shield-fill.svg';
import QuoteSection from 'Components/QuoteSection';
import image from 'Assets/Electricity/electrity2.jpg';
import image2 from 'Assets/Electricity/electrity3.jpg';
import cart from 'Assets/cart.svg';
import customer from 'Assets/customer.svg';
import SectionForm from 'Components/SectionForm';
import SectionBanner from 'Components/SectionBanner';
import icon from 'Assets/Electrical-icon.svg';
import bg from 'Assets/Electricity/electrity1.jpg';
import ImageBreaker from 'Components/ImageBraker';
import {scrollTop} from '../utilities/scrollTop';

const Electrical = () => {
  useEffect(()=>{
    scrollTop();
  }, []);

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
        title={'Services we offer'}
        listItems={['Electrical repair', 'Circuit breaker',
          'Electrical wiring', 'Electrical panels', 'Ceiling fans',
          'Generators', 'Light switches and outlets',
          'Indoor and outdoor lighting', 'Commercial electrical service']}
      />
      <QuoteSection image={image2}>
          Our electrical installation service uses the high quality materials
          to grant long-term useful life and your safety of course.
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
      {/* eslint-disable-next-line max-len */}
      { /* <CardContainer title={'Some of our solutions for you'} icon={supportIcon}>
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
      </CardContainer>*/ }
      <SectionForm/>
    </>
  );
};

export default Electrical;
