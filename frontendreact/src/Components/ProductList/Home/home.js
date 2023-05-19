import React, { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { CardBox, HomeStyle, MenuBox } from "./HomeStyle";

export const Home = (props) => {
  const [ordination, setOrdination] = useState("");

  const onChangeOrdination = (event) => {
    setOrdination(event.target.value);
  }

  const adicionaItensCarrinho = (produto) => {
    const novoProduto = props.cart.find((item) => item.id === produto.id)  // variavel pra receber o produto
    if (novoProduto === undefined) {                                       // verifica se o produto dentro do novoProduto Existe
      produto = {...produto, quantidade: 1}                                // adiona a propriedade quantidade ao produto
      props.setCart([...props.cart, produto])                              // Aqui o carrinho recebe o produto
      props.setAmount(props.amount + produto.value)                         //Aqui adiciona o valor total do primeiro pedido do produto     
    } else {
      const novoCarrinho = props.cart.map((produtoDoCarrinho) => {          // Esse else serve para que se o produto já existe no carrinho só adiciona quantidade
        if (produtoDoCarrinho.id === produto.id) {
          props.setAmount(props.amount + produto.value)                     // Aqui adiciona mais valores ao valor total do produto
          return {...novoProduto, quantidade: novoProduto.quantidade+1}
        } else {
          return produtoDoCarrinho
        }
      }) 
      props.setCart(novoCarrinho)
    }
  };
  
  let QuantidadeProdutos = 0;

  const listaDeProdutos = props.productList.map((item) => {
    QuantidadeProdutos++;

    return (
      <ProductCard
        produto={item}
        key={item.id}
        adicionaItensCarrinho={adicionaItensCarrinho}
      />
    );
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
