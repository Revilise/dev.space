import css from './files-contianer.module.scss'
import axios from "axios";

function FilesContainer({files = [], removeFile}) {
    function FileDescriber(file) {
        const raw = Buffer
                        .from(file.data.data)
                        .toString()
                        .replace(/[{}"]/gmi, '')
                        .split(',')

        const blob = new Blob([new Uint8Array(raw)],{ type: file.type })

        // временное решение для проверки файлов
        return {
            onOpen: async () => {
                window.open(URL.createObjectURL(blob));
            },
            onDelete: async () => {
                axios.delete('/api/files/delete/' + file.id).then(res => {
                    if (res.data.ok) {
                        removeFile(file)
                }})
            }
        }
    }

    return (
        <div className={css.files}>
            {files?.map((file, idx) => {
                const {onOpen, onDelete} = FileDescriber(file);

                return <Item file={file} key={idx} onOpen={onOpen} onDelete={onDelete} />
            })}
        </div>
    )
}

// eslint-disable-next-line react/display-name
function Item({file, onDelete, onOpen}) {
    return (
        <div className={css["files-item"]}>
            <header className={css["files-item__header"]}>
                <h3>{file?.name}</h3>
                <div className={"files-item__buttons"}>
                    <button onClick={onOpen}>open</button>
                    <button onClick={onDelete}>delete</button>
                </div>
            </header>
            {file?.size}
        </div>
    )
}


export default FilesContainer;