import React, { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { CardBox, HomeStyle, MenuBox, Select } from "./HomeStyle";

export const Home = (props) => {
  const [ordination, setOrdination] = useState("");
  // const [sortedProducts, setSortedProducts] = useState([]);  // Criei a variável sortedProducts para armazenar a lista de produtos ordenada
  const onChangeOrdination = (event) => {                                   //No evento onChangeOrdination, atualizei o estado ordination e chamei uma função de ordenação dos produtos. Essa função é responsável por ordenar a lista de produtos com base no critério selecionado.
    const selectedOrdination = event.target.value;
    setOrdination(selectedOrdination);
    sortProducts(selectedOrdination);
  }
// console.log("ListaFiltrada", props.listaFiltrada, "listaNORMAL", props.productList)
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

  const sortProducts = (ordination) => {                      //Criei a função sortProducts que será responsável por ordenar a lista de produtos com base no critério selecionado. Essa função cria uma cópia da lista de produtos (props.productList) e a ordena com base no critério selecionado. Em seguida, atualiza o estado sortedProducts com a lista ordenada.

    if (ordination === "Crescente") {
      props.productList.sort((a, b) => a.value - b.value);// garante que a sua lista fique organizada
      props.listaInicial.sort((a, b) => a.value - b.value); // garante que a sua lista fique organizada
    } else if (ordination === "Decrescente") {
      props.productList.sort((a, b) => b.value - a.value);// garante que a sua lista fique organizada
      props.listaInicial.sort((a, b) => b.value - a.value);// garante que a sua lista fique organizada

    }


    props.setListaFiltrada([...props.productList]); //--!essa é a lista que se modifica a partir dos FILTROS // muda o valor da lista anterior de acordo com a forma em que você quer organizar.
    props.setListaInicial([...props.listaInicial]); //--!essa lista é a padrão, ou seja ela não é FILTRADA // muda o valor da lista anterior de acordo com a forma em que você quer organizar.
  };

  const listaDeProdutos = props.productList.map((item) => {       // Atualizei a variável listaDeProdutos para usar a lista ordenada sortedProducts em vez de props.productList.
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
          <Select value={ordination} onChange={onChangeOrdination}>
            <option value={""} disabled>
              Selecione
            </option>
            <option value={"Crescente"}>Crescente</option>
            <option value={"Decrescente"}>Decrescente</option>
          </Select>
        </label>
      </MenuBox>
      <CardBox>{listaDeProdutos}</CardBox>
    </HomeStyle>
  );
};









