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

        <div className="container my-4 bg-light p-3 rounded-3 ">
            <div className="row g-4  d-flex justify-content-around text-center">

                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card border border- bg-light rounded-3 shadow-sm">
                            <img src={product.thumbnail} className="card-img-top  " alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title ">{product.title}</h5>
                                <p className="card-text fst-italic">{product.description}</p>
                                <p className="fw-bold text-primary">Price: {product.price}€</p>
                                <Link to={`/products/${product.id}`} className="container bg-light border border-primary p-1 rounded-2 text-decoration-none text-primary fw-semibold">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       </section>   
    )
}    