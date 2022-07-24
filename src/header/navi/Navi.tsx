import React from 'react';
import style from "./Navi.module.css"

export const Navi = () => {
    return (
        <div className={style.navi}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>

        </div>
    );
};

