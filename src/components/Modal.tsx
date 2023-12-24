import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type MODAL ={
  title:string,
  children:ReactNode,
  onClose:()=>void
}

const  Modal:React.FC<MODAL> =({ title, children, onClose })=> {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <dialog open className="modal">
        <h2>{title}</h2>
        {children}
      </dialog>
    </>,
    document.body
  );
}

export default Modal;