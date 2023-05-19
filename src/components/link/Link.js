import A from "next/link";

export default function Link({children, href}) {
    return (
        <A href={href}>{children}</A>
    )
}