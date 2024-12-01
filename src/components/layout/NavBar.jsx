import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-9xl mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                <Link to='/'>
                    <img className="image-nav"src= "https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"alt="" />
                </Link>
                <div className="nav-info space-x-4">
                <Link className="text-gray-300 hover:text-gray-900" to='/'>Personajes</Link>
                <Link className="text-gray-300 hover:text-gray-900" to='/planets'>Planetas</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;