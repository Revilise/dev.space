import css from './link.module.scss';
import * as NextLink from "next/link";

export default function Link({children}) {
    return <NextLink className={css.link}>{children}</NextLink>
}