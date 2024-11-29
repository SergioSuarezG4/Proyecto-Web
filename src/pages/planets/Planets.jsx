import { useFetch } from "../../hooks/useFetch"
import CardCharacter from "../../components/characters/CardCharacter"
import CardPlanet from "../../components/planets/CardPlanet"
import Pagination from '../../components/pagination/Pagination'
import Loading from "../../components/loading/Loading"

const Planets = () => {

    const {data, numberPage, setNumberPage, infoPage, isLoading} = useFetch({url:'planets'})

    return (
        <>
            {isLoading && <Loading/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-9">
                {!isLoading && data.map((planets)=>(
                        <CardPlanet 
                        key={planets.id}
                        planets={planets}/>
                ))}
            </div>
            <div className="container-pagination-planets mt-5">
                    <Pagination numberPage={numberPage} setNumberPage={setNumberPage} infoPage={infoPage}/>
            </div>
        </>
        
    )
}
export default Planets;