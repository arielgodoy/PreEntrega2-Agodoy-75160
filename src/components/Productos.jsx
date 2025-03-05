import { useParams } from "react-router-dom"; // Importa useParams desde react-router-dom
import { useEffect, useState } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoria } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const url = categoria
          ? `https://fakestoreapi.com/products/category/${categoria}`
          : "https://fakestoreapi.com/products";
        setLoading(true); 
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al obtener los productos");
        const data = await response.json();
        setProductos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoria]);
  
  console.log("Estado loading:", loading);

  if (loading)
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status" style={{ width: "5rem", height: "5rem", borderWidth: "5px" }}>
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );

  if (error) return <h2>{error}</h2>;

  return (
    <div className="container mt-4">
      <h2>Productos de FakeStore</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4">
            <div className="card mb-3">
              <img src={producto.image} alt={producto.title} className="card-img-top" style={{ height: "250px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description.substring(0, 100)}...</p>
                <p className="card-text"><strong>Precio: ${producto.price}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
