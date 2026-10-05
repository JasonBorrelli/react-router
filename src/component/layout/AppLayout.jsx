import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";


export default function AppLayout() {
    return (
        <>
            <Header />
            <main className="container-fluid my-4">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}