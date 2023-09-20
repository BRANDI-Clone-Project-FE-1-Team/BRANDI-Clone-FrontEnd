import React from 'react';
import { styled } from 'styled-components';

const Card = ({ title, company, dc, price, img }) => {
  const byDay = '/byday.png';
  return (
    <CardUI>
      <ImgDiv>
        <ProductImg src={img} alt="" />
      </ImgDiv>
      <InfoCompany>
        <CompanyName>{company}</CompanyName>
        <img src={byDay} alt="" />
      </InfoCompany>
      <ProductTitle>{title}</ProductTitle>
      <InfoPrice>
        <DC>{dc}</DC>
        <SellingPrice>{price}원</SellingPrice>
      </InfoPrice>
    </CardUI>
  );
};

export default Card;

const CardUI = styled.div`
  width: 16rem;
  height: 23rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  width: 16rem;
  height: 18rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductImg = styled.img`
  height: 100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
const InfoCompany = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 0.1rem;
`;
const InfoPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;
const DC = styled.div`
  color: #ff204b;
  margin-right: 0.5rem;
  font-weight: bold;
`;
const SellingPrice = styled.div`
  font-weight: bold;
`;
const ProductTitle = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 1.1rem;
`;
const CompanyName = styled.p`
  height: 1.1rem;
  color: #808893;
  font-size: 0.8rem;
`;
