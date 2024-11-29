import { useState } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/Modal";



const CardCharacter = ({characters, showButtons = true, showDetails = true}) => {

    const {openModal, showModal, closeModal} = useModal();

    return(

    <div>
        <div key={characters.id}>
            <div className="mt-10">
                <div className=" card-character">
                    <div className="flex justify-center items-center">
                        <img  className="image-character" src={characters.image} alt={characters.name} />
                    </div>
                    <div className="card-body">
                        <h1 className="text-2xl font-bold">{characters.name}</h1>
                        {showDetails ? (
                            <div>
                                <p className="text-xl font-bold mt-2">{characters.race}- {characters.gender}</p>
                                <span className="text-2xl font-semibold">Total Ki:</span>
                                <p class="text-lg font-semibold">{characters.maxKi}</p>
                                <span className="text-2xl font-semibold">Affiliation:</span>
                                <p className="text-lg font-semibold">{characters.affiliation}</p>
                            </div>
                          
                        ): (
                            <div>
                                <span className="text-2xl font-semibold">Ki:</span>
                                <p className="text-lg font-semibold">{characters.ki}</p>
                            </div>

                        )
                        }
                        
                        {showButtons ? (
                            <div className="button-characters">
                            <Link to={`/character/transformations/${characters.id}`}>
                                <button className="button-trans mt-4 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-700 transition-colors">Transformaciones</button>
                            </Link>
                            <button onClick={openModal} className="button-ver mt-4 px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-700 transition-colors">Ver más</button>
                            <Modal  isVisible={showModal} onClose={closeModal}/>
                        </div>
                        ) : '' }
                        
                    </div>
                </div>
            </div>
        </div>               
    </div>
)}

export default CardCharacter;