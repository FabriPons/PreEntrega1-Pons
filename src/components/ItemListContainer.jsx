import React from 'react'
const productos = ["Picadora Manual","Angry Mama", "Licuadora", "Bowls"]; 

const ItemListContainer = () => {
  return (
  <>
    <div> Nuestros productos</div>
    <ul>
        {productos.map((productos, index) => (
          <li key={index}>{productos}</li>
        ))}
    </ul>
  </>
  )
};

export default ItemListContainer