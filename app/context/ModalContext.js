'use client'
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [openingModalFromOtherBtn, setopeningModalFromOtherBtn] = useState(null);

    const openModal = () => {
        console.log('in open modal func');
        const modal = document.getElementById('my_modal_3');
        if (modal) modal.showModal();
    };
    const closeModal = () => {
        const modal = document.getElementById('my_modal_3');
        if (modal) modal.close();
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, setopeningModalFromOtherBtn, openingModalFromOtherBtn}}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
