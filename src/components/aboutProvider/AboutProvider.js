import React from 'react';
import '../../styles/base/container.scss';
import '../../styles/layout/about-provider.scss';

const AboutProvider = () => {
    return (
        <>
        <main className="main">
        <div className="container">
        <h2 className="providerTitle">
            Інформація для постачальників
        </h2>
        </div>
        <div className="providerBgImg"></div>
        
        <ul className="providerList">
            <li className="providerItem">
                100+ перевірених постачальників 
            </li>
            <li className="providerItem">
            100 000+ товарних позицій 
            </li>
            <li className="providerItem">
            180 000+ користувачів у місяць
            </li>
            <li className="providerItem">
            45% зростання аудиторії за 2019 рік
            </li>
        </ul>
        
        </main>
        </>
    );
}

export default AboutProvider;