import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 13px;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 10px;
  padding: 0.5vw;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 30%;
`;
