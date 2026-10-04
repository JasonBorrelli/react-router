import { NavLink, Link } from "react-router"
import Logo from "../ui/Logo.jsx" 

const navLinks = [
    { label: "Home",
      path: "/",
    },
    
    {  
      label: "Products", 
      path: "/products",
    },

    { 
      label: "Chi siamo" ,
      path: "/aboutus",
    },
]



export default function Header() {
    return (
        <header className="d-flex justify-content-between bg-white border-bottom shadow-sm px-5 py-3 w-100">
            <Link to="/"> <Logo/> </Link>
            <ul className="list-unstyled d-flex gap-5 justify-content-between my-auto align-items-center">
                {navLinks.map(item => (
                    <li key={item.label}>
                        <NavLink to={item.path} className={({ isActive }) => isActive ? "text-dark text-decoration-none fw-bolder" : " text-dark text-decoration-none"}>{item.label}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    )
} 