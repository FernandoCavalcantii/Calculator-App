import React from 'react';
import Header from '../../Components/Header';
import style from './style.module.css';
import Footer from '../../Components/Footer/Footer';

const Login = () => {
  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <h2>A calculadora online mais rápida e prática do mercado!</h2>
      </main>
      <Footer />
    </>
  );
};

export default Login;
