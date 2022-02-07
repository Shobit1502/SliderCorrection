import React from 'react'
import './Card.css'

function Card({d}) {
    return (
        <div className="card">
          <h3>{d.name}</h3>
          <h2>{d.monthly} {d.currency}</h2>
          <span className="benefits">{d.benefits[0]}</span>
          <span className="benefits">{d.benefits[1]}</span>
          <span className="benefits">{d.benefits[2]}</span>
          <span className="benefits">{d.benefits[3]}</span>
          <button className="card_button">Choose</button>
        </div>
    )
}

export default Card

// import PropTypes from 'prop-types';
// import styled, { css } from 'styled-components';
// import { SwitcherContext } from '../context';
// import Button from './Button';
//
// const StyledCardWrapper = styled.div`
//   display: inline-grid;
//   width: 280px;
//   grid-gap: 15px;
//   padding: 27px 25px;
//   border-radius: 10px;
//   background-color: ${({ theme }) => theme.colors.white};
//   box-shadow: ${({ theme }) => theme.shadow};
//   @media ${({ theme }) => theme.breakpoints.lg} {
//     width: 315px;
//     grid-gap: 20px;
//     padding: 27px 28px;
//   }
//   ${({ awarded }) =>
//     awarded &&
//     css`
//       background-image: ${({ theme }) => theme.colors.gradient};
//       color: ${({ theme }) => theme.colors.white};
//       padding: 30px 25px;
//       @media ${({ theme }) => theme.breakpoints.lg} {
//         padding: 49px 28px;
//         box-shadow: none;
//       }
//     `}
//     ${({ roundedLeft }) =>
//       roundedLeft &&
//       css`
//         @media ${({ theme }) => theme.breakpoints.lg} {
//           border-radius: 10px 0 0 10px;
//         }
//       `}
//
//     ${({ roundedRight }) =>
//       roundedRight &&
//       css`
//         @media ${({ theme }) => theme.breakpoints.lg} {
//           border-radius: 0 10px 10px 0;
//         }
//       `}
// `;
//
// const StyledName = styled.h3`
//   font-size: ${({ theme }) => theme.fontSizes.l};
//   text-align: center;
// `;
//
// const StyledPrice = styled.span`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-weight: 700;
//   letter-spacing: -2px;
//   font-size: ${({ theme }) => theme.fontSizes.xxxl};
//   color: ${({ theme }) => theme.colors.darkGary};
//   @media ${({ theme }) => theme.breakpoints.lg} {
//     letter-spacing: 0;
//   }
//   ${({ awarded }) =>
//     awarded &&
//     css`
//       color: ${({ theme }) => theme.colors.white};
//     `}
// `;
//
// const StyledCurrency = styled.span`
//   font-size: ${({ theme }) => theme.fontSizes.xxl};
//   margin-right: 5px;
//   @media ${({ theme }) => theme.breakpoints.lg} {
//     margin-right: 8px;
//   }
// `;
//
// const StyledBenefitsWrapper = styled.div`
//   display: grid;
//   grid-gap: 1px;
//   margin-top: 5px;
//   @media ${({ theme }) => theme.breakpoints.lg} {
//     grid-gap: 3px;
//   }
// `;
//
// const StyledBenefit = styled.span`
//   font-size: ${({ theme }) => theme.fontSizes.s};
//   text-align: center;
//   padding: 14px 0;
//   font-weight: 700;
//   border-top: 1px solid ${({ theme }) => theme.colors.lighGary};
//   &:last-child {
//     border-bottom: 1px solid ${({ theme }) => theme.colors.lighGary};
//   }
//   @media ${({ theme }) => theme.breakpoints.lg} {
//     font-size: ${({ theme }) => theme.fontSizes.m};
//   }
// `;
//
// const Card = ({ awarded, roundedLeft, roundedRight, content }) => {
//   const { name, monthly, annually, currency, benefits } = content;
//   return (
//     <SwitcherContext.Consumer>
//       {(switcher) => (
//         <StyledCardWrapper awarded={awarded} roundedLeft={roundedLeft} roundedRight={roundedRight}>
//           <StyledName>{name}</StyledName>
//           <StyledPrice awarded={awarded}>
//             <StyledCurrency>{currency}</StyledCurrency>
//             {switcher.checked ? monthly : annually}
//           </StyledPrice>
//           <StyledBenefitsWrapper>
//             {benefits.map((item) => (
//               <StyledBenefit key={item}>{item}</StyledBenefit>
//             ))}
//           </StyledBenefitsWrapper>
//           <Button awarded={awarded}>Learn more</Button>
//         </StyledCardWrapper>
//       )}
//     </SwitcherContext.Consumer>
//   );
// };
//
// Card.propTypes = {
//   awarded: PropTypes.bool,
//   roundedLeft: PropTypes.bool,
//   roundedRight: PropTypes.bool,
//   content: PropTypes.shape(),
// };
//
// Card.defaultProps = {
//   awarded: false,
//   roundedLeft: false,
//   roundedRight: false,
//   content: {
//     name: '-',
//     monthly: '-',
//     annually: false,
//     currency: '-',
//     benefits: ['-', '-', '-'],
//   },
// };
//
// export default Card;
