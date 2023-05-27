import styled from "styled-components";

export const AsideStylerHome = styled.aside`
  grid-column: 11/13;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  color: #333;

  img {
    height: 2rem;
    width: 2rem;
  }
`;

export const HeaderCarrinho = styled.div`
  display: inline-flex; 
  gap: 0.5rem;
  text-align:center; 
  width: 100%; 
  justify-content: center;
`;

export const TituloStyleHome = styled.h2`
  font-size: 20px;
`;

export const ButtonStyleHome = styled.button`
  border: none;
  background-color: #f5744b;
  color: #fff;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
`;

export const TotalLine = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  align-items: center;
`
