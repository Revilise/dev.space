import css from './header.module.scss'

export default function Header({children}) {
    return (
        <header className={css.header}>
            {children}
        </header>
    )
}