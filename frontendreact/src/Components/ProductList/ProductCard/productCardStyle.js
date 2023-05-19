import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
`;

export const ImageBox = styled.div`
  height: 70%;
`;

export const ImageStyle = styled.img`
  border-radius: 10px;
  height: 250px;
  width: 200px;
`;

export const BoxInsideCard = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  padding: 0.5vw;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 30%;
`;
