import React, { useContext, useEffect, useState } from "react";
import LoginContext from "../../Context/Login/LoginContext";
import { useHistory } from 'react-router-dom';
import style from './style.module.css';

const Header = () => {
  const { userName, setUserName } = useContext(LoginContext);
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const storageName = localStorage.getItem("user");

  useEffect(() => {
    if (userName.length > 3 && password.length > 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userName, password])

  const handleUserChange = ({ target }) => {
    setUserName(target.value)
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const login = () => {
    localStorage.setItem("user", userName);
    history.push('/calculator');
  }

  const logout = () => {
    setUserName('');
    setPassword('');
    localStorage.setItem("user", '');
    history.push('/');
  }

  return (
    <header className={ style.header }>
      {
        history.location.pathname === "/" ? 
        <>
          <h1>Calculadora</h1>
          <input type="text" placeholder="Username" onChange={ handleUserChange }/>
          <input type="password" placeholder="Password" onChange={ handlePasswordChange }/>
          <button type="submit" onClick={ login } disabled={ disabled }>Login</button>
        </> : 
        <>
          <h1>Calculadora</h1>
          {storageName}
          <button type="submit" onClick={ logout }>Logout</button>
        </>
      }
    </header>
  )
}

export default Header;
