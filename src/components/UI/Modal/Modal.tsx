import React, { ButtonHTMLAttributes, DetailedHTMLProps, Dispatch, HTMLAttributes, ReactNode, SetStateAction} from 'react'
import style from './Modal.module.scss';
import cn from 'classnames';

interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}

export const Modal = ({visible, setVisible, children, ...props}:ModalProps):JSX.Element => {
  return (
        <div className={cn(style.modal, {
          [style.active]: visible === true
        })} onClick={() => setVisible(false)} {...props}>
            <div className={style.modalContent} onClick={(e => e.stopPropagation())}>
                {children}
            </div>
        </div>
  )
}