import css from './files-contianer.module.scss'

function FilesContainer({files = []}) {
    function FileDescriber(file) {
        const raw = Buffer
                        .from(file.data.data)
                        .toString()
                        .replace(/[{}"]/gmi, '')
                        .split(',')

        const blob = new Blob([new Uint8Array(raw)],{ type: file.type })

        // временное решение для проверки файлов
        return { onClick: async () => {
                window.open(URL.createObjectURL(blob));
            }}
    }

    return (
        <div className={css.files}>
            {files.map((file, idx) => {
                const {onClick} = FileDescriber(file);
                // // return <Item key={idx} title={file.title} />
                return <div key={idx}>
                    <button onClick={onClick}>href</button>
                </div>
            })}
        </div>
    )
}

// eslint-disable-next-line react/display-name
function Item({title, size, fileId}) {
    return (
        <div className={css["get-item"]}>
            <header className={css["get-item__header"]}>
                <h3>{title}</h3>
                <button>delete</button>
            </header>
            {size}
        </div>
    )
}


export default FilesContainer;