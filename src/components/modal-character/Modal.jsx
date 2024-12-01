import './Modal.css'

const Modal = ({isVisible , onClose, character}) => {
    return(
        <>
        {isVisible && (
            <div className="fixed inset-0 bg-opacity- backdrop-blur-sm 
            flex justify-center items-center rounded-lg ">
                <div className="w-[600px] flex flex-col">
                    <button className="text-black text-xl place-self-end" onClick={onClose}>X</button>
                    <div className="container-modal-name bg-white text-black text-4xl text-center font-semibold p-3">{character.name}</div>
                        <div className="grid grid-cols-6">
                            <div className="container-modal-img flex justify-center items-center bg-white col-span-2 row-span-10 col-span-start-3">
                                <img className="img-modal" src={character.image} alt={character.name}/>
                            </div>
                            <div className="container-modal-info bg-white col-span-4 row-span-10 p-4 text-black">
                                <span className="text-2xl font-semibold">Race:</span>
                                <p className="text-2xl font-semibold">{character.race}</p>
                                <span className="text-xl font-semibold">Description:</span>
                                <p className="description-modal text-base">{character.description}</p>
                            </div>
                        </div>
                    </div>
            </div>
        )}
        </>
    )
}

export default Modal;