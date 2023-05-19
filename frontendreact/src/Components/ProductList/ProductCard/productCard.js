import React from "react";
import { BoxInsideCard, ImageBox, ImageStyle, InfoBox, Button } from "./ProductCardStyle";

export const ProductCard = (props) => {

    return (
        <BoxInsideCard>
        <ImageBox>
        <ImageStyle src={props.produto.imageUrl}/>
        </ImageBox>
        <InfoBox>
        <h3>Produto: {props.produto.name}</h3>
        <h3>Valor: {props.produto.value}</h3>
        <Button onClick={() => props.adicionaItensCarrinho(props.produto)}>Adicionar ao carrinho</Button>
        </InfoBox>
        </BoxInsideCard>
    
    )
}

