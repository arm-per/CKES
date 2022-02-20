import styled from 'styled-components';
import React from 'react';
import icon from 'Assets/24hours.svg';
import image from 'Assets/customers_image.jpg';

const CallSection = styled.div`
  background-image: url("${(props) => props.bgimage}");
  display: block;
  width: 100%;
  padding-block: 40px;
  background-position: top center;
  background-size: cover;
  padding-inline: 20px;
  box-sizing: border-box;
  
  & img{
    width: 150px;
    height: 150px;
    display: block;
    margin-inline: auto;
  }
  
  & p{
    text-align: center;
    color: white;
    font-family: sans-serif;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

const CallButton = styled.a`
  display: block;
  padding: 20px;
  max-width: 300px;
  font-weight: bold;
  color: white;
  border: solid white 1px;
  border-radius: 5px;
  font-family: sans-serif;
  text-decoration: none;
  text-align: center;
  margin-inline: auto;
  
  &:hover{
    background-color: white;
    color: black;
    
  }
`;

export const SupportBanner = () => {
  return <>
    <CallSection bgimage={image}>
      <img src={icon} alt="24 hours icon"/>
      <p>Hours service</p>
      <CallButton href="tel:00000000"> Call Us</CallButton>
    </CallSection>
  </>;
};
