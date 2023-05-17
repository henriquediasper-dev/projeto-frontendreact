import React, { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { CardBox, HomeStyle, MenuBox } from "./HomeStyle";

export const Home = (props) => {
  const [ordination, setOrdination] = useState("");

  function onChangeOrdination(event){
    setOrdination(event.target.value)
  }

  let QuantidadeProdutos = 0;

  const listaDeProdutos = props.productList.map((item) => {
    QuantidadeProdutos++;
    
    return <ProductCard produto={item} key={item.id} />;
  });

  return (
    <HomeStyle>
      <MenuBox>
        <p>Quantidade de produtos: {QuantidadeProdutos}</p>
        <label>
          Ordenação:
          <select value={ordination} onchange={onChangeOrdination}>
            <option value={""} disabled>
              Selecione
            </option>
            <option value={"Crescente"}>Crescente</option>
            <option value={"Decrescente"}>Decrescente</option>
          </select>
        </label>
      </MenuBox>
      <CardBox>{listaDeProdutos}</CardBox>
    </HomeStyle>
  );
};

{
  /* <ProductCard produto={product}/> ..*/
}


