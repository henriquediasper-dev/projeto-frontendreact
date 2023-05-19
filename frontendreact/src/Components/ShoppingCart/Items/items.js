import React from "react";
import { ButtonStyleHome } from "../Cart/CartStyle";

export const Items = (props) => {
    
    return (
    <>
    <p>Nome: {props.nome} R$: {props.valor * props.quantidade} Qnt: {props.quantidade}</p>
    
    <ButtonStyleHome onClick={() => props.removeItem(props.id)}>Remover</ButtonStyleHome>
    </>
    )
}