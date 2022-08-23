import React, { DetailedHTMLProps, HTMLAttributes, useContext } from 'react'
import style from './Header.module.scss';
import cn from 'classnames';
import { Button } from '../../components';
import { LogContext } from '../../context';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({...props}:HeaderProps):JSX.Element => {

  return (
      <div {...props}>
        Header
      </div>
  )
}