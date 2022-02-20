import React from 'react';
import phone from 'Assets/phone-fill.svg';
import mail from 'Assets/mail-fill.svg';
import pin from 'Assets/map-pin-2-fill.svg';

const ContactButtons = () => {
  return (
    <div className="contact-grid">
      <div>
        <div className={'section__icon'}>
          <a href={`tel:${'913-333-7184'.split('-').join('')}`}>
            <img src={phone} alt={`phone-icon`} loading={'lazy'} width="40"/>
          </a>
        </div>
        <p>Call Us</p>
      </div>
      <div>
        <div className={'section__icon'}>
          <a href="mailto:service@callcks.com">
            <img src={mail} alt={`mail-icon`} loading={'lazy'} width="40"/>
          </a>
        </div>
        <p>Write Us</p>
      </div>
      <div>
        <div className={'section__icon'}>
          <a href="https://www.google.com/maps/place/1710+N+75+Dr,+Kansas+City,+KS+66112,+USA/@39.1241955,-94.7562815,17z/data=!4m13!1m7!3m6!1s0x87c08c93f3b63045:0xaca7ef2fdb6708ce!2s1710+N+75+Dr+1710+n+75,+Kansas+City,+KS+66112,+USA!3b1!8m2!3d39.1241914!4d-94.7540928!3m4!1s0x87c08c93f3b63045:0x9d799984e671e2ea!8m2!3d39.1241914!4d-94.7540928"
            target="_blank" rel="nofollow noreferrer noopener">
            <img src={pin} alt={`pin-icon`} loading={'lazy'} width="40"/>
          </a>
        </div>
        <p>Find Us</p>
      </div>

    </div>
  );
};

export default ContactButtons;
