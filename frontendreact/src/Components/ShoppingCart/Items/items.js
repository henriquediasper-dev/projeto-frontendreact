import React from "react";
import { ButtonStyleHome } from "../Cart/CartStyle";
import { TituloStyle } from "./ItemsStyle";

export const Items = (props) => {
    return (
      <>
        <TituloStyle>
          <div>
            <span>Nome: {props.nome}</span>
          </div>
          <div>
            <span>R$: {props.valor * props.quantidade}</span>
          </div>
          <div>
            <span>Qnt: {props.quantidade}</span>
          </div>
        </TituloStyle>
  
        <ButtonStyleHome onClick={() => props.removeItem(props.id)}>
          Remover
        </ButtonStyleHome>
      </>
    );
  };