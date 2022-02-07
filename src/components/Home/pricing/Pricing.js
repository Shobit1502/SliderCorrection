import React, { useState } from 'react';
// import styled from 'styled-components';
import Card from "./Card"
import "./Pricing.css";
import PriceData from "./PriceData"


import ScrollContainer from 'react-indiana-drag-scroll'


// const StyledPricingWrapper = styled.div`
//   position: relative;
//   display: grid;
//   justify-items: center;
//   grid-gap: 30px;
//   padding: 55px 0;
//   @media ${({ theme }) => theme.breakpoints.lg} {
//     position: fixed;
//     padding: 65px 0;
//     grid-gap: 35px;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//   }
// `;
const basic = {
  name: 'Basic',
  monthly: '19.99',
  annually: '199.99',
  currency: '$',
  benefits: ['500 GB Storage', '2 Users Allowed', 'Send up to 3GB'],
};

const pro = {
  name: 'Professional',
  monthly: '24.99',
  annually: '249.99',
  currency: '$',
  benefits: ['1 TB Storage', '5 Users Allowed', 'Send up to 10GB'],
};

const master = {
  name: 'Master',
  monthly: '39.99',
  annually: '399.99',
  currency: '$',
  benefits: ['2 TB Storage', '10 Users Allowed', 'Send up to 20GB'],
};


const Pricing = () => {
  const [checked, setChecked] = useState(false);


  // const slider = document.querySelector('.pricing_section_cards');
  // let isDown = false;
  // let startX;
  // let scrollLeft;
  //
  // slider.addEventListener('mousedown', (e) => {
  //   isDown = true;
  //   slider.classList.add('active');
  //   startX = e.pageX - slider.offsetLeft;
  //   scrollLeft = slider.scrollLeft;
  // });
  // slider.addEventListener('mouseleave', () => {
  //   isDown = false;
  //   slider.classList.remove('active');
  // });
  // slider.addEventListener('mouseup', () => {
  //   isDown = false;
  //   slider.classList.remove('active');
  // });
  // slider.addEventListener('mousemove', (e) => {
  //   if(!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - slider.offsetLeft;
  //   const walk = (x - startX) * 3; //scroll-fast
  //   slider.scrollLeft = scrollLeft - walk;
  //   console.log(walk);
  // });

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <section
      className="portfolio"
      id="Pricing"
      style={{ padding: "40px 0 100px 0px" }}
    >

      <div className="pricing_section">
      <div className="section-title__2">
        <h2>Pricing Component</h2>
        <p>Our pricing</p>
        <div className="hiringtext">
          KSS is hiring! We are interested in passionate candidates who can
          bring their skills, creativity or experience and grow in a
          problem-solving environment.See the details below.
        </div>
        </div>

        <label class="switch">
        <input type="checkbox" onChange={handleChange}/>
        <span class="slider round"></span>
        </label>
        <ScrollContainer className="pricing_section_cards scroll-container">
        {PriceData.map(d=>
        (  <Card d={d}/>)
        )}
        </ScrollContainer>
      </div>
      </section>

  );
};

export default Pricing;
