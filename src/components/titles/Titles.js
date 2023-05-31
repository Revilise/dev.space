import css from './titles.module.scss';

class Titles {
    h1 = ({children}) => <h1 className={css.h1}>{children}</h1>

    h2 = ({children}) => <h2 className={css.h2}>{children}</h2>

    h3 = ({children}) => <h3 className={css.h3}>{children}</h3>
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Titles();