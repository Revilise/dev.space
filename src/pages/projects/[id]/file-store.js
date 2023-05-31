import ProjectLayout from "../../../components/project/ProjectLayout";
import {useRouter} from "next/router";
import Search from "../../../components/search/Search";
import FilesContainer from "../../../components/files-container/FilesContainer";
import FileLoaderAPI from "../../../features/file-loader/FileLoaderAPI";
import useFiles from "../../../lib/hooks/useFiles";

export default function FileStorePage() {
    const router = useRouter();

    const {files, removeFile, addFile} = useFiles(router.query.id);

    function SearchHandle(text) {
        //query
        //setFiles
    }

    return (
        <ProjectLayout projectId={router.query.id}>
            <Search onSearch={SearchHandle} />
            <FileLoaderAPI addFile={addFile} />
            <FilesContainer removeFile={removeFile} files={files} />
        </ProjectLayout>
    )
}