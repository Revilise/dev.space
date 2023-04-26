import css from './background.module.scss'

export default function BackgroundWrapper({children}) {
    return <div className={css.wrapper}>{children}</div>
}