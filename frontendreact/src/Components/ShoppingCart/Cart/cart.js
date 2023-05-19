import React from "react";
import { AsideStylerHome, TituloStyleHome } from "./CartStyle";
import { Items } from "../Items/Items";

export const Cart = (props) => {
  console.log(props.cart);

  const removeItem = (id) => {
    props.cart.map((produto) => {
      if (produto.id === id && produto.quantidade >= 1) {
        produto.quantidade = produto.quantidade - 1;
        props.setAmount(props.amount - produto.value)
        props.setCart([...props.cart]);
      }
      if (produto.quantidade === 0) {
        const novoCarrinho = props.cart.filter(
          (produtosRemovidos) => produtosRemovidos.quantidade !== 0
        );
        props.setAmount(props.amount - produto.value)
        props.setCart(novoCarrinho);
      }
    });
  };

  const renderizaItensDoCarrinho = props.cart.map((produto) => {
    return (
      <Items
        key={produto.id}
        id={produto.id}
        nome={produto.name}
        valor={produto.value}
        quantidade={produto.quantidade}
        removeItem={removeItem}
      />
    );
  });

  return (
    <>
      <AsideStylerHome>
        <TituloStyleHome>Carrinho</TituloStyleHome>
        {renderizaItensDoCarrinho}
        <p>Total:{props.amount.toFixed(2)}</p>
      </AsideStylerHome>
    </>
  );
};
