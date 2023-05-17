import React from "react";
import {
  AsideStyleFilters,
  TituloStyleFilters,
  InputStyleFilters,
} from "./FilterStyle";

export const Filters = (props) => {

  const onChangeMinFilter = (event) => {
    const value = parseInt(event.target.value)
    if(value < 0){
        alert ("Valor mínimo é 0")
        props.setMinFilter("");
    } else {
        props.setMinFilter(event.target.value);
    }
  };

  const onChangeMaxFilter = (event) => {
    const value = parseInt(event.target.value)
    if(value < 0){
        alert ("Valor mínimo é 0")
        props.setMaxFilter("");
    } else {
        props.setMaxFilter(event.target.value);
    }
  };

  const onChangeSearchFilter = (event) => {
    props.setSearchFilter(event.target.value);
  };

  return (
    <AsideStyleFilters>
      <TituloStyleFilters>Filtros</TituloStyleFilters>
      <label>
        Valor mínimo:
        <InputStyleFilters
          value={props.minFilter}
          onChange={onChangeMinFilter}
          type="text"
        />
      </label>
      <label>
        Valor máximo:
        <InputStyleFilters 
        value={props.maxFilter}
        onChange={onChangeMaxFilter}
        type="text" />
      </label>
      <label>
        Busca por nome:
        <InputStyleFilters 
        value={props.searchFilter}
        onChange={onChangeSearchFilter}
        type="text" />
      </label>
    </AsideStyleFilters>
  );
};
