import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditEvent from './EditEvent';

function EditFormModal({event}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='button' onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditEvent event={event} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default EditFormModal;
