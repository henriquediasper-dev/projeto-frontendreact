import styled from "styled-components";
import backgroundImage from "../src/Components/Assents/Images/background1.jpg";

export const AppStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #131313;
  /* gap: 16px; */
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;
