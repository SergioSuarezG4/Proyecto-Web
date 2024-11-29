import { useModal } from "../../hooks/useModal";

const Modal = ({isVisible , onClose}) => {

    return(
        <>
        {isVisible && (
            <div className="fixed inset-0 bg-opacity- backdrop-blur-sm 
            flex justify-center items-center ">
                <div className="w-[600px] flex flex-col">
                    <button className="text white text-xl place-self-end" onClick={onClose}>X</button>
                    <div className="bg-white p-2 rounded text-black">Modal</div>
                </div>
            </div>
        )}
        </>
    )
}

export default Modal;