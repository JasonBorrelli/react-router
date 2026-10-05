import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import Banner from "../ui/Banner";






export default function ProductsPage() {


const [products, setProducts] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState("")




useEffect(() => {
async function fetchProducts() {  
    
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000));
    try{
        const response = await fetch("https://dummyjson.com/products?limit=20");

        if (!response.ok) {
            throw new Error(`Errore nel caricamento dei prodotti`);
        }   
        const data = await response.json();
        setProducts(data.products);
        setIsLoading(false);
    } catch (error) {
        setError(error.message);
    } finally {
        setIsLoading(false);
    }   
};

fetchProducts();

},[]);


    return (
    <section className="container-fluid my-3 px-4">
      {/* Riga principale che divide la pagina in due colonne */}
      <div className="row g-4">
        
        {/* COLONNA SINISTRA: Banner Verticale */}
        <aside className="col-12 col-lg-3 d-flex flex-column">
          <div className="bg-white border rounded-3 shadow-sm p-3 h-100 d-flex flex-column justify-content-between text-center">
            <div>
              <h4 className="fw-bold text-primary mb-3">Pubblicità</h4>
              <p className="text-muted small">
                Scopri i nostri sponsor e le loro fantastiche offerte!
              </p>
              
              {/* Esempio di banner generato o immagine statica */}
              <div className="my-3">
                <Banner />
              </div>
            </div>

          </div>
        </aside>

        {/* COLONNA DESTRA: Contenuto Principale (Titolo, Loading, Error e Prodotti) */}
        <div className="col-12 col-lg-9">
          <div className="bg-white border rounded-3 shadow-sm px-4 py-3 w-100">
            <h1 className="text-center mb-4">ProductsPage</h1>

            {/* Loading State */}
            {isLoading && (
              <p className="text-center fw-semibold d-flex align-items-center justify-content-center mt-3 text-info gap-2">
                <span className="spinner-border text-info" role="status"></span>
                Caricamento dei prodotti in corso...
              </p>
            )}

            {/* Error State */}
            {error && (
              <p className="text-center fw-semibold text-danger mt-3">{error}</p>
            )}

            {/* Products Grid */}
            {!isLoading && !error && (
              <div className="container-fluid my-2 bg-light p-3 rounded-3">
                <div className="row g-4 justify-content-around text-center">
                  {products.map((product) => (
                    <div key={product.id} className="col-md-6 col-xl-4 mb-4">
                      <div className="card border bg-light rounded-3 shadow-sm h-100">
                        <img
                          src={product.thumbnail}
                          className="card-img-top"
                          alt={product.title}
                        />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <div>
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text fst-italic small">{product.description}</p>
                          </div>
                          <div>
                            <p className="fw-bold text-primary my-2">Price: {product.price}€</p>
                            <Link
                              to={`/products/${product.id}`}
                              className="d-block bg-light border border-primary p-2 rounded-2 text-decoration-none text-primary fw-semibold"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}