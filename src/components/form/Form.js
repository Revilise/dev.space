export default function Form({children}) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            {children}
        </form>
    )
}