import css from './search.module.scss'
import Button from "../button/Button";
import {useState} from "react";

export default function Search({onSearch}) {
    const [value, setValue] = useState();

    function onClickHandle(e) {
        e.preventDefault();
        onSearch(value);
    }

    return (
        <div className={css.search}>
            <input value={value} onChange={e => setValue(e.target.value)} className={css.search__input} />
            <button content={css.search__button}>Найти</button>
        </div>
    )
}