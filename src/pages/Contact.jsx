import React from 'react';
import SectionForm from '../components/SectionForm';
import Map from '../components/Map';
import Icons from '../components/Icons';
import ContactButtons from '../components/ContactButtons';

const Contact = () => {
  return <main>
    <div className="container">

      <h1 className={'section__title'}>Contact Us</h1>
      <Icons/>
      <Map/>
      <address className="contact-address">
            1710 N 75TH DRIVE,
        <br/>Kansas City KANSAS 66112
      </address>
      <ContactButtons/>
    </div>
    <SectionForm/>
  </main>;
};

export default Contact;
