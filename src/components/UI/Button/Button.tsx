import React, { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'
import style from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
}

export const Button = ({children,...props}:ButtonProps):JSX.Element => {
  return (
        <>
           <button className="waves-effect waves-light btn" {...props}>{children}</button> 
        </>
  )
}