import { Link } from "react-router";
import {Undo2} from "lucide-react";
import { Frown } from "lucide-react";

export default function NotFoundPage() {
    return (
        <section className="container text-center">
            <Frown size={100} className="m-auto" />
            <h1 className="fw-bold text-danger mt-3 fs-1">404 Page Not Found</h1>
            <p className="fs-3 fw-semibold text-secondary">Spiacenti, la pagina che stai cercando non esiste o è stata spostata</p>
            <Link to="/" className="text-decoration-none fw-semibold text-primary p-2 border border-primary w-25 rounded-pill"><Undo2 /> Torna alla Home</Link>
        </section>
    )
}    