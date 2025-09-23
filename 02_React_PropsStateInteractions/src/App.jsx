import { useState } from "react";

import ProductCard from "./components/ProductCard"

import './App.css'

function App() {
  let productArray = [
  {name: "Laptop",price: 1299,inStock: true},
  {name: "Keyboard", price: 500, inStock: false},
  {name: "Mouse",price: 100,inStock: true}];

  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productArray);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setFilteredProducts(() => productArray.filter(x => x.name.toLowerCase().includes(query.toLowerCase())));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => {
          setQuery(e.target.value);
        }}/>
        <button type="submit">Pretraži</button>
      </form>
      <p>{query}</p>
      {filteredProducts.map((value,index) => (<ProductCard key={index} name={value.name} price = {value.price} instock={value.inStock}/>))}
    </>
  )
}

export default App
