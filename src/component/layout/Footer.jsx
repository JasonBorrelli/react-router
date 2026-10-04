import Logo from "../ui/Logo.jsx"
import { Link } from "react-router"  

export default function Footer() {
    return (
        <footer className="d-flex flex-column text-center align-items-center justify-content-between bg-white border-top shadow-sm px-5 py-3 w-100 mb-2">
            <Link to="/"> <Logo/> </Link>
            <p className="my-auto ">&copy; 2026 My Website</p>
        </footer>
    )
} 