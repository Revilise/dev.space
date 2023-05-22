import ProjectLayout from "../../../components/project/ProjectLayout";
import {useRouter} from "next/router";
import Search from "../../../components/search/Search";
import {useState} from "react";
import FilesContainer from "../../../components/files-container/FilesContainer";

export default function FileStorePage() {
    const router = useRouter();
    const [files, setFiles] = useState([
        {title: 1}, {title: 2}, {title: 3}, {title: 4}, {title: 5}, {title: 6},
        {title: 1}, {title: 2}, {title: 3}, {title: 4}, {title: 5}, {title: 6}
    ]);

    function SearchHandle(text) {
        //query
        //setFiles
    }

    return (
        <ProjectLayout projectId={router.query.id}>
            <Search onSearch={SearchHandle} />
            <FilesContainer files={files} />
        </ProjectLayout>
    )
}