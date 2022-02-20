import React, {useEffect} from 'react';
import FirstSection from 'Components/FirstSection';
import ListSection from 'Components/ListSection';
import mainIcon from 'Assets/shield-fill.svg';
import supportIcon from 'Assets/advisory.svg';
import QuoteSection from 'Components/QuoteSection';
import image from 'Assets/Refrigeration/bar-fridge-1200.webp';
import image2 from 'Assets/Refrigeration/market-fridge-1200.webp';
import cart from 'Assets/cart.svg';
import customer from 'Assets/customer.svg';
import SolutionCard from 'Components/SolutionCard';
import CardContainer from 'Components/CardContainer';
import SectionForm from 'Components/SectionForm';
import SectionBanner from 'Components/SectionBanner';
import icon from 'Assets/Refrigeration-icon.svg';
import bg from 'Assets/Refrigeration/long-market-fridge-1200.webp';
import ImageBreaker from 'Components/ImageBraker';
import walkinfreezer from 'Assets/walkindoor.jpg';
import icemaker from 'Assets/icemaker.jpg';
import exhaust from 'Assets/exhausthood.jpg';
import {scrollTop} from '../utilities/scrollTop';

const Refrigeration = () => {
  useEffect(()=>{
    scrollTop();
  }, []);

  return (
    <>
      <SectionBanner bg={bg} icon={icon}>
        <h1>Refrigeration</h1>
      </SectionBanner>
      <FirstSection
        title={'Safe and fresh food for longer'}
        icon={mainIcon}
      >
        Are you looking for an effective and efficient refrigeration products
        to keep all your items safe, cold and fresh? We got the solution.
        <br/>Doesn’t matter if your business is small, medium or big, our
        product catalogue are adaptive to every needs, just let our experts
        advise you and choose the perfect choice.
      </FirstSection>
      <ImageBreaker title={'Kitchen'} img={image}/>
      <ListSection
        icon={cart}
        title={'Services we offer'}
        listItems={['Refrigeration equipment.', 'Installation and relocation.',
          'Portable refrigerators, refrigerators and freezer.',
          'Refrigeration showcases.', 'Ice machines', 'Exhaust fans',
          'Rack systems.', 'Ultra low temperature cooling',
          'Walk in Cooler and Freezer']}
      />
      <QuoteSection image={image2}>
        Our refrigerators help you to keep all of your items cold,
        fresh and safe.
      </QuoteSection>
      <FirstSection
        title={'Advisory'}
        icon={customer}
      >
          We understand how important is to you to get high quality
          service to ensure your business keeps running.
          Our service techs can advice and assist in every step
          to ensure peace of mind.
      </FirstSection>
      <CardContainer title={'Some of our solutions for you'} icon={supportIcon}>
        <SolutionCard
          title={'Walk in coolers and freezers'}
          image={walkinfreezer}
          description={'Manufacturers estimate the average lifespan of a' +
              'walk-in cooler or freezer to be about 15 years. However, ' +
              'with decent care and maintenance, they can last well' +
              'beyond that…'}/>
        <SolutionCard
          title={'Ice Makers'}
          image={icemaker}
          description={'The beauty of ice is that it\'s a high profit' +
              'product – it costs about $0.25 – $0.35 in raw material' +
              'to produce an ice bag that might sell for $1.50 and $3'}/>
        <SolutionCard
          title={'Exhaust Hood'}
          image={exhaust}
          description={'Type 1 hoods are to be used with appliances' +
              'that produce grease and smoke. ... Type 2 hoods are' +
              'to be used with appliances that produce only heat and' +
              'steam and no grease or smoke.'}/>
      </CardContainer>
      <SectionForm/>
    </>
  );
};

export default Refrigeration;
