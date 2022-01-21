import React from 'react';
import styled from 'styled-components';
import cm1 from 'Assets/customers/customer1.svg';
import cm2 from 'Assets/customers/customer2.svg';
import cm3 from 'Assets/customers/customer3.svg';
import cm4 from 'Assets/customers/customer4.svg';
import cm5 from 'Assets/customers/customer5.svg';
import cm6 from 'Assets/customers/customer6.svg';
import cm7 from 'Assets/customers/customer7.svg';
import cm8 from 'Assets/customers/customer8.svg';
import cm9 from 'Assets/customers/customer9.svg';

const customers = [cm1, cm2, cm3, cm4, cm5, cm6, cm7, cm8, cm9];

const CustomerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    align-items: center;
    margin-block: 20px;
  
    & > img{
      display: block;
      width: 100px;
      height: 100px;
      object-fit: contain;
      box-sizing: border-box;
      padding: 8px;
      filter: saturate(0);
      transition: filter .3s;
      &:hover{
        filter: saturate(1);
        transition: filter .3s;
      }
    }
`;

const Customers = () => {
  return (
    <CustomerContainer>
      {
        customers.map((el, index) => {
          return <img src={el}
            key={`customer_${index}`}
            alt={`customer_${index}`}/>;
        })
      }
    </CustomerContainer>
  );
};

export default Customers;
