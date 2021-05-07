import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function promptModal() {
        setModalIsOpen(true);
    }

    function removeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={promptModal}>
                    Delete
                </button>
            </div>
            {modalIsOpen ? (
                <Modal onCancel={removeModal} onConfirm={removeModal} />
            ) : null}
            {modalIsOpen ? <Backdrop onRemoveBackdrop={removeModal} /> : null}
        </div>
    );
}

// {modalIsDisplayed && <Modal />}
// {modalIsDisplayed && <Backdrop />}

export default Todo;
