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
import icon from 'Assets/kitchen_icon.svg';
import bg from 'Assets/main-banner.jpg';
import ImageBreaker from 'Components/ImageBraker';

const Refrigeration = () => {
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
        We understand how important is to you to get high quality products
        to make your business grow up. Our advisors can help you to find the
        refrigerator or freezer you were looking for. We accompany you until

        you find the product that match your business and a nice deal of course.
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

export default Refrigeration;
