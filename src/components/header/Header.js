import React from 'react';
import '../../styles/layout/header.scss';
import Logo from './logo/Logo';
import '../../styles/base/container.scss';
import '../../styles/utils/variables.scss';
import sprite from '../../images/sprite.svg';

const Header = () => {
    return (
        <div className="container headerContainer">
        <Logo />
        <header className="header">
        
        <ul className="navigation">
           <li className="navigationItem">
           Информация для покупателя
           </li>
           <li className="navigationItem">
           Блог
           </li>
           <li className="navigationItem">
           Регистрация
           </li>
           <li className="navigationItem">
           Вход в кабинет
           </li>
        </ul>
        <div className="burger">
            <svg className="burgerSvg">
               <use href={sprite + "#icon-burger"} />
            </svg>
        </div>
        </header>
        </div>
    );
}

export default Header;