import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import style from './DropDown.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';

interface DropDownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    options: { value: string; name: string; }[];
    defaultValue: string;
    value: string | number;
    onSort: (sort: string) => void;
}

export const DropDown = ({options, defaultValue, value, onSort,...props}:DropDownProps):JSX.Element => {
  return (
        <>
          <div className={style.selectdiv} {...props}>
              <label>
                  <select value={value} onChange={e => onSort(e.target.value)}>
                      <option disabled value=''> {defaultValue} </option>
                      {options.map (option => 
                           <option key={uuidv4()} value={option.value}> {option.name} </option> 
                       )}
                  </select>
              </label>
          </div>
        </>
  )
}