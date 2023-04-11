import styled from "styled-components";

export const Content = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Player = styled.div`
  background-color: black;
  padding: 2%;
  display: flex;
  flex-direction: row;
`;

export const TileSet = styled.div`
  flex: 1;
  z-index: 2;
  position: absolute;
  margin-top: 10%;
  margin-left: 2%;
`;

export const IMGBackground = styled.img`
  width: 50%;
  height: 50%;
  opacity: 30%;
  z-index: 1;
`;

export const TileSetHead = styled.img`
  position: absolute;
`;

export const TileSetBody = styled.img`
  position: absolute;
`;

export const TileSetWeapon = styled.img`
  position: absolute;
`;

export const HudContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1%;
  margin-left: 2%;
  flex-direction: Column; 
  background-color: grey;
  width: 100%;
`;

export const HeadContainer = styled.div`
  background-color: green;
  color: white;
  padding: 5%;
  width: 90%;
  text-align: center;
`;

export const BodyContainer = styled.div`
  width: 100%;
`;

export const BtnContainer = styled.button`
  width: 20%;
  background-color: white-smoke;
  border: 0;
`;

export const BtnIMG = styled.img`
  width: 100%;
`;
