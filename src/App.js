import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setproducts] = useState([]); 
  const [jewelery,setjewelery] = useState([]); 
  const [singleproduct, setSingleproduct] = useState([]);

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setproducts(json));
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => setCategories(json)); 
  fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>setjewelery(json)) 
  fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setSingleproduct(json))
  return ( 
    <>
    <div>
      <ul>
        {categories.map((category) => (
          <li>{category}</li>
        ))}
      </ul>

      <ul>
        {products.map((product) => ( 
    <div style={{margin:"50px"}}>
          <li>Title:{product.title}</li> 
          <li>Price:{product.price}</li> 
          <li>Id:{product.id}</li>  
          <li>Description:{product.description}</li> 
          </div>
        ))}   
      </ul> 

      <ul>
        {jewelery.map((jewel)=>( 
          <div style={{margin:"50px"}}>
            <li>Id:{jewel.id}</li>
            <li>Title:{jewel.title}</li> 
            <li>Description:{jewel.description}</li> 
            <li>Price:{jewel.price}</li> 
            <img src={jewel.image} style={{height:"100px"}}/> 
          </div> 
        ))} 
      </ul> 
      <ul>
          <div style={{margin:"50px"}}>
            <li>Id:{singleproduct.id}</li>
            <li>Title:{singleproduct.title}</li> 
            <li>Description:{singleproduct.description}</li> 
            <li>Price:{singleproduct.price}</li> 
            <img src={singleproduct.image} style={{height:"100px"}}/> 
          </div> 
         
      </ul> 
    
    </div> 
    </> 
  );
}

export default App;
