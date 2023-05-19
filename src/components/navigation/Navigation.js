import css from './navigation.module.scss'
import Link from "next/link";

function Navigation({children}) {
    return (
        <nav className={css.navigation}>
            {children}
        </nav>
    )
}

// eslint-disable-next-line react/display-name
Navigation.Section = ({children}) => {
    return (
        <div className={css.navigation__section}>
            {children}
        </div>
    )
}

// eslint-disable-next-line react/display-name
Navigation.Link = ({href, children, isActive}) => {
    return (
        <Link
            className={css.navigation__link + (isActive ? " " + css.active : '')}
            href={href}
        >
            {children}
        </Link>
    )
}

// eslint-disable-next-line react/display-name
Navigation.Title = ({children}) => {
    return <span className={css.navigation__title}>{children}</span>
}

export default Navigation;