import React from "react";

const ItemListContainer = ({ mensaje, setCartCount }) => {
  return (
    <div className="container mt-4">
      <h2>{mensaje}</h2>      
      <button className="btn btn-success mt-3" onClick={() => setCartCount(prevCount => prevCount + 1)}>
        Agregar al carrito
      </button>
      <button className="btn btn-danger mt-3" onClick={() => setCartCount(prevCount => prevCount - 1)}>
        Quitar Del carrito
      </button>

    </div>
  );
};

export default ItemListContainer;
