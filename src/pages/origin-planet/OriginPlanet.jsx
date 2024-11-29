import { useParams } from "react-router-dom"
import { useFetchSingle } from "../../hooks/useFetchSingle";
import Loading from "../../components/loading/Loading";
import CardCharacter from "../../components/characters/CardCharacter";

const OriginPlanet = () => {

    const {id} = useParams();
    const {data, isLoading} = useFetchSingle({url:'planets', id});

    const originPlanet = data?.characters || [];

    return(
        <>
            {isLoading && <Loading/>}
            {originPlanet.length === 0 ?
            (<p className="text-6xl text-center"> No hay personajes por mostrar del planeta {data.name}</p>)
            : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-9">
                    {!isLoading && (
                        originPlanet.map((originCharacter)=> (
                            <CardCharacter
                            key={originCharacter.id}
                            characters={originCharacter}/>
                        ))
                    )}
                </div>
            )}
        </>
    )
}
export default OriginPlanet;