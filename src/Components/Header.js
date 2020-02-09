import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  background: #0068b3; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #8aceff, #0068b3);
`;

const Title = styled.h1`
  color: white;
`;

const Image = styled.img`
  height: 80%;
  margin-left: 10%;
`;

function Header() {
  return (
    <HeaderDiv>
      <Image
        src="https://i.pinimg.com/originals/26/6e/73/266e735438b81e0f3ff90a023da668b3.png"
        alt="Problem?"
      />
      <Title>LOL Meme Generator</Title>
    </HeaderDiv>
  );
}

export default Header;
