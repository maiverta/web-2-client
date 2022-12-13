
import { getProducts } from "./services/products";
import React, { useState, useEffect } from 'react';
import AppNavbar from "./components/AppNavbar";
import ChartProducts from "./components/Chart/ChartProducts";
import ItemList from "./components/ItemList";
function App() {
  const [products, setProducts] = useState([]);
  const [amountOfProducts, setAmountOfProducts] = useState(0);
  const [isShowChart, setIsShowChart] = useState(false);

  const [productsAmountToChart, setProductsAmountToChart] = useState([])

  const addToChart = ((productIndex)=>{
    console.log(productIndex)
    setAmountOfProducts(prev=> prev+1)
    setProductsAmountToChart(prev=> {
       prev[productIndex] = prev[productIndex] + 1;
       console.log(prev)
       return [...prev];
      })

  })
  const removeFromChart = ((productIndex)=>{
    setAmountOfProducts(prev=> prev- 1)
    setProductsAmountToChart(prev=> {
      prev[productIndex] = prev[productIndex] - 1;
      return [...prev];
    })
  })
  useEffect( () => {
    console.log('hereeeee!!!')
    getProducts().then((data)=>{
      setProducts(data)
      setProductsAmountToChart(new Array(data.length).fill(0));
    })},[]);

  const showProducts = (()=>{
    return <ItemList items={products} onAddToChart={addToChart} onRemoveFromChart={removeFromChart}/>
  })

  const showChart = (()=>{
    return <ChartProducts items={products}  onAddToChart={addToChart} onRemoveFromChart={removeFromChart} 
    productsAmountToChart={productsAmountToChart}/>
  })
  const bla=((action)=>{
    setIsShowChart(action)
  })


  return (
    <div>
      <AppNavbar amount={amountOfProducts} onShowChart={bla}></AppNavbar>
      <h2> this is my cars</h2>
    {isShowChart ? showChart() : showProducts()}
    </div>
  );
}

export default App;
