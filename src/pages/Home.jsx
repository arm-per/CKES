import React, {useEffect} from 'react';
import SectionBanner from 'Components/SectionBanner';
import bg from 'Assets/kansas.webp';
import bg2 from 'Assets/teamwork.webp';
import ActionButton from 'Components/ActionButton';
import IconCardGrid from '../components/IconCardGrid';
import IconCards from '../components/IconCards';
import refrigerationIcon from 'Assets/Refrigeration-icon.svg';
import electricalIcon from 'Assets/Electrical-icon.svg';
import airConditionerIcon from 'Assets/AirConditioner-icon.svg';
import kitchenIcon from 'Assets/Kitchens-icon.svg';
import Customers from '../components/Customers';
import SectionForm from '../components/SectionForm';
import ImageBraker from '../components/ImageBraker';
import {SupportBanner} from '../components/SupportBanner';
import {scrollTop} from '../utilities/scrollTop';

const Home = () => {
  useEffect(()=>{
    scrollTop();
  }, []);

  return (
    <>
      <SectionBanner
        bg={bg} >
        <h1>Commercial <br/> Kitchen <br/>Services</h1>
        <ActionButton>Contact Us</ActionButton>
      </SectionBanner>
      <div className="container">
        <IconCardGrid>
          <IconCards
            title={'Refrigeration Equipment'}
            image={refrigerationIcon}
            color="blue">
                    The temperature in a refrigerator should be 40 °F or
                    below throughout the unit, so that any place is safe
                    for storage of any food.
          </IconCards>
          <IconCards
            title={'Cooking Equipment'}
            image={kitchenIcon}
            color="red">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
                    It's where food is prepared, cooked, and plated.
            {/* eslint-disable-next-line react/no-unescaped-entities */}
                    It's the center of the action in many other ways
          </IconCards>
          <IconCards
            title={'Heating and Air conditioning'}
            image={airConditionerIcon}
            color="blue">
                    Your HVAC systems should be checked by a
                    professional once a year.
          </IconCards>
          <IconCards
            title={'Electrical'}
            image={electricalIcon}
            color="red">
                    Electrical service wiring for, installing,
                    and repairing electrical apparatus and equipment
          </IconCards>
        </IconCardGrid>
        <section>
          <h2 className={'section__title'}>We respect your company</h2>
          <p className={'section__paragraph'}>
              Respect is our principal commitment and value.
              Your time, money and business will be safe with our service.
              No more worries, we are the ones you can trust.
          </p>
        </section>
        <ImageBraker img={bg2}/>
        <h2 className={'section__title'}>They trust in CKES</h2>
        <Customers/>
        <section>
          <h2 className={'section__title'}>Need support?</h2>
          <p className={'section__paragraph'}>
                  We will bring technical support just right
            {/* eslint-disable-next-line react/no-unescaped-entities */}
                  when you need. Doesn't matter if it’s morning,
                  evening or night, we are a call away.
          </p>
          <SupportBanner/>
        </section>
        <section>
          <h2 className={'section__title'}>Looking for
                  personalized attention?</h2>
        </section>
      </div>
      <SectionForm/>
    </>
  );
};

export default Home;
