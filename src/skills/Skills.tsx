import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/style/Container.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title="web"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda commodi esse, eveniet excepturi ipsa itaque maxime molestias nam neque nihil odio provident qui, quidem recusandae temporibus, velit voluptate voluptates?Aperiam asperiores at autem consequatur, cupiditate debitis dignissimos dolor ea error eveniet ex id incidunt ipsa ipsam molestiae nobis nostrum pariatur provident quaerat quasi reiciendis rem reprehenderit tenetur unde velit?"}/>
                    <Skill title="web"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda commodi esse, eveniet excepturi ipsa itaque maxime molestias nam neque nihil odio provident qui, quidem recusandae temporibus, velit voluptate voluptates?Aperiam asperiores at autem consequatur, cupiditate debitis dignissimos dolor ea error eveniet ex id incidunt ipsa ipsam molestiae nobis nostrum pariatur provident quaerat quasi reiciendis rem reprehenderit tenetur unde velit?"}/><Skill title="web"
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda commodi esse, eveniet excepturi ipsa itaque maxime molestias nam neque nihil odio provident qui, quidem recusandae temporibus, velit voluptate voluptates?Aperiam asperiores at autem consequatur, cupiditate debitis dignissimos dolor ea error eveniet ex id incidunt ipsa ipsam molestiae nobis nostrum pariatur provident quaerat quasi reiciendis rem reprehenderit tenetur unde velit?"}/>
                </div>
            </div>
        </div>
    );
};

