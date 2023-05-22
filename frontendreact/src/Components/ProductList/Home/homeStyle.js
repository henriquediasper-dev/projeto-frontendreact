import styled from "styled-components";
export const HomeStyle = styled.div`
  grid-column: 3/11;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  color: #333;
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 3%;
`;

export const Select = styled.select`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px;
  font-size: 13px;
  background-color: #fff;
  color: #333;
`;

export const CardBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1%;
  padding: 1% 3%;
`;

export const TituloStyle = styled.h2`
  font-size: 20px;
  color: #333;
`;

export const InputStyle = styled.input`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px;
  font-size: 13px;
`;