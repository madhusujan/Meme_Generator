import React from "react";
import styled from "styled-components";

const Meme = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
`;

const Header = styled.h2`
  position: absolute;
  width: 80%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px 0;
  padding: 0 5px;
  font-family: impact, sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  bottom: 20px;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
    2px 2px 5px #000;
`;

const Image = styled.img`
  width: 60%;
  max-height: 500px;
  margin-left: 20%;
`;

const MemeBox = props => {
  return (
    <Meme>
      <Header style={{ top: "0", bottom: "0" }}>{props.top_text}</Header>
      <Header>{props.buttom_text}</Header>
      <Image src={props.image} alt="" />
    </Meme>
  );
};

export default MemeBox;
