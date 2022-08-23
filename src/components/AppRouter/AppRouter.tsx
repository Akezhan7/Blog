import React, { useContext } from 'react'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import { LogContext } from '../../context';
import { privateRoutes, publicRoutes } from '../../router';
import { v4 as uuidv4 } from 'uuid';
import { Loader } from '../UI/Loader/Loader';
const AppRouter = () => {
  const {isAuth, isLoading} = useContext(LogContext);
  
  if (isLoading) {
    return <Loader/>
  }
 
  return (
    <>
        <Routes>
        {
        isAuth
            ? <>
                {privateRoutes.map (item => (
                    <Route key={uuidv4()} path={item.path} element={<item.element/>}/>
                    ))}
                <Route path="*" element={<Navigate to ="/posts" />}/>
              </>
                
              
            : <>
                {publicRoutes.map (item => (
                    <Route key={uuidv4()} path={item.path} element={<item.element/>}/>
                    ))}
                <Route path="*" element={<Navigate to ="/login" />}/>
              </>
         }
         </Routes>
    </>
  )
    
}

export default AppRouter;