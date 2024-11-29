import { useLocation } from "react-router-dom"
import loadingCharacter from "../../assets/img/dragon-logo.gif"
import loadingPlanet from "../../assets/img/planet-logo.gif"



const Loading = () =>{
    const location = useLocation();

    const loadingImage = location.pathname === '/planets' ?
    loadingPlanet : loadingCharacter

    return (
        <div className="flex justify-center items-center">
            <img className="img-loading" src={loadingImage} alt="loading"  />
        </div>
    )
}

export default Loading;