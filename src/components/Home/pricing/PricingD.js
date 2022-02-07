import React, { useState } from 'react';
// import styled from 'styled-components';
import "./PricingD.css";

import PriceData from "./PriceData";
import Slider from "react-slick";
// import ClientPriceCard from "./ClientPriceCard";
import ScrollContainer from 'react-indiana-drag-scroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientPriceCard from "./ClientPriceCard"

import  Card from "./Card";


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


const PricingD = () => {
  var settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false,
        slidesPerRow: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    rows: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    rows: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    rows: 1,
                },
            },
        ],
    };
    const rowsData = PriceData.reduce(function (rows, key, index) {
        console.log(rows, key, index, rows[rows.length - 1]);
        return (
            (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
            rows
        );
    }, []);
    return (
        <>
            <div className='contact-carousel-main'>
                <div className="SlideContent">
                    <h1 className="heading--xlarge main-heading">
                        GET IN TOUCH
                    </h1>
                    <Slider {...settings}>
                        {rowsData.map((data) => (
                            <ClientPriceCard data={data} key={data[0].id} />
                        ))}
                    </Slider>
                </div>
            </div>
            {/* <ContactMapCarousel /> */}
            
        </>
    );
};

export default PricingD;
