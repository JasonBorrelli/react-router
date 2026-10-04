import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";




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
       <section className="d-flex flex-column align-items-center m-3 bg-white border rounded-3 shadow-sm px-5 py-3 w-100">
        <h1>ProductsPage</h1>


        {isLoading && <p className="text-center fw-semibold d-flex align-items-center justify-content-center mt-3 text-info gap-2">
            <span className="spinner-border text-center fw-semibold  justify-content-center align-items-center text-info"></span>
            Caricamento dei prodotti in corso...</p>}
        

        {error && <p className="text-center fw-semibold text-danger">Errore nel caricamento dei prodotti</p>}

        <div className="container mt-4 bg-light">
            <div className="row g-4 text-center">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="fw-bold text-primary">Price: {product.price}€</p>
                                <Link to={`/products/${product.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </section>   
    )
}    