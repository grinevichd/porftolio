import React from 'react';
import style from './Project.module.css'
import styleButton from '../../common/style/Button.module.css'
type ProjectPropsType = {
    description : string
    shortDescription : string

}

export const Project = (props:ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.projectImgItem}>
                <a href="#"><button className={styleButton.button} >Смотреть</button></a>
            </div>
            <div className={style.description}>{props.description}</div>
            <div className={style.shortDescription}>{props.shortDescription}</div>
        </div>
    );
};
