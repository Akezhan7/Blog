import React, { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from 'react'
import style from './Input.module.scss';
import cn from 'classnames';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    text: string;
    id: string;
}

export const Input = ({text, id,...props}:InputProps):JSX.Element => {
  return (
        <>
        <div className={cn(style.inp, 'row')} {...props}>
            <div className={cn(style.col, 'input-field')}>
                <input id={id} type="text" className="validate" {...props}/>
                <label htmlFor={id}>{text}</label>
            </div>
        </div>
        </>
  )
}