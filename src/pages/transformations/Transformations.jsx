import { useParams } from "react-router-dom"
import { useFetchSingle } from "../../hooks/useFetchSingle"
import Loading from "../../components/loading/Loading";
import CardCharacter from "../../components/characters/CardCharacter";


const Transformations = () => {

    const {id} = useParams();
    const {data, isLoading } = useFetchSingle({url:'characters' , id});

    const transformations = data?.transformations || [];


    return (
        <>
            {isLoading ? <Loading/>: ''}
            {transformations.length === 0 ? 
            (<p className="text-5xl text-center"> No hay transformaciones por mostrar de {data.name}</p>) 
            : (
                <>
                    <h1 className="text-5xl text-center font-bold text-white hover:text-gray-800">Transformaciones de {data.name}</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-9">
                        {!isLoading && transformations.map((transformation)=> (
                            <CardCharacter 
                            key={transformation.id}
                            characters={transformation}
                            showButtons={false} 
                            showDetails={false} />
                        ))}
                    </div>
                </>
            )}

        </>
    )
}
export default Transformations;