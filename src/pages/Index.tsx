import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { Button } from '../components';
import { LogContext } from '../context';

import { withLayout } from '../layout/Layout';

interface IndexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Index () {
  const {isAuth, setIsAuth} = useContext (LogContext);
  function logout () {
    setIsAuth (false);
    localStorage.removeItem('log')
  } 
      return (
        <>
          <div><h1>Главная страница</h1></div>
          <Button onClick={logout}>Выйти</Button>
        </>
      );
}

export default Index;