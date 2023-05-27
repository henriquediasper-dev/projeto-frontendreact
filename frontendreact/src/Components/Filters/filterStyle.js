import styled from "styled-components";

export const AsideStyleFilters = styled.aside`
  grid-column: 1/3;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  
  color: #333;
`;

export const TituloStyleFilters = styled.h2`
  font-size: 20px;
  
`;

export const InputStyleFilters = styled.input`
  padding: 0.5rem;
  font-size: 13px;
  border: 1px solid #59E57F;
  border-radius: 0.5rem;
  background-color: unset;
  color: #ffffff;
  &:focus{border: 1px solid #465188; outline:none}
`;
