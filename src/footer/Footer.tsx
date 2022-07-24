import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/style/Container.module.css'
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.wrapper}`}>
            <h2>Гриневич Дмитрий</h2>
            <div className={style.container}>
                <div className={style.item}/>
                <div className={style.item}/>
                <div className={style.item}/>
                <div className={style.item}/>
            </div>
                <span>Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;