import React from 'react';
import style from './Projects.module.css'
import styleContainer from  '../common/style/Container.module.css'
import {Project} from "./project/Project";
export const Projects = () => {
    return (
        <div className={`${style.projectsBlock}`}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.projects}>
                <Project description="Тудулист" shortDescription="Краткое описание"/>
                <Project description="Сеть" shortDescription="Краткое описание"/>
                </div>
            </div>

        </div>
    );
};

