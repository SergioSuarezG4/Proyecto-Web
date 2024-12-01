import { Link } from "react-router-dom";
import './CardPlanet.css'

const CardPlanet = ({planets}) => {
    return (
    
    <div>
        <div key={planets.id}>
            <div className="max-w-sm mx-auto mt-10">
                <div className=" card-planet">
                    <div className="">
                        <img  className="image-planet " src={planets.image} alt={planets.name} />
                    </div>
                    <div className="card-body-planet">
                        <h1 className="text-2xl font-bold">{planets.name}</h1>
                        <p className="card-planet-description text-lg font-semibold">{planets.description}</p>
                    <div className="flex justify-center align-center">
                        <Link to={`/planets/${planets.id}/characters`}>
                            <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-700 transition-colors">Ver Personajes de este Planeta.</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
)}
export default CardPlanet;