import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../../context/Modal';
import { getEvents } from '../../../store/events';
import EditEvent from './EditEvent';

function EditFormModal({event}) {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        dispatch(getEvents())
    },[showModal, dispatch])
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
