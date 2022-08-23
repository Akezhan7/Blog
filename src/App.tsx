import './App.css'
import Posts from './pages/Posts';
import About from './pages/About';
import { withLayout } from './layout/Layout';
import Index from './pages/Index';
import PostPage from './pages/PostPage';
import { privateRoutes, PrivateRoutesProps, publicRoutes } from './router';
import AppRouter from './components/AppRouter/AppRouter';
import { useEffect, useState } from 'react';
import { IAppContext, LogContext } from './context';

function App() {

  const [isAuth, setIsAuth] = useState (false);
  const [isLoading, setIsLoading] = useState (true);
  
  useEffect (() => {
    if (localStorage.getItem ('log')) {
      setIsAuth (true);
    }
    setIsLoading(false);
  }, [])

  return (
    <>
      <LogContext.Provider value={{isAuth, isLoading, setIsAuth}}>
        <AppRouter/>
      </LogContext.Provider>
    </>
        
  )
}

export default withLayout(App);



