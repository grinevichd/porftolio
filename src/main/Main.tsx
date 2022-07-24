import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../common/style/Container.module.css"

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span>Hi there</span>
                <h1>I am Dmitry Grinevich</h1>
                <p>Frontend Developer.</p>
            </div>
            <div className={style.photo}>1</div>
            </div>
        </div>
    );
};
