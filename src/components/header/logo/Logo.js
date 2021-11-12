import React from 'react';
import sprite from '../../../images/sprite.svg';
import '../../../styles/components/logo.scss'

const Logo = () => {
    return (
        <div className="logo">
            <svg className="logoSvg">
               <use href={sprite + "#icon-logo"} />
            </svg>
        </div>
    );
}

export default Logo;