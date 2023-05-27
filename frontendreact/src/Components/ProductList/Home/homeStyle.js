import styled from "styled-components";

export const HomeStyle = styled.div`
  grid-column: 3/11;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.5rem;
  /* color: #333; */
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;

export const Select = styled.select`
  border: 1px solid #59E57F;
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 13px;
  background-color: #59E57F;
  color: #131313;
  outline: none;
`;

export const CardBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

export const HeaderHome = styled.header`
  text-align: center;
  h1 {color: #465188;}
`

// export const TituloStyle = styled.h2`
//   font-size: 20px;
//   color: #333;
// `;

// export const InputStyle = styled.input`
//   border: 1px solid #ccc;
//   border-radius: 1.5rem;
//   padding: 0.5rem;
//   font-size: 13px;
// `;