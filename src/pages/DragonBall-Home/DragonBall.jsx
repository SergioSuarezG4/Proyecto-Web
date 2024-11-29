import Pagination from "../../components/pagination/Pagination";
import { useFetch } from "../../hooks/useFetch";
import CardCharacter from "../../components/characters/CardCharacter";
import Loading from "../../components/loading/Loading";

const DragonBall = () => {

    const {data, numberPage, infoPage, setNumberPage, isLoading} = useFetch({url:'characters'})
  
    return(
        <>
            {isLoading && <Loading/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-9">
            {!isLoading && data.map((characters) => (
                    <CardCharacter characters={characters}/>
            ))}         
            </div>
            <div className="container-pagination mt-4">
                <Pagination infoPage={infoPage} numberPage={numberPage} setNumberPage={setNumberPage} ></Pagination>
            </div>
        </>
        
    )
}
export default DragonBall;