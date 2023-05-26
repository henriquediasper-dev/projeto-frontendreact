import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  cursor: pointer;
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #59E57F;
  color: #465188;
  font-weight: bold;
  font-size: 13px;
  border: none;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const ImageBox = styled.div`
  height: 70%;
`;

export const ImageStyle = styled.img`
  border-radius: 0.5rem;
  height: 250px;
  width: 200px;
`;

export const BoxInsideCard = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
  box-shadow: 0.5rem 0.5rem 1rem 0 rgba(89,229,127,0.5);
  border-radius: 1.5rem;
  padding: 1rem;
  border: 1px solid #465188;
  gap: 0.5rem;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 30%;
  gap: 0.5rem;
`;
