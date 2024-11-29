
const Pagination = ({infoPage, numberPage, setNumberPage}) => {

        const next = () => {
            if(numberPage < infoPage.totalPages){
                setNumberPage(numberPage + 1);
            }
        }
        
        const previous = () =>{
            if (numberPage > 1){
                setNumberPage(numberPage - 1)
            }
        }
    
        return(
            <div className="flex justify-center items-center">
                <nav>
                <ul className="flex items-center">
                    <li className=""><button onClick={previous}className="px-3 py-2 bg-gray-600 text-white  rounded hover:bg-gray-900 transition">Previous</button></li>
                    <li className=""><button  className="px-2 py-2 bg-gray-600 text-white hover:bg-gray-900 transition">{numberPage}</button></li>
                    <li className=""><button onClick={next}className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-900 transition">Next</button></li>
                </ul>
            </nav>
            </div>
            
          
        )
    

}
export default Pagination;