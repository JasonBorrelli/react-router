import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router";
import {Undo2} from "lucide-react";



export default function SingolProductPage() {

    const { id } = useParams();
    
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    
    useEffect(() => {
        async function fetchProduct(){

            setIsLoading(true)

            await new Promise(resolve => setTimeout(resolve, 1000));
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error(`Errore nel caricamento del prodotto`);
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProduct();
    }, [id])

    return (
        <section>
            {isLoading && <p className="text-center fw-semibold d-flex align-items-center justify-content-center mt-3 text-info gap-2">
                <span className="spinner-border text-center fw-semibold  justify-content-center align-items-center text-info"></span>
                Caricamento del prodotto in corso...</p>}
            {error && <p className="text-center fw-semibold text-danger">Errore nel caricamento del prodotto</p>}
            {product !== null &&(
                <div className="container text-center">
                    <h1 className="mt-4 mb-4 fw-semibold ">{product.title}</h1>
                    <img className="mt-4 mb-4 border rounded-3 p-2 shadow" src={product.thumbnail} alt={product.title} />
                    <p className="mt-4 mb-4 fw-semibold fst-italic">{product.description}</p>
                    <p className="mt-4 mb-4 fw-bold text-primary">Price: {product.price}€</p>
                </div>
            )}
            <Link to={`/products`} className="container bg-light border border-primary d-flex justify-content-center align-items-center w-25 p-1 rounded-2 text-decoration-none text-primary fw-semibold m-auto mt-4"><span className="m-2"><Undo2 /></span> Back to Products </Link>
        </section>
    )
}    