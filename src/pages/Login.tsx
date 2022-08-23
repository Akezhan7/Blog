import React, { FormEvent, useContext, useEffect, useMemo, useState } from 'react';
import { Button, Input } from '../components';
import { LogContext } from '../context';
import { withLayout } from '../layout/Layout';

function Login () {

      const {isAuth, isLoading, setIsAuth} = useContext (LogContext);

      function submit (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsAuth (true);
        localStorage.setItem('log', 'true')
      }

      return (
        <>
          <div>
            <h2>Войти</h2>
              <div className="row">
                <form className="col s12" onSubmit={submit}>
                  <div className="row">
                    <div className="input-field col s6">
                      <Input text='' id="email" type="email" className="validate"/>
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                      <Input text='' id="password" type="password" className="validate"/>
                      <label htmlFor="password">Password</label>
                    </div>
                   </div> 
                   <Button>Войти</Button>
                </form>
              </div>
          </div>
        </>
      );
}

export default Login;