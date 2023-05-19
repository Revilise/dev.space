import css from './files-contianer.module.scss'

function FilesContainer({files = []}) {
    return (
        <div className={css.files}>
            {files.map((file, idx) => <Item key={idx} title={file.title} />)}
        </div>
    )
}

// eslint-disable-next-line react/display-name
function Item({title, size, fileId}) {
    return (
        <div className={css["files-item"]}>
            <header className={css["files-item__header"]}>
                <h3>{title}</h3>
                <button>delete</button>
            </header>
            {size}
        </div>
    )
}


export default FilesContainer;