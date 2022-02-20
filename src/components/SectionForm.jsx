import React from 'react';
import 'Styles/sections.scss';

const SectionForm = () => {
  return (
    <form className="section__form" method={'POST'} action='mail.php'>
      <div className="container">
        <h2 className={'section__form-title'}>
          Give us your information and we´ll contact you
        </h2>
        <div>
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" id="name"
            placeholder={'Eg. John Peterson'} required={true}/>
        </div>
        <div>
          <label htmlFor="company">Company name</label>
          <input type="text" name="company" id="company"
            placeholder={'Eg. Peterson and Burgers'} required={true}/>
        </div>
        <div>
          <label htmlFor="phone">Mobile phone</label>
          <input type="phone" name="phone" id="phone"
            placeholder={'Eg. 913 5555 4321'} required={true}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"
            placeholder={'Eg. myemail@mail.com'} required={true}/>
        </div>
        <div className="section__form-checkbox">
          <input type="checkbox" id="data-agreement" name="marketing" required={true}/>
          <label htmlFor="data-agreement">I agree my data to be used by CKES
            for selling and marketing.</label>
        </div>
        <div className="section__form-checkbox">
          <input type="checkbox" id="privacy" required={true}/>
          <label htmlFor="privacy">I have read and agree the privacy
            policy provided by CKES.</label>
        </div>
        <input type="submit" className="section__button-form"
          value={'I want to be contacted'}/>
      </div>
    </form>
  );
};

export default SectionForm;
