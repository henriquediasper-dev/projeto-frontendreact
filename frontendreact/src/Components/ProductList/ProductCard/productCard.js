import React from "react";
import {
  BoxInsideCard,
  ImageBox,
  ImageStyle,
  InfoBox,
  Button,
} from "./ProductCardStyle";

export const ProductCard = (props) => {
  return (
    <BoxInsideCard>
      <ImageBox>
        <ImageStyle src={props.produto.imageUrl} />
      </ImageBox>
      <InfoBox>
        <h3>Produto: {props.produto.name}</h3>
        <p>Valor: {props.produto.value.toFixed(2)}</p>
        <Button onClick={() => props.adicionaItensCarrinho(props.produto)}>
          Adicionar ao carrinho
        </Button>
      </InfoBox>
    </BoxInsideCard>
  );
};
