import ProjectLayout from "../../../components/project/ProjectLayout";
import {useRouter} from "next/router";
import Search from "../../../components/search/Search";
import {useEffect, useState} from "react";
import FilesContainer from "../../../components/files-container/FilesContainer";
import FileLoaderAPI from "../../../features/file-loader/FileLoaderAPI";
import axios from "axios";

export default function FileStorePage() {
    const router = useRouter();
    const [files, setFiles] = useState([]);

    useEffect(() => {
        if (router.query.id) axios.get("/api/files/get/" + router.query.id).then(res =>  setFiles(res.data));
    }, [router.query.id])

    function SearchHandle(text) {
        //query
        //setFiles
    }

    return (
        <ProjectLayout projectId={router.query.id}>
            <Search onSearch={SearchHandle} />
            <FileLoaderAPI />
            <FilesContainer files={files} />
        </ProjectLayout>
    )
}