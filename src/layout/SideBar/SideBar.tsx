import React, { DetailedHTMLProps, HTMLAttributes, useContext } from 'react'
import style from './SideBar.module.scss';
import cn from 'classnames';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';
import { LogContext } from '../../context';
import { Button } from '../../components';

interface SideBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SideBar = ({...props}:SideBarProps):JSX.Element => {
  

  return (
        <div className={style.wrap} {...props}>
            <div className={style.logo}><img src={Logo} alt="Logo"/></div>
            <div className={style.list}>
                <div className={style.item}><Link to='/'>Главная</Link></div>
                <div className={style.item}><Link to='/posts'>Посты</Link></div>
                <div className={style.item}><Link to='/about'>О нас</Link></div>
                <div className={style.item} ><span></span></div>
            </div>
            
        </div>
  )
}