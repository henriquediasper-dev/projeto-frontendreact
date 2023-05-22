import { AppStyle } from "./AppStyle";
import { Filters } from "./Components/Filters/Filters";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";
import { productList } from "./Components/Assents/productsList";
import GlobalStyle from "./GlobalStyle";
import { useEffect, useState } from "react";


const App = () => {

  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState(null)
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)
 //!-- MODIFICADO
  const [listaFiltrada, setListaFiltrada] = useState([])
  const [listaInicial, setListaInicial] = useState([...productList]) // Criação de uma lista que sempre ficará organizada, essa lista contem o valor do seu productList

 //!-- MODIFICADO
useEffect(() => {
  const novoArray = listaInicial.filter((produto) => { // Aqui estamos fazendo um filtro na lista organizada
    return minFilter? produto.value >= minFilter : produto
  }) 
  .filter((produto) => {
    return maxFilter? produto.value <= maxFilter : produto
  })
  .filter((produto) => {
    return searchFilter? produto.name.toLowerCase().includes(searchFilter.toLowerCase()) : produto
  })
  setListaFiltrada(novoArray)

}, [minFilter, maxFilter, searchFilter])

  return (
    <AppStyle>
      <GlobalStyle />
      <Filters
       minFilter={minFilter} 
       maxFilter={maxFilter}
       searchFilter={searchFilter}
       setMinFilter={setMinFilter}
       setMaxFilter={setMaxFilter}
       setSearchFilter={setSearchFilter}/>
      <Home 
      listaInicial = {listaInicial}
      setListaInicial = {setListaInicial}
      productList={listaFiltrada}
      cart={cart}
      amount={amount}
      setCart={setCart}
      setAmount={setAmount}
      setListaFiltrada={setListaFiltrada}/>
      <Cart cart={cart}
      amount={amount}
      setCart={setCart}
      setAmount={setAmount} />
    </AppStyle>
  );
}

export default App;
