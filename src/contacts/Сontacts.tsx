import React from 'react';
import style from './Сontacts.module.css'
import styleContainer from '../common/style/Container.module.css'
import styleButton from '../common/style/Button.module.css'
export const Сontacts = () => {
    return (
        <div className={style.contactsContainer}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <h2 className={style.title}>Контакты</h2>

                        <form className={style.formContainer}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea>
                    </textarea>
                        </form>
                    <button className={`${styleButton.button} ${style.button}`}>Отправить</button>
            </div>
        </div>
    );
};

